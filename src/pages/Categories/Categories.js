import React from 'react';
import { View, FlatList } from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import CategoriesCard from '../../components/CategoriesCard/CategoriesCard';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';


const Categories = ({ navigation }) => {
  const { loading, error, data } = useFetch(Config.API_CATEGORY)
  
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />

  }
  const handleCategorySelect = (strCategory) => {
    navigation.navigate('MealsPage', { strCategory })
  }
  const renderItem = ({ item }) => (
    <CategoriesCard category={item} onSelect={() => handleCategorySelect(item.strCategory)} />
  );
  return (
    <View>
      <FlatList
        data={data.categories}
        renderItem={renderItem}
      />
    </View>
  );
};
export default Categories;
