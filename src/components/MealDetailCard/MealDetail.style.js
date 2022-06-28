import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: Dimensions.get('screen').width / 1.05,
        height: Dimensions.get('screen').height / 3,
        alignSelf: 'center',
        borderRadius: 20,
        margin:10,
    },
    opacityContainer: {
        backgroundColor: 'black',
        position: 'absolute',
        top: 240,
        width: Dimensions.get('screen').width / 1.05,
        height: 60,
        alignSelf: 'center',
        opacity:0.8,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    },
    innerOpacityContainer: {
        position: 'absolute',
        top: 240,
        width: Dimensions.get('screen').width / 1.05,
        height: 60,
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    foodContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    areaText: {
         color:'white',
         fontSize:24,
    },
    last_container: {
    },
    title: {
        marginTop:10,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        color: 'red',
    },
    description: {
        margin:10,
        fontWeight: 'bold',
        fontSize: 20,
        alignItems:'center',
        color: 'black',
    },
    lineView:{
        height:1,
        width:500,
        backgroundColor:'grey',
        marginTop:3,    
    },
    button: {
        width: 350,
        height:50,
        backgroundColor:'red',
        alignSelf:'center',
        borderRadius:10,
        marginTop:10,
        marginBottom:20,
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row'
    },
    button_text: {
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    },

})
export default styles;