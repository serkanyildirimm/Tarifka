import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './Starter.style';

const Starter = ({navigation}) => {
  const openMenu=()=>{
    navigation.navigate('CategoriesPage')
  }
  return (
    <View style={styles.container}>
      <LottieView source={require('../../assets/45729-chef-animation.json')} autoPlay 
      style={{width:200,height:220,position:'absolute',top:200}}
      />
      <View  style={styles.inner_container}>
        <Text style={styles.title}>TARIFKA</Text>
        <TouchableOpacity
        onPress={openMenu}
        style={styles.button}
        >
          <Text style={styles.button_text} >Open Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Starter;
