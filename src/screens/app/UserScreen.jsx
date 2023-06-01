import { View, Text, Button, Image,TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../store/user/authActions';

const { sign_out } = actions

export function UserScreen({ navigation }) {
    let { user } = useSelector(store => store.user)
    let dispatch = useDispatch()
    function handleLogOut() {
        dispatch(sign_out())
    }
    return (
        <View className="flex flex-col justify-start items-center w-full h-full pt-14 px-4">
            {user && <Image className="w-24 h-24 rounded-full" resizeMode='cover' source={{ uri: user?.photo }} />}

            <Text className="w-full border-b-[1px] border-b-slate-300 px-2 py-1 my-4">{user?.name}</Text>
            <Text className="w-full border-b-[1px] border-b-slate-300 px-2 py-1 my-4">{user?.last_name}</Text>
            <Text className="w-full border-b-[1px] border-b-slate-300 px-2 py-1 my-4">{user?.email}</Text>
            <View className="grow flex flex-col justify-center items-center">
                <TouchableOpacity onPress={handleLogOut} className="w-full bg-red-400 px-12 py-4 rounded-full">
                    <Text className="text-white font-medium text-xl">Sign out</Text>
                </TouchableOpacity>
            </View>

        </View>
    )

}