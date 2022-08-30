import { View, Text } from "react-native";

export default function Detail({ route }) {

    const { name } = route.params

    return (
        <View>
            <Text>Hello Detail {name}</Text>
        </View>
    )
}