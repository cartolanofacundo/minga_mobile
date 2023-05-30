import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import actions from '../../store/user/authActions';

const {sign_out} = actions

export function UserScreen({ navigation }) {
    let dispatch = useDispatch()
    function handleLogOut(){
        dispatch(sign_out())
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>UserScreen</Text>
            <Button
            title='Log out'
            onPress={handleLogOut}
            />
        </View>
    )

}