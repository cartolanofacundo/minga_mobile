import { View, Text, Image, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../store/user/authActions';
import { InputRounded } from '../../components/InputRounded';
import { useEffect, useState, useCallback } from 'react';
import { Link } from '@react-navigation/native';
const { sign_in, clean_up } = actions

export function SignIn({ navigation }) {
    let dispatch = useDispatch()
    let { error, loading } = useSelector(store => store.user)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
        if (error?.credentials) {
            Alert.alert('Wrong credentials', 'Your credentials are incorrect please try again', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        }
        if (error?.verify) {
            Alert.alert('Verified', 'Your email was not verify', [
                { text: 'OK', onPress: () => navigation.navigate("Verify") },
            ]);

        }

    }, [error])
    function handleSignIn() {
        let data = {
            email: email,
            password: password
        }
        dispatch(sign_in({ data }))
    }
    return (
        <View className="bg-white p-4 flex flex-col h-full w-full  justify-center items-center pt-28">
            <View className="flex flex-row justify-between w-[120px]">
                <Text className="text-4xl text-[#F97316] font-medium">Minga</Text>
                <Image className="w-8 h-8 object-cover" source={require('../../../assets/logo.png')} />
            </View>
            <Text className="text-3xl font-bold my-4">Welcome <Text className="text-[#F97316]">Back</Text>!</Text>
            <Text className="my-2 text-center text-sm text-[#272727] font-medium">Discover manga, manhua and manhwa, track your progress, have fun, read manga.</Text>
            <InputRounded
                name={"email"}
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
            <TouchableOpacity className="w-3/4 bg-[#F97316] rounded-full flex flex-row justify-center items-center py-2 my-4" onPress={handleSignIn}>
                <Text className="text-white font-bold text-lg">{loading ? <ActivityIndicator color="#ffffff" /> : "Sign In"}</Text>
            </TouchableOpacity>
            <Text className="text-[#1f1f1f] text-lg">you dont have an account yet? <Link to={{ screen: 'Register' }} ><Text className="text-[#F97316] font-bold">Sign Up</Text></Link> </Text>
            <Text className="text-[#1f1f1f] text-lg">Go back to <Link to={{ screen: 'Home' }}><Text className="text-[#F97316] font-bold">home page</Text> </Link> </Text>
        </View>
    )

}