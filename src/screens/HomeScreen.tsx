import React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
  return (
    <View style={styles.rowWrapper}>
      <Image 
        style={styles.imageWrapper}
        source={require('../images/male.png')}
      />
      <View style={{flex: 1, marginLeft: 20}}>
        <Text style={styles.nameStyling}>Name</Text>
        <Text style={styles.addressStyling}>Address</Text>
      </View>
      <Icon name="arrow-forward-ios" size={30} color="black" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rowWrapper: {
      flex: 1,
      flexDirection: 'row',
      padding: 10,
      backgroundColor: 'white'
  },
  imageWrapper: {
      height: 50,
      width: 50,
      borderRadius: 25,
      borderWidth: 1,
      borderColor: 'black'
  },
  nameStyling: {
      fontSize: 16,
      fontWeight: 'bold'
  },
  addressStyling: {
      fontSize: 15,
  }
})