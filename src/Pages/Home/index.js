import React from 'react';
import { View, Text, TextInput, Image, Button } from 'react-native';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.resultBox}>
                <Text style={styles.resultTitle}>Resultado</Text>
                <View style={styles.resultRow}>
                    <Text style={styles.clusterText}>Cluster</Text>
                    <Text style={styles.numCluster}> 3</Text>
                </View>
                <View style={styles.resultRow}>
                    <Text style={styles.points}>1250 </Text>
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
                        autoCorrect={false}>
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
                    ></TextInput>
                </View>
                <View style={styles.formField}>
                    <Text style={styles.label}>Membros Executando</Text>
                    <TextInput style={styles.membrosExecutando}
                        placeholder="80%"
                        placeholderTextColor="#999"
                        autoCapitalize='characters'
                        keyboardType="number-pad"
                        autoCorrect={false}
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
                    ></TextInput>
                </View>
            </View>
            <View style={styles.buttonBox}>
                <TouchableOpacity style={styles.btnClean}><Text style={styles.btnText}>Limpar</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btnCalculate}><Text style={styles.btnText}>Calcular</Text></TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.linkNB}><Text style={styles.linkText}>Conheça a No Bugs</Text></TouchableOpacity>
        </View>
    );
}