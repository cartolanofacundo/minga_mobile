import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import actions from '../../store/user/authActions';

const {sign_in} = actions

export function SignIn({ navigation }) {
    let dispatch = useDispatch()
    function handleSignIn(){
        let data =""
        dispatch(sign_in({data}))
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Sign In</Text>
            <Button
            title='do signin'
            onPress={handleSignIn}
            />
            <Button
                title='Register'
                onPress={() => navigation.navigate("Register")}
            />
        </View>
    )

}