import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsPrice('$')}
        />
        <ResultsList
          title="Mid Range"
          results={filterResultsPrice('$$')}
        />
        <ResultsList
          title="Baller"
          results={filterResultsPrice('$$$')}
        />
      </ScrollView>
     </View>
  )};

const styles = StyleSheet.create({
  margin: {
    marginLeft: 10
  }
})

export default SearchScreen
