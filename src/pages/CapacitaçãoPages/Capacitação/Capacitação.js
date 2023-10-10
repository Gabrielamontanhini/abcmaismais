import { Button, Text, View } from "react-native";

export default function Capacitação({ navigation }) {
    return (
        <View>
            <Text>
                Capacitação
            </Text>
            <Button title="Área do Agricultor" onPress={() => navigation.navigate('Agricu')} />


            <Button title="Informatilhos" onPress={() => navigation.navigate('Noticias')} />


            <Button title="Capacitação" onPress={() => navigation.navigate('Capacitação')} />
        </View>
    )
}