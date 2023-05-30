import { View, Text, Button } from 'react-native';



export function MangaDetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>MangaDetails</Text>
            <Button
            title='Read'
            onPress={() => navigation.navigate("Read")}
            />
        </View>
    )

}