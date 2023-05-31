import { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export function InputRounded({ data, handleData, error, name, icon }) {
    const [focus, setFocus] = useState(false)
    return (
        <>
            <View className={`w-full rounded-full border-2 border-slate-300 px-6 py-2 relative bg-white flex flex-row justify-between items-center my-4 ${focus && "border-[#F97316]"} ${error && "border-red-500"}` }>
                <Text className={`mb-2 absolute top-[-12px] left-6 bg-white ${focus && "text-[#F97316]"} ${error && "text-red-500"}`}>{name.charAt(0).toUpperCase() + name.slice(1)}</Text>
                <TextInput
                    className="w-3/4"
                    onChangeText={handleData}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    value={data}
                    secureTextEntry={name === "password"}
                />
                <MaterialCommunityIcons name={icon} color={focus ? "#F97316" : error ? "#f56565" : "#000000"} size={25} />
            </View>
           {error && <Text className="text-red-500">{error}</Text>} 
        </>


    )
}