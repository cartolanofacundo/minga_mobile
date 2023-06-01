import { useEffect, useState } from 'react';
import { View, Text, Button, Image, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../store/read/readActions';

const {get_pages} = actions


export function ReadScreen({route, navigation }) {
    const dispatch = useDispatch()
    const {pages, chapter_id} = useSelector(store => store.read)
    const [actualPage, setActualPage] = useState(0);
    useEffect(() => {
        if(route.params.chapter_id !== chapter_id){
            dispatch(get_pages({chapter_id: route.params.chapter_id}))
        }
    },[])
    function handleNextPage(){
        if(actualPage + 1 < pages.length){
            setActualPage(actualPage + 1)
        }
    }
    function handlePrevPage(){
        if(actualPage - 1 >= 0){
            setActualPage(actualPage - 1)
        }
    }
    return (
        <View className="w-full h-full flex flex-col justify-center items-center relative">
            <Pressable onPress={handlePrevPage} className="absolute w-1/2 top-0 bottom-0 left-0 z-40"/>
            <Pressable onPress={handleNextPage} className="absolute w-1/2 top-0 bottom-0 right-0 z-40"/>
            <Image className="w-full h-full" resizeMode='contain' source={{ uri: pages[actualPage] }} />
        </View>
    )

}