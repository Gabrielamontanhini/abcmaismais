import { Button, FlatList, Text } from "react-native"
import { TinyHeader } from "../../../components/HeadersComponents/TinyHeader"
import { OptionsView } from "../../../styles/styledOptions"
import { StyledSafeArea } from "../../../styles/styledSafeArea"
import { Card } from "../../../components/CardComponent/Card"


export default function Agricultor({ navigation }) {
    const options = [
        { id: 1, "label": "Minhas culturas" }, { id: 2, "label": "Capacitações" },
        { id: 3, "label": "Fórum" }
        ]
    return (
        <StyledSafeArea>
            <TinyHeader />
            <OptionsView>
                <Text>Olá Agricultore</Text>
            </OptionsView>
            <OptionsView>
                <FlatList
                    data={options}
                    keyExtractor={(item) => String(item.id)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <Card data={item} />} />
            </OptionsView>




        </StyledSafeArea>
    )
}