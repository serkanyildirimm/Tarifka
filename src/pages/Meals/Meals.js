import React from 'react';
import { View, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import MealsCard from '../../components/MealsCard/MealsCard';

const Meals = (props) => {
  const { strCategory } = props.route.params
  const { loading, error, data } = useFetch(`${Config.API_FOODS}${strCategory}`)
 
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  const handleFoodDetail=(idMeal)=>{
    props.navigation.navigate('MealDetailPage',{idMeal})
  }
  const renderItem=({item}) => <MealsCard meals={item} onSelect={()=>handleFoodDetail(item.idMeal)}/>
  return (
    <View>
      <FlatList 
      data={data.meals}
      renderItem={renderItem}
      />
    </View>
  );
};
export default Meals;
