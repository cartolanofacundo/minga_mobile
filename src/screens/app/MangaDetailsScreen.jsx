import { View, Text, Button } from 'react-native';



export function MangaDetailsScreen({route, navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{route.params.manga_id}</Text>
            <Button
            title='Read'
            onPress={() => navigation.navigate("Read")}
            />
        </View>
    )

}