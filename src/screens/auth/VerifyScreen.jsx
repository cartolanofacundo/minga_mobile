import { useState, useEffect } from 'react';
import { View, Text,TextInput, TouchableHighlight, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../store/user/authActions';

const {verify_code} = actions

export function Verify({ navigation }) {
    const {error, verify} = useSelector(store => store.user)
    const dispatch = useDispatch()
    const [code, setCode] = useState("")
    useEffect(() => {
        if(error?.verifyFailed){
            Alert.alert('Error', 'Invalid code, please retry', [
                { text: 'OK', onPress: () => {setCode("")} },
            ]);
        }
        if(verify){
            Alert.alert('Success', 'Your account was validated, please sign in', [
                { text: 'OK', onPress: () => {navigation.navigate("Login")} },
            ]);
            
        }
    },[error, verify])
    function handleSubmit(){
        dispatch(verify_code({data: code}))
    }
    return (
    
        <View className="bg-[#F97316] w-full h-full justify-center items-center p-8">
            <MaterialCommunityIcons name={"shield"} size={60} color="#ffffff"/>
            <Text className="text-3xl my-4 font-medium text-white">Verify your email</Text>
            <Text className="text-white text-lg text-center my-6">Please enter the code you received by email</Text>
            <TextInput className="w-full bg-white text-black p-2 text-center my-4" value={code} onChangeText={setCode} placeholder="Insert code"/>
            <TouchableHighlight onPress={handleSubmit} className="bg-white py-2 px-4 rounded-full ">
                <Text className="text-[#F97316] font-medium text-lg">Submit</Text>
            </TouchableHighlight>
        </View>
    )

}