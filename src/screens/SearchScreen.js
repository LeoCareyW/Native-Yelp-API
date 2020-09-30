import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useRestaurants';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm ] = useState('')
  const [searchApi, restaurants, error] = useResults();

 const filterResultsPrice = (price) => {
  return restaurants.filter(result => {
    return result.price === price;
  });
 };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
       />
      {error ? <Text>{error}</Text> : null }
      <Text>We have found {restaurants.length} results</Text>
      <ResultsList title="Cost Effective" results={filterResultsPrice('$')}/>
      <ResultsList title="Mid Range" results={filterResultsPrice('$$')}/>
      <ResultsList title="Baller" results={filterResultsPrice('$$$')}/>
    </View>
  )};

const styles = StyleSheet.create({

})

export default SearchScreen
