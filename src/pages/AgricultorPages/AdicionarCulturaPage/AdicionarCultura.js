import { Text } from "react-native";
import { StyledSafeArea } from "../../../styles/styledSafeArea";
import { TinyHeader } from "../../../components/HeadersComponents/TinyHeader";

export default function AdicionarCultura(){
    return (
        <StyledSafeArea>
            <TinyHeader />
            <Text>Adicionar</Text>
        </StyledSafeArea>
    )
}