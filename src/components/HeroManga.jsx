import { useSelector } from "react-redux"
import { Stats } from "./Stats"
import { View, Text, Image } from 'react-native';
export function HeroManga() {
    const { manga } = useSelector(store => store.chapters)
    return (
        <>

            <Text className="text-[#1f1f1f] font-medium text-3xl pl-1">{manga?.title}</Text>
            <View className="w-full my-4 flex flex-row justify-between items-center">
                <Text className=" py-2 w-1/4 h-[50px] align-middle text-center text-lg font-medium rounded-full" style={{ backgroundColor: manga?.category_id?.hover, color: manga?.category_id?.color }}>{manga?.category_id?.name}</Text>
                <Text className="text-xl  text-slate-400 text-center font-medium pr-2">{manga?.company_id ? manga?.company_id?.name : manga?.author_id?.name}</Text>
            </View>
            <Stats />
        </>

    )
}