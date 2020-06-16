import React from 'react';
import { WebView } from 'react-native-webview';


export default function Navegador(params){
    
    const link = params.route.params.linkNB;
    

    return(
        <WebView style={{flex: 1}} source={{uri: `${link}`}} />
    );
}