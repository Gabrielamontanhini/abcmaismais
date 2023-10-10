import { Text } from "react-native";
import { Card } from "../../../components/CardComponent/Card";
import { StyledSafeArea } from "../../../styles/styledSafeArea";

export default function MinhasCulturas(){
    return (
        <StyledSafeArea>
            <Text>Minhas culturas</Text>

            <Card data={{ label: 'Cacau' }} />
            <Card data={{ label: 'Algodão' }} />
            <Card data={{ label: 'Feijão' }} /> 
        </StyledSafeArea>
    )
}