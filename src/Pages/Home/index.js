import React, {useState} from 'react';
import { View, Text, TextInput, Image, Button } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home(){
    const navigation = useNavigation();
    var [cluster, setCluster] = useState(0);
    var [points, setPoints] = useState(0);
    const [totalMembros, setTotalMembros] = useState(0);
    const [faturamento, setFaturamento] = useState(0);
    const [membrosExecutando, setMembrosExecutando] = useState(0);
    const [nps, setNps] = useState(0);

    function calculaCluster(){
        points = (membrosExecutando/100) * (faturamento/totalMembros) * nps;
        setPoints(points.toFixed(2));
        if(points <= 26320.55){
            setCluster(1);
        }else if(points > 26320.55 && points <= 73950.00){
            setCluster(2);
        }else if(points > 73950.00 && points <= 166666.71){
            setCluster(3);
        }else if(points > 166666.71 && points <= 389536.50){
            setCluster(4);
        }else if(points > 389536.51){
            setCluster(5);
        }
    }

    function reset(){
        setCluster(0);
        setPoints(0);
        setMembrosExecutando(0);
        setFaturamento(0);
        setTotalMembros(0);
        setNps(0);
        
    }

    return(
        <View style={styles.container}>
            <View style={styles.resultBox}>
                <Text style={styles.resultTitle}>Resultado</Text>
                <View style={styles.resultRow}>
                    <Text style={styles.clusterText}>Cluster</Text>
    <Text style={styles.numCluster}> {cluster}</Text>
                </View>
                <View style={styles.resultRow}>
                    <Text style={styles.points}>{points} </Text>
                    <Text style={styles.pointsText}>Pontos</Text>
                </View>
            </View>
            <View style={styles.form}>
                <View style={styles.formField}>
                    <Text style={styles.label}>Total de membros</Text>
                    <TextInput style={styles.totalMembros} 
                        placeholder="Ex: 32"
                        placeholderTextColor="#999"
                        autoCapitalize="characters"
                        keyboardType="number-pad"
                        autoCorrect={false}
                        onChangeText={text => setTotalMembros(text)}
                        >
                    </TextInput>
                </View>
                <View style={styles.formField}>
                    <Text style={styles.label}>Faturamento</Text>
                    <TextInput style={styles.faturamento}
                        placeholder="Ex: R$ 25.000"
                        placeholderTextColor="#999"
                        autoCapitalize='characters'
                        keyboardType="number-pad"
                        autoCorrect={false}
                        onChangeText={text => setFaturamento(text)}
                    ></TextInput>
                </View>
                <View style={styles.formField}>
                    <Text style={styles.label}>Membros Executando</Text>
                    <TextInput style={styles.membrosExecutando}
                        placeholder="Ex: 80%"
                        placeholderTextColor="#999"
                        autoCapitalize='characters'
                        keyboardType="number-pad"
                        autoCorrect={false}
                        onChangeText={text => setMembrosExecutando(text)}
                    ></TextInput>
                </View>
                <View style={styles.formField}>
                    <Text style={styles.label}>NPS</Text>
                    <TextInput style={styles.nps}
                        placeholder="Ex: 75"
                        placeholderTextColor="#999"
                        autoCapitalize='characters'
                        keyboardType="number-pad"
                        autoCorrect={false}
                        onChangeText={text => setNps(text)}
                    ></TextInput>
                </View>
            </View>
            <View style={styles.buttonBox}>
                <TouchableOpacity style={styles.btnClean}><Text style={styles.btnText} onPress={reset}>Limpar</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btnCalculate} onPress={calculaCluster}><Text style={styles.btnText}>Calcular</Text></TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.linkNB} onPress={()=>{navigation.navigate('Links')}} ><Text style={styles.linkText}>Conheça a No Bugs</Text></TouchableOpacity>
        </View>
    );
}