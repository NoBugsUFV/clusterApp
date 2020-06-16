import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: { 
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight - 10
    },
    logo:{width: 100,
        height: 100,
        alignSelf: "center",
        marginTop: 15},
    descricao:{
        fontSize: 22,
        paddingVertical: 25
    },
    linkNB:{
        marginTop: 10,
        borderWidth: 3 ,
        borderColor: '#0075c9',
        borderRadius:8,
        height: 50,
        width: '98%',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
    linkText:{
        color: '#0075c9',
        fontWeight: 'bold'
    }
});