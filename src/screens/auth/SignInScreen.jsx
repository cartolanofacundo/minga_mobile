import { View, Text, Button } from 'react-native';



export function SignIn({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Sign In</Text>
            <Button
                title='Register'
                onPress={() => navigation.navigate("Register")}
            />
        </View>
    )

}