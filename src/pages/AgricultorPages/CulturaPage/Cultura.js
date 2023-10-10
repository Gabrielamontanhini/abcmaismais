import { FlatList, Text } from "react-native";
import { TinyHeader } from "../../../components/HeadersComponents/TinyHeader";
import { OptionsView } from "../../../styles/styledOptions";
import { StyledSafeArea } from "../../../styles/styledSafeArea";
import Pratica from "../../../components/PraticaComponent/Pratica";

export default function Cultura() {
    const culturaEscolhida = [
        {
            id: 1,
            "content": "Soja",
        },
        {
            id: 2,
            "content": "Rotação de Culturas",
        },
        {
            id: 3,
            "content": "Benefícios da Rotação de Culturas:\n\n1. Melhora a fertilidade do solo.\n2. Reduz o risco de pragas e doenças.\n3. Aumenta a produtividade das culturas subsequentes.",
        },
        {
            id: 4,
            "content": "Como fazer a Rotação de Culturas:\n\n- Escolha culturas que complementem as necessidades de nutrientes umas das outras.\n- Planeje o cronograma de plantio para alternar as culturas a cada temporada.\n- Monitore o estado do solo regularmente para ajustar a rotação conforme necessário.",
        },
        {
            id: 5,
            "content": "Veja aqui a área de capacitação sobre : Rotação de culturas",
        },
    ];


    return (
        <StyledSafeArea>
            <TinyHeader />
            <Text>Minhas Cultura</Text>
            <OptionsView>
               
                <FlatList
                    data={culturaEscolhida}
                    keyExtractor={(item) => String(item.id)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <Pratica data={item} />
                    )}
                />
            </OptionsView>
        </StyledSafeArea>
    )
}