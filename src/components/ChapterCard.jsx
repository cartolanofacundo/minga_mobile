import { View, Text, Image, TouchableOpacity } from 'react-native';
export function ChapterCard({chapter, navigation}){
    return(
        <View className="w-full flex flex-row justify-between my-2 rounded-lg">
            <Image className="w-24 h-24 object-cover rounded-lg" source={{ uri: chapter?.cover_photo }} />
            <View className="flex flex-col justify-between items-center text-center p-2 self-stretch">
                <Text className="text-lg max-w-[90px]">{chapter?.title}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Read",{chapter_id: chapter._id})} className="bg-[#F97316] self-center py-4 px-8 rounded-full ">
                <Text className="text-white font-bold text-lg">Read</Text>
            </TouchableOpacity>
        </View>
    )
}