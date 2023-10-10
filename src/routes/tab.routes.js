import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'
import Inicial from '../pages/InicialPages/Inicial/Inicial';
import AdicionarCultura from '../pages/AgricultorPages/AdicionarCulturaPage/AdicionarCultura';
import Salvos from '../pages/SalvosPages/Salvos/Salvos';
import Cultura from '../pages/AgricultorPages/CulturaPage/Cultura';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen 
            name='inicialtab'
            component={Inicial}
            options={{
                tabBarIcon: ({ size }) => <Feather name='home' size={size} />,
                tabBarLabel: 'Inicio'
            }}
            />
             <Tab.Screen 
            name='adicionarcultura'
            component={Cultura} //antes era AdicionarCultura
            options={{
                tabBarIcon: ({ size }) => <Feather name='plus' size={size} />,
                tabBarLabel: 'Nova Cultura'
            }}
            />
             <Tab.Screen 
            name='salvos'
            component={Salvos}
            options={{
                tabBarIcon: ({ size }) => <Feather name='package' size={size} />,
                tabBarLabel: 'Salvos'
            }}
            />
        </Tab.Navigator>
    )
}