import { useSelector } from "react-redux";
import { View, Text, ScrollView, Pressable, Image } from 'react-native';
export function Description(){

   const {manga} = useSelector(store => store.chapters)
   return(
    <View>
        <Text className="p-2 text-[#424242]">{manga?.description}</Text>
    </View>
   )
}