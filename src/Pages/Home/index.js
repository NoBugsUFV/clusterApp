import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, Image, Button, KeyboardAvoidingView, Keyboard, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text'

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
    const [cleaning, setCleaning] = useState(false);

    function calculaCluster(){
        Keyboard.dismiss();
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
        setCleaning(true);
    }

    useEffect(()=>{
        if(membrosExecutando < 0 || membrosExecutando > 100){
        alert('O valor de membros executando deve estar entre 0% e 100%.');
        setMembrosExecutando(null);
        }
    },[membrosExecutando]);

    useEffect(()=>{
        if(nps < -100 || nps > 100){
            alert('O valor do NPS deve estar entre -100 e 100');
        }
    },[nps]);

    return(
        <ScrollView>
            <KeyboardAvoidingView style={styles.container} behavior='position'>
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
                            maxLength={3}
                            onChangeText={text => setTotalMembros(text)}
                            >
                        </TextInput>
                    </View>
                    <View style={styles.formField}>
                        <Text style={styles.label}>Faturamento</Text>
                        <TextInputMask
                            type={'money'}
                            options={{
                                precision: 2,
                                separator: ',',
                                delimiter: '.',
                                unit: 'R$ ',
                                suffixUnit: ''
                            }}
                            value={faturamento}
                            style={styles.faturamento}
                            placeholder="Ex: R$ 25.000"
                            placeholderTextColor="#999"
                            autoCapitalize='characters'
                            keyboardType="number-pad"
                            autoCorrect={false}
                            onChangeText={faturamento => {
                                let faturamentoFiltrado = (faturamento.split("").filter(n => (Number(n) || n == 0)).join(""))/100;
                                setFaturamento(faturamentoFiltrado);
                            }}
                        >
                        </TextInputMask>
                    </View>
                    <View style={styles.formField}>
                        <Text style={styles.label}>Membros Executando</Text>
                        <TextInput style={styles.membrosExecutando}
                            placeholder="Ex: 80%"
                            placeholderTextColor="#999"
                            autoCapitalize='characters'
                            keyboardType="number-pad"
                            autoCorrect={false}
                            maxLength={3}
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
                            maxLength={3}
                            onChangeText={text => setNps(text)}
                        ></TextInput>
                    </View>
                </View>
                <View style={styles.buttonBox}>
                    <TouchableOpacity style={styles.btnCalculate} onPress={calculaCluster}><Text style={styles.btnText}>Calcular</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.linkNB} onPress={()=>{navigation.navigate('Links')}} ><Text style={styles.linkText}>Conheça a No Bugs</Text></TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}
