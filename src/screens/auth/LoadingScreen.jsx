import { ActivityIndicator, View, Text } from "react-native"

ActivityIndicator
export function LoadingScreen(){
    return(
        <View className="w-full h-full bg-[#F97316] flex flex-col justify-center items-center">
            <Text className="text-3xl text-white my-8">Minga 雪</Text>
            <ActivityIndicator color="#ffffff" size={"large"} /> 
        </View>
    )
}