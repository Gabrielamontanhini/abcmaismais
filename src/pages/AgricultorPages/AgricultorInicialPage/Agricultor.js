import { Button, FlatList, Text, TouchableOpacity } from "react-native"
import { TinyHeader } from "../../../components/HeadersComponents/TinyHeader"
import { OptionsView } from "../../../styles/styledOptions"
import { StyledSafeArea } from "../../../styles/styledSafeArea"
import Bottom from "../../../components/BottomComponent/bottom"


export default function Agricultor({ navigation }) {
  
    return (
        <StyledSafeArea>
            <TinyHeader />
            <Text>Olá Agricultore</Text>
            <OptionsView>
               <TouchableOpacity onPress={()=>{navigation.navigate("minhas culturas")}}>
                    <Text>Minhas culturas</Text>
               </TouchableOpacity>
            </OptionsView>



        <Bottom navigation={navigation}/>
        </StyledSafeArea>
    )
}