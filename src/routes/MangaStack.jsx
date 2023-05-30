import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MangasScreen } from '../screens/app/MangasScreen';
import { MangaDetailsScreen } from '../screens/app/MangaDetailsScreen';
import { ReadScreen } from '../screens/app/ReadScreen';


const Stack = createNativeStackNavigator();

export function MangaStack() {
    return (

        <Stack.Navigator options={{ headerShown: false }}>
            <Stack.Screen name="Explore" component={MangasScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Details" component={MangaDetailsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Read" component={ReadScreen} options={{ headerShown: false }} />
        </Stack.Navigator>

    );
}
