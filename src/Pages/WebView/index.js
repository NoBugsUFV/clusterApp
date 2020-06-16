import React from 'react';
import { View } from 'react-native';
import {WebView} from 'react-native-webview';


export default function Web({params}){
    //const link = 
    console.log(params.getParam('link'));

    return(
        <WebView style={{flex: 1}} source={{uri: link}}></WebView>
    );
}