import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeScreen } from "../screens/HomeScreen";
import { MangaStack } from "./MangaStack";
import { UserScreen } from "../screens/app/UserScreen";
const Tab = createBottomTabNavigator();

export function AppTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Explore" component={MangaStack} />
            <Tab.Screen name="Profile" component={UserScreen} />
        </Tab.Navigator>
    )
}