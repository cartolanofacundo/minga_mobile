import { View, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function NothingToShow(){
    return(
            <View className="h-[45vh] w-full flex flex-col justify-center items-center">
                <MaterialCommunityIcons  name={"book-search-outline"} color={"#94a3b8"} size={25} />
                <Text className="font-bold text-slate-400 my-4">Nothing to show</Text>
            </View>
    )
}