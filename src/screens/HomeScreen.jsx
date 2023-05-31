import { View, Text, Button,Pressable } from 'react-native';

export function HomeScreen({navigation}){
    return(
        <View className="flex flex-col h-full w-full justify-center items-center bg-blue-500">
            <Text>HomeScreen</Text>
            <Pressable 
            className="bg-violet-500 px-4 py-2 rounded-lg mt-4 text-white"
            onPress={() =>navigation.push("Login")}
            > 
            <Text className="text-white font-medium">Sing In</Text>
            </Pressable>
        </View>
    )
}