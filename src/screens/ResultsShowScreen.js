import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation}) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id')

  const getRestaurant = async (id) => {
    const response = await yelp.get(`/${id}`);
    response.data;
  };



  return (
    <View>
      <Text>ResultsShow</Text>
    </View>
    )
}

const styles = StyleSheet.create({

});

export default ResultsShowScreen
