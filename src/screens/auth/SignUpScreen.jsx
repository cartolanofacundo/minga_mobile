import { useState, useCallback, useEffect } from 'react';
import { Link } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import actions from '../../store/user/authActions';
import { InputRounded } from '../../components/InputRounded';

const {sign_up, clean_up} = actions;


export function SignUp({ navigation }) {
    const dispatch = useDispatch()
    const { error, loading, success } = useSelector(store => store.user)
    const [name, setName] = useState("")
    const [last_name, setLast_name] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [photo, setPhoto] = useState("")

    function handleSubmit() {
        let data = {
            name: name,
            last_name: last_name,
            email: email,
            password: password,
            photo: photo
        }
        dispatch(sign_up({data}))
    }
    useFocusEffect(
        useCallback(() => {
            // Do something when the screen is focused
            dispatch(clean_up())
            return () => {
                dispatch(clean_up())
                // Do something when the screen is unfocused
                // Useful for cleanup functions
            };
        }, [])
    );
    
    useEffect(() => {
        if (error?.userExist) {
            Alert.alert('Already exists', 'Your user are already created, please sign in', [
                { text: 'OK', onPress: () => navigation.navigate('Login') },
            ]);

        }
        if (success) {
            Alert.alert('User created', 'Your user was succesfully created, verify your email', [
                { text: 'OK', onPress: () => navigation.navigate('Verify') },
            ]);

        }


    }, [success, error])

    return (
        <View className="flex flex-col justify-center items-center w-full h-full bg-white p-4">
            <View className="flex flex-row justify-between w-[120px]">
                <Text className="text-4xl text-[#F97316] font-medium">Minga</Text>
                <Image className="w-8 h-8 object-cover" source={require('../../../assets/logo.png')} />
            </View>
            <Text className="text-3xl font-bold my-2">Welcome</Text>
            <Text className="my-2 text-center text-sm text-[#272727] font-medium">Discover manga, manhua and manhwa, track your progress, have fun, read manga.</Text>
            <InputRounded
                name={"name"}
                icon={"account-circle"}
                data={name}
                error={error?.name}
                handleData={setName}
            />
            <InputRounded
                name={"last Name"}
                icon={"account-circle"}
                data={last_name}
                error={error?.last_name}
                handleData={setLast_name}
            />
            <InputRounded
                name={"Photo"}
                icon={"camera"}
                data={photo}
                error={error?.photo}
                handleData={setPhoto}
            />
            <InputRounded
                name={"Email"}
                icon={"email"}
                data={email}
                error={error?.email}
                handleData={setEmail}
                
            />
            <InputRounded
                name={"password"}
                icon={"lock"}
                data={password}
                error={error?.password}
                handleData={setPassword}
                
            />
            <TouchableOpacity className="w-3/4 bg-[#F97316] rounded-full flex flex-row justify-center items-center py-2 my-4" onPress={handleSubmit}>
                <Text className="text-white font-bold text-lg">{loading ? <ActivityIndicator color="#ffffff" /> : "Sign Up"}</Text>
            </TouchableOpacity>
            <Text className="text-[#1f1f1f] text-lg">Already have an account? <Link to={{ screen: 'Login' }} ><Text className="text-[#F97316] font-bold">Sign In</Text></Link> </Text>
            <Text className="text-[#1f1f1f] text-lg">Go back to <Link to={{ screen: 'Home' }}><Text className="text-[#F97316] font-bold">home page</Text> </Link> </Text>
        </View>
    )

}