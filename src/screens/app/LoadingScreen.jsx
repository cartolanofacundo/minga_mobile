import { View, ActivityIndicator, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function LoadingScreen(){
    return(
        <View className="w-full h-full flex flex-col justify-center items-center">      
            <ActivityIndicator color="#F97316" size={'large'} />
        </View>
    )
}