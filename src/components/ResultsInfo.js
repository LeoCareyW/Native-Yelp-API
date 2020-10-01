import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsInfo = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image_url }} style={styles.image}/>
      <Text stlye={styles.name}>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  title: {
    fontWeight: 'bold',
  }
})

export default ResultsInfo
