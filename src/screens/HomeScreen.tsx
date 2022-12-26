import React,{useState} from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
const [lines, setLines] = useState(2)

  const renderItem = (item: any) => {
    return(
      <View style={styles.itemWrapper}>
        <View style={styles.rowWrapper}>
          <Image 
          style={styles.imageWrapper}
          source={require('../images/male.png')}
        />
        <View style={{flex: 1, marginLeft: 20}}>
          <Text style={styles.nameStyling}>Name</Text>
          <Text style={styles.addressStyling}>Address</Text>
        </View>
        <Icon name="arrow-forward-ios" size={20} color="#808080" />
      </View>
      <Text style={styles.description} numberOfLines={lines}>It is such an amazing practice to remember that every emotion 
      we are feeling, even the bad ones, are just part of the journey we call life.
        <Text style={styles.seeMore} onPress={() => setLines(lines+1)}>  see more...</Text> 
      </Text>
      <View style={styles.bottomLine}/>
      </View>
    )
  }
  return (
      <FlatList
        data={[1, 2,3]}
        renderItem={renderItem}
        keyExtractor={(item: any,index: any) => index}
      />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  itemWrapper: {
    backgroundColor: 'white',
    flex: 1,
  },
  rowWrapper: {
      flexDirection: 'row',
      padding: 10,
      alignItems: 'center'
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
  },
  bottomLine: {
    height: 0.5,
    backgroundColor: '#808080'
  },
  description: {
    fontSize: 15,
    padding: 10,
    paddingTop: 5,
  },
  seeMore: {
    fontSize: 14,
    fontWeight: 'bold'
},
})