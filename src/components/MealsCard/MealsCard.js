import React from 'react';
import styles from './MealsCard.style';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';


const MealsCard = (props) => {
    return (
        <TouchableWithoutFeedback onPress={props.onSelect} >
            <View style={styles.container} >
                <Image style={styles.image}
                    source={{ uri: props.meals.strMealThumb }} />
                <View style={styles.opacityview} >
                </View>
                <Text style={styles.text}>{props.meals.strMeal}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default MealsCard;