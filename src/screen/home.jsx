import { Button, Text, View } from "react-native";

export default function Home({ navigation }) {

    const handlePress = () => {
        navigation.navigate("Detail", {
            name: "William"
        })
    }

    return (
        <View>
            <Text>Hello Home</Text>
            <Button title="Go to detail"
                onPress={handlePress}></Button>
        </View>
    )
}