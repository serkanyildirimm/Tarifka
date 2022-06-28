import React from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';

const Error=()=>{
    return <LottieView source={require('../../assets/catError.json')} autoPlay/>
}
export default Error;