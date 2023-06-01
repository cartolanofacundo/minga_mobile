import { useEffect, useState } from 'react';
import { View, Text, ScrollView, Pressable, Image, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../store/chapters/chaptersActions';
import { LoadingScreen } from './LoadingScreen';
import { HeroManga } from '../../components/HeroManga';
import { ToogleButtons } from '../../components/ToogleButtons';
import { Description } from '../../components/Description';
import { Chapters } from '../../components/Chapters';




const { get_manga, get_all_from_manga } = actions


export function MangaDetailsScreen({ route, navigation }) {
    const dispatch = useDispatch()
    const { manga_id, manga, loadingManga, page, pages, loadingChapters, chapters_manga_id } = useSelector(store => store.chapters)
    const [showChapters, setShowChapters] = useState(false);
    useEffect(() => {
        if (route.params.manga_id != manga_id) {
            dispatch(get_manga({ manga_id: route.params.manga_id }))
        }
    }, [])
    useEffect(() => {
        if (showChapters && chapters_manga_id !== route.params.manga_id) {
            dispatch(get_all_from_manga({ manga_id: route.params.manga_id, page: 1 }))
        }
    }, [showChapters])
    function handleScrollEnd() {
        if ((page + 1 <= pages) && !loadingChapters && showChapters) {
            dispatch(get_all_from_manga({ manga_id: manga_id, page: page + 1 }))
        }
    }
    function isCloseToBottom({ layoutMeasurement, contentOffset, contentSize }) {
        return layoutMeasurement.height + contentOffset.y >= contentSize.height - 5;
    }


    return (
        <>
            {loadingManga
                ? <LoadingScreen />
                : <View className="w-full h-full flex flex-col justify-start items-center relative">
                    <ScrollView className="w-full h-full"
                        onScroll={({ nativeEvent }) => {
                            if (isCloseToBottom(nativeEvent)) {
                                handleScrollEnd()
                            }
                        }}
                        scrollEventThrottle={400}
                    >
                        <Image className="w-full h-[40vh]" resizeMode='cover' source={{ uri: manga?.cover_photo }} />
                        <View className="w-full h-full p-4">
                            <HeroManga />
                            <ToogleButtons setShowChapters={setShowChapters} showChapters={showChapters} />
                            {!showChapters ? <Description /> : <Chapters navigation={navigation}/>}
                            
                        </View>

                    </ScrollView>
                    {loadingChapters && <ActivityIndicator className="my-4 absolute bottom-0" color={"#000000"} />}
                </View>


            }

        </>

    )

}