import { Text } from "react-native";
import { TinyHeader } from "../../../components/HeadersComponents/TinyHeader";
import Pratica from "../../../components/PraticaComponent/Pratica";
import { OptionsView } from "../../../styles/styledOptions";
import { StyledSafeArea } from "../../../styles/styledSafeArea";

export default function PraticaPage(){
    const estaPratica = [{id: 1,"content": `
    Rotação de Culturas.

    1. Escolha culturas que complementem as necessidades de nutrientes umas das outras. Evite plantar culturas com os mesmos requisitos de nutrientes em anos consecutivos.
      
      2. Planeje um cronograma de plantio que alterne as culturas a cada temporada. Por exemplo, se você plantou soja em um ano, considere alternar para milho ou feijão no ano seguinte.
      
      3. Considere a diversificação de culturas. Inclua leguminosas, como feijão, ervilhas ou lentilhas, que podem fixar o nitrogênio no solo, enriquecendo-o naturalmente.
      
      4. Monitore o estado do solo regularmente. Realize análises de solo para avaliar a saúde e os níveis de nutrientes. Isso ajudará a determinar quais culturas são mais adequadas em cada temporada.
      
      5. Mantenha registros detalhados das culturas plantadas e dos resultados obtidos. Isso ajudará na tomada de decisões futuras e na otimização da rotação de culturas.
      
      6. Esteja ciente das condições climáticas e das pragas. Adapte sua rotação de culturas de acordo com as condições específicas de cada ano.
      
      7. Considere a rotação com culturas de cobertura, como trevo ou aveia, para melhorar a estrutura do solo e suprimir ervas daninhas.
      
      8. Evite monoculturas prolongadas, pois isso pode aumentar o risco de pragas e doenças específicas da cultura.
      
      9. Consulte um agrônomo ou especialista em cultivo local para orientações específicas para a sua região e tipo de solo.
      
      10. Participe de programas de capacitação e treinamentos sobre rotação de culturas e práticas sustentáveis para aprimorar seus conhecimentos e habilidades.
      `,
        },
      ];
      
      
    return (
        <StyledSafeArea>
            <TinyHeader />
            <OptionsView>
                <Pratica data={estaPratica[0]}/>
            
            </OptionsView>
        </StyledSafeArea>
    )
}