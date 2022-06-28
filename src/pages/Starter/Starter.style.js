import {StyleSheet} from 'react-native';

const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'orange',
        alignItems:'center',
        justifyContent:'center'
    },
    inner_container:{
        position:'absolute',
        top:100,
        height:150,
        justifyContent:'space-between',
        alignItems:'center'
    },
    title:{
        color:'white',
        fontSize:50,
        fontWeight:'bold',
        fontFamily:'cursive',
        position:'absolute',
        top:80
    },
    button:{
        backgroundColor:'orange',
        width:150,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        position:'absolute',
        bottom:-80,
        borderWidth:2,
        borderColor:'white'
    },
    button_text:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    },
})

export default styles;
