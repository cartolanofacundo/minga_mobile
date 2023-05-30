import { View, Text, Button } from 'react-native';



export function SignUp({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Sign Up</Text>
            <Button
            title='Verify'
            onPress={() => navigation.push("Verify")}
            />
        </View>
    )

}