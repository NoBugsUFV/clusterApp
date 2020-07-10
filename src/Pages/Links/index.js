import React from 'react';
import { View, Text, TextInput, Image, Linking } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

import logo from '../../Assets/logo.png';

export default function Links(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View>
                <Image source={logo} style={styles.logo}/>
                <Text style={styles.descricao}>
                    Somos uma empresa jovem focada na qualidade das nossas soluções!
                </Text>
            </View>
            <TouchableOpacity style={styles.linkNB} onPress={()=>{Linking.openURL('https://nobugs.com.br')}} ><Text style={styles.linkText}>Nosso Site</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkNB} onPress={()=>{Linking.openURL('https://blog.nobugs.com.br')}} ><Text style={styles.linkText}>Blog</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkNB} onPress={()=>{Linking.openURL('https://instagram.com/nobugsufv')}} ><Text style={styles.linkText}>Instagram</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkNB} onPress={()=>{Linking.openURL('https://facebook.com/nobugsufv')}} ><Text style={styles.linkText}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkNB} onPress={()=>{Linking.openURL('https://linkedin.com/company/nobugsufv/')}} ><Text style={styles.linkText}>LinkedIn</Text>
            </TouchableOpacity>
        </View>
    );
}