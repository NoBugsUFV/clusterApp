import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';

import Home from './Pages/Home';
import WebView from './Pages/WebView';
import { Header } from 'react-native/Libraries/NewAppScreen';


const Stack = createStackNavigator();

const optionsHome = {title: 'Calculadora de Clusters',
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
                <Stack.Screen name="WebView" component={WebView} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}