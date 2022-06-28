import React from 'react';
import { ScrollView, Text, Image, View, TouchableOpacity, Linking} from 'react-native';
import styles from './MealDetail.style';


const MealDetailCard = ({ detail }) => {
    return (
        <ScrollView style={styles.container} >
            <Image source={{ uri: detail.strMealThumb }} style={styles.image} />
            <View style={styles.opacityContainer}></View>
            <View style={styles.innerOpacityContainer} >
                <View style={styles.foodContainer} >
                    <Text style={styles.areaText}>{detail.strCategory}</Text>
                </View>
                <View style={styles.foodContainer} >
                    <Text style={styles.areaText} >{detail.strArea}</Text>
                </View>
            </View>
            <View style={styles.last_container}>
                <Text style={styles.title}>{detail.strMeal}</Text>
                <View style={styles.lineView}></View>
                <Text style={styles.description} >{detail.strInstructions}</Text>
            </View>
            <TouchableOpacity  onPress={()=>Linking.openURL(detail.strYoutube)} style={styles.button}>
                <Text style={styles.button_text} >Watch on Youtube</Text>
            </TouchableOpacity>
        </ScrollView >

    )
}
export default MealDetailCard;