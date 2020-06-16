import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: { 
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight - 10
    },
    resultBox:{
        height:120,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor:'#e3e3e3',
        borderRadius: 10,
    },
    resultTitle:{
        marginTop: 12,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0075c9'
    },
    resultRow:{
        flexDirection: 'row',
        marginTop: 3,
        alignItems: 'center'
    },
    clusterText:{
        fontSize: 18,
        color: '#303030'

    },
    numCluster:{
        fontSize: 28,
        color: '#ffca2b'
    },
    form:{
        marginTop: 20,
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor:'#e3e3e3',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    formField:{
        marginBottom: 15
    },
    label:{
        marginBottom: 4
    },
    totalMembros:{
        backgroundColor: '#EEEEEE',
        borderRadius: 5,
        height: 40,
        width: 320,
        paddingHorizontal: 15
    },
    faturamento:{
        backgroundColor: '#EEEEEE',
        borderRadius: 5,
        height: 40,
        width: 320,
        paddingHorizontal: 15
    },
    membrosExecutando:{
        backgroundColor: '#EEEEEE',
        borderRadius: 5,
        height: 40,
        width: 320,
        paddingHorizontal: 15
    },
    nps:{
        backgroundColor: '#EEEEEE',
        borderRadius: 5,
        height: 40,
        width: 320,
        paddingHorizontal: 15
    },
    buttonBox:{
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5
    },
    btnClean:{
        backgroundColor: '#0075c9',
        borderRadius:8,
        height: 50,
        width: 175,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnCalculate:{
        backgroundColor: '#0bb015',
        borderRadius:8,
        height: 50,
        width: 170,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText:{
        color: '#EEEEEE'
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