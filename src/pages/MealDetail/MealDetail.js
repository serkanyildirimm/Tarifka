import React from 'react';
import {View, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'
import MealDetailCard from '../../components/MealDetailCard/MealDetailCard';
import Config from 'react-native-config';


const MealDetail = (props) => {
  const {idMeal}=props.route.params
  const {loading,error,data}=useFetch(`${Config.API_DETAIL}${idMeal}`)

  if(loading){
    return <Loading/>
  }
  if(error){
    return <Error/>
  }
  const renderItem=({item}) => <MealDetailCard detail={item} />

  return (
    <View>
      <FlatList
      data={data.meals}
      renderItem={renderItem}
      />
    </View>
  );
};
export default MealDetail;
