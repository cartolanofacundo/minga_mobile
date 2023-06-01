import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeScreen } from "../screens/HomeScreen";
import { MangaStack } from "./MangaStack";
import { UserScreen } from "../screens/app/UserScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

export function AppTabs() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerTitle: "Minga 雪",
            tabBarActiveTintColor: "#F97316",
            tabBarIcon: ({ color, size }) => {
                const icons = {
                    Home: 'home',
                    Explore: 'book-open-variant',
                    Profile: 'account'
                };

                return (
                    <MaterialCommunityIcons
                        name={icons[route.name]}
                        color={color}
                        size={size}
                    />
                );
            },
        })}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                headerStyle: {
                    backgroundColor: '#F97316',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 24
                },
                headerTitleAlign: "center"
            }} />
            <Tab.Screen name="Explore" component={MangaStack} options={{
                headerStyle: {
                    backgroundColor: '#F97316',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 24
                },
                headerTitleAlign: "center"
            }} />
            <Tab.Screen name="Profile" component={UserScreen} options={{
                headerStyle: {
                    backgroundColor: '#F97316',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 24
                },
                headerTitleAlign: "center"
            }} />
        </Tab.Navigator>
    )
}