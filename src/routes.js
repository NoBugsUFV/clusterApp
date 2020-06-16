import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';

import Home from './Pages/Home';
import Navegador from './Pages/Navegador';
import Links from './Pages/Links';

import { WebView } from 'react-native-webview';


const Stack = createStackNavigator();

const optionsHome = {title: 'Calculadora de Clusters',
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerStyle:{
        backgroundColor: '#0075c9'
    }
}

const optionsLinks = {title: 'No Bugs',
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerStyle:{
        backgroundColor: '#0075c9'
    }
}

const optionsNav = {title: 'No Bugs',
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerStyle:{
        backgroundColor: '#0075c9'
    }
}


export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Home" component={Home} options={optionsHome} />
                <Stack.Screen name="Links" component={Links} options={optionsLinks} />
                <Stack.Screen name="Navegador" component={Navegador} options={optionsNav} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}