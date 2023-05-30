import { View, Text, Button } from 'react-native';

export function HomeScreen({navigation}){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>HomeScreen</Text>
            <Button 
            title='Sign in'
            onPress={() =>navigation.push("Login")}
            />
        </View>
    )
}