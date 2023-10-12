import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicial from '../pages/InicialPages/Inicial/Inicial';
import Agricultor from '../pages/AgricultorPages/AgricultorInicialPage/Agricultor';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name='inicial'
            component={Inicial}/>
            <Stack.Screen 
            name='areadoagricultorstack'
            component={Agricultor}/>
        </Stack.Navigator>
    )
}