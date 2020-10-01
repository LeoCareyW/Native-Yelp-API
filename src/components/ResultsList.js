import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsInfo from './ResultsInfo'
import { withNavigation } from 'react-navigation';

const ResultsList = ({ title, results, navigation }) => {
  return <View style={styles.container}>
    <Text style={styles.titleStyle}> {title} </Text>
      <FlatList
        horizontal
        data={results}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id})}>
            <Text>
              <ResultsInfo result={item} />;
            </Text>
            </TouchableOpacity>
          )
        }}
      />
  </View>
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 6,
    marginBottom: 5
  },
  container: {
    marginBottom: 10
  }
})

export default withNavigation(ResultsList);
