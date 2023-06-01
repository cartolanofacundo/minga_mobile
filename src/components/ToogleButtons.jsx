import { View, Text,  Pressable} from 'react-native';
export function ToogleButtons({showChapters, setShowChapters}) {
    return (
        <View className="w-full h-[40px] my-4 border-slate-200 border-[1px] rounded-full overflow-hidden flex flex-row justify-center items-center">
            <Pressable onPress={() => setShowChapters(false)} className="w-1/2 h-full flex flex-col justify-center items-center rounded-full" style={{ backgroundColor: !showChapters ? "#F97316" : "transparent" }}>
                <Text className="font-medium" style={{ color: !showChapters ? "#ffffff" : "#94a3b8" }}>Description</Text>
            </Pressable>
            <Pressable onPress={() => setShowChapters(true)} className="w-1/2 h-full flex flex-col rounded-full justify-center items-center" style={{ backgroundColor: showChapters ? "#F97316" : "transparent" }}>
                <Text className="font-medium" style={{ color: showChapters ? "#ffffff" : "#94a3b8" }}>Chapters</Text>
            </Pressable>
        </View>
    )
}