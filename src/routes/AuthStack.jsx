// In App.js in a new project

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../screens/auth/SignInScreen';
import { SignUp } from '../screens/auth/SignUpScreen';
import { Verify } from '../screens/auth/VerifyScreen';
import { HomeScreen } from '../screens/HomeScreen';
const Stack = createNativeStackNavigator();

export function AuthStack() {
    return (

        <Stack.Navigator initialRouteName="Home" options={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name='Verify' component={Verify} options={{ headerShown: false }} />
        </Stack.Navigator>

    );
}

