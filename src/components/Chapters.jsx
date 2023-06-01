import { Text, View, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import { ChapterCard } from "./ChapterCard";
import { NothingToShow } from "./NothingToShow"

export function Chapters({navigation}) {
    const { chapters, loadingChapters } = useSelector(store => store.chapters)
    return (
        <>
            <View className="w-full h-full flex flex-col justify-start items-center relative">
                {(!loadingChapters  && chapters.length === 0 ) ?<NothingToShow /> : chapters?.map((item) => <ChapterCard key={item._id} chapter={item} navigation={navigation} />) }

            </View>

        </>
    )
}