import { View, Text, ScrollView, ImageBackground, TextInput, ActivityIndicator } from 'react-native';
import bg from "../../../assets/mangas_background.png"
import { useEffect, useState } from 'react';
import { MangaCard } from '../../components/MangaCard';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../store/mangas/mangasActions';
import { NothingToShow } from '../../components/NothingToShow';

const { get_mangas } = actions

export function MangasScreen({ navigation }) {
    const [searchFilter, setSearchFilter] = useState("")
    const [canMomentum,setCanMomentum] = useState(false)
    const [showMangas, setShowMangas] = useState([])
    let { mangas, page, pages, loading } = useSelector(store => store.mangas)
    const dispatch = useDispatch()

    useEffect(() => {
        if (mangas?.length === 0) {
            dispatch(get_mangas({ page: 1 }))
        }

    }, [])
    useEffect(()=> {
        if(mangas.length > 0){
            setShowMangas(mangas)
        }
    },[mangas])
    useEffect(() => {
        setShowMangas(mangas.filter((item) => item.title.toLowerCase().includes(searchFilter.toLowerCase())))
    },[searchFilter])

    function handleScrollEnd(){
        if(((page + 1) <= pages) && canMomentum && searchFilter === "" && !loading ){
            dispatch(get_mangas({page: page + 1}))
            setCanMomentum(false)
        }
    }
    return (
        <View className="w-full h-full">
            <ScrollView className="w-screen h-screen " onMomentumScrollEnd={handleScrollEnd} onScroll={( event ) => {
           setCanMomentum(true)
     }}>
                <View className="w-full h-[55vh] relative flex flex-col justify-center items-center">
                    <ImageBackground source={bg} resizeMode="cover" className="absolute top-0 bottom-0 left-0 right-0" />
                    <Text className="w-3/4 text-3xl  text-white text-center font-medium mb-8">Explore Mangas</Text>
                    <TextInput
                        className="bg-slate-300 w-3/4 py-2 px-4 rounded-lg"
                        placeholder='search'
                        value={searchFilter}
                        onChangeText={setSearchFilter}
                    />
                </View>
                <View className="bg-white rounded-t-3xl -mt-24 flex flex-col justify-start items-center p-4 min-h-[45vh]">
                    
                    {showMangas.length === 0 ? <NothingToShow/> : showMangas.map((item) => <MangaCard key={item._id} navigation={navigation} manga={item} />)}
                    {loading && <ActivityIndicator className="my-4 absolute bottom-0" color={"#000000"}/>}   
                </View>

            </ScrollView>
        </View>

    )

}