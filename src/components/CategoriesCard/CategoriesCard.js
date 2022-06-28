import React from 'react';
import {View, Image,Text, TouchableWithoutFeedback} from 'react-native';
import styles from './CategoriesCard.style';

const CategoriesCard=({category,onSelect})=>{
    return(
        <TouchableWithoutFeedback onPress={onSelect} >
            <View style={styles.container}>
                <Image style={styles.image}source={{uri: category.strCategoryThumb}}/>
                 <Text style={styles.categorytext}>{category.strCategory}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default CategoriesCard;