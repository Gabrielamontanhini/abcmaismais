import { Button } from "react-native";
import { BigHeader } from "../../../components/HeadersComponents/BigHeader";
import { StyledSafeArea } from "../../../styles/styledSafeArea";
import { Card } from "../../../components/CardComponent/Card";
import { OptionsView } from "../../../styles/styledOptions";


export default function Inicial() {


    return (
        <StyledSafeArea>
            <BigHeader />
            <OptionsView>
                <Card data={{ label: 'Área do Agricultor' }} />
                <Card data={{ label: 'Notícias' }} />
                <Card data={{ label: 'Capacitação' }} />
            </OptionsView>
           
        </StyledSafeArea>
    )
}