import { View, Text, Button } from 'react-native';



export function Verify({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Verify</Text>
            <Button
            title='SignIn'
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    )

}