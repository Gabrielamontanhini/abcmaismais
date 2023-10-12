import { BigHeader } from "../../../components/HeadersComponents/BigHeader";
import { StyledSafeArea } from "../../../styles/styledSafeArea";
import { Card } from "../../../components/CardComponent/Card";
import { OptionsView } from "../../../styles/styledOptions";
import Bottom from "../../../components/BottomComponent/bottom";


export default function Inicial({navigation}) {
 

    return (
        <StyledSafeArea>
            <BigHeader />
            <OptionsView>
                <Card data={{ label: 'Área do Agricultor' }} />
                <Card data={{ label: 'Notícias' }} />
                <Card data={{ label: 'Capacitação' }} />
            </OptionsView>
         <Bottom navigation={navigation}/>
        </StyledSafeArea>
    )
}