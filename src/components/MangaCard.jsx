import { View, Text, Image, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useSelector } from 'react-redux';


export function MangaCard({ manga, navigation }) {
    return (
        <TouchableOpacity onPress={()=> navigation.navigate("Details", {manga_id: manga._id})} className="w-full h-[200px] rounded-3xl my-2 border-[0.5px] border-slate-200 overflow-hidden flex flex-row justify-between items-center">
            <View
                className="h-2/3 w-[5px]"
                style={{backgroundColor: manga?.category_id?.color}}
            />
            <View className="h-2/3 justify-center items-start ml-4 grow">
                <Text className="mb-2 text-lg max-w-[140px] text-[#222222] font-medium">{manga?.title}</Text>
                <Text style={{color: manga?.category_id?.color }}>{manga.category_id.name}</Text>
            </View>
            <Image className="mr-[-130px] h-[300px] w-[280px] object-top object-cover rounded-full" source={{ uri: manga?.cover_photo }} />
        </TouchableOpacity>
    )
}