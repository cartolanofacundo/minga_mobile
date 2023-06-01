import { View, Text} from 'react-native';
import { useSelector } from 'react-redux';
export function Stats() {
    const { ranking, totalChapters } = useSelector(store => store.chapters)
    return (
        <View className="bg-white w-full h-[100px] border-slate-200 border-[1px] rounded-xl flex flex-row justify-between items-center">
            <View className="flex flex-col justify-center items-center grow">
                <Text className="text-black font-medium text-lg">{Math.ceil(ranking)}/5</Text>
                <Text className="text-slate-400">Rating</Text>
            </View>
            <View className="h-1/3 w-[1px] bg-slate-300"></View>
            <View className="flex flex-col justify-center items-center grow">
                <Text className="text-black font-medium text-lg">{totalChapters}</Text>
                <Text className="text-slate-400">Chapters</Text>
            </View>
            <View className="h-1/3 w-[1px] bg-slate-300"></View>
            <View className="flex flex-col justify-center items-center grow">
                <Text className="text-black font-medium text-lg">Eng</Text>
                <Text className="text-slate-400">Language</Text>
            </View>


        </View>
    )
}