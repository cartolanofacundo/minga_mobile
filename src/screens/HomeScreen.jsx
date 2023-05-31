import { View, Text,  TouchableOpacity, ImageBackground,} from 'react-native';
import { useSelector } from 'react-redux';
import image from "../../assets/home_background.png"
export function HomeScreen({ navigation }) {
    const { token } = useSelector(store => store.user)
    return (
        <View className="flex flex-col h-full w-full justify-center items-center">
            <ImageBackground source={image} resizeMode="cover" className="w-full h-full absolute z-0"/>
            <Text className="text-white font-bold text-4xl w-3/4 text-center">For the love of manga</Text>
            <Text className="text-white my-4 text-lg font-medium">Explore our varieties</Text>
            <TouchableOpacity className="w-3/4 bg-white rounded-lg flex flex-row justify-center items-center py-2 my-4" onPress={() => token ? navigation.navigate("Explore") : navigation.navigate("Login")}>
                <Text className="text-[#F97316] font-medium text-lg">{token ? "Explore Mangas": "Let's go!"}</Text>
            </TouchableOpacity> 
        </View >
    )
}