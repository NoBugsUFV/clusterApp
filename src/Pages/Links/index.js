import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

import logo from '../../Assets/logo.png';

export default function Links({params}){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View>
                <Image source={logo} style={styles.logo}/>
                <Text style={styles.descricao}>
                    Somos uma empresa jovem focada na qualidade das nossas soluções!
                    #ThinkYounger.
                </Text>
            </View>
            <TouchableOpacity style={styles.linkNB} onPress={()=>{navigation.navigate('Web', {link: 'https://nobugs.com.br'})}} ><Text style={styles.linkText}>Nosso Site</Text></TouchableOpacity>
            <TouchableOpacity style={styles.linkNB} onPress={()=>{navigation.navigate('Web', {link: 'https://nobugs.com.br'})}} ><Text style={styles.linkText}>Blog</Text></TouchableOpacity>
            <TouchableOpacity style={styles.linkNB} onPress={()=>{navigation.navigate('Web', {link: 'https://nobugs.com.br'})}} ><Text style={styles.linkText}>Instagram</Text></TouchableOpacity>
            <TouchableOpacity style={styles.linkNB} onPress={()=>{navigation.navigate('Web', {link: 'https://nobugs.com.br'})}} ><Text style={styles.linkText}>Facebook</Text></TouchableOpacity>
            <TouchableOpacity style={styles.linkNB} onPress={()=>{navigation.navigate('Web', {link: 'https://nobugs.com.br'})}} ><Text style={styles.linkText}>LinkedIn</Text></TouchableOpacity>
            <TouchableOpacity style={styles.linkNB} onPress={()=>{navigation.navigate('Web', {link: "https://nobugs.com.br"})}} ><Text style={styles.linkText}>Manual do Calouro</Text></TouchableOpacity>
        </View>
    );
}