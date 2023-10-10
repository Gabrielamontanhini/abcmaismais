import styled from "styled-components"
import { colors } from "../../constants/Colors/colors"
import { Text } from "react-native"

export default function Pratica({data}){
    return (
        <StyledPratica>
<Text>{data.content}</Text>
        </StyledPratica>
    )
}

const StyledPratica = styled.View`
width: 90%;
background-color: ${colors.secondColor};
display: flex;
align-self: center;
flex-direction: column;
align-items: center;

margin-top: 5%;
`