import {StyleSheet, Dimensions} from 'react-native';

const styles=StyleSheet.create({
    container:{
        margin:20,
        alignItems: 'center',
        flex: 1,
        backgroundColor:'orange',
    },
    image:{
        width:Dimensions.get('window').width/1.1,
        height:Dimensions.get('window').height/4,
        borderRadius:10,
    },
    text: {
        fontSize:20,
        position:'absolute',
        bottom:1,
        color:'white',
        fontWeight:'bold',
    },
    opacityview: {
        opacity:0.6,
        width:Dimensions.get('screen').width/1.1,
        height:40,
        position:'absolute',
        bottom:0,
        backgroundColor: 'black',
    }
})
export default styles;