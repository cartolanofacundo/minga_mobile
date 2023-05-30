import { View, Text, Button } from 'react-native';



export function MangasScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>MangasScreen</Text>
            <Button
            title='Details'
            onPress={() => navigation.push("Details")}
            />
        </View>
    )

}