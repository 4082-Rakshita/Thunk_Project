import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Product from '../Products';
import {Icons} from '../../Assets';
import Header from '../../Components/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import CustomButton from '../../Components/CustomButton';
import styles from './style';


const Home = () => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate('Cart')
  }
  const myCartItems = useSelector(state => state.CartSlice);
  const getTotal = () => {
    let total = 0;
    myCartItems.map(item => {
      total = total + item.quantity * item.price;
    });
    return total;
  }


  return (
    <SafeAreaView style={styles.container}>
      <Header heading={styles.heading} Title="Fusion Finds" secondimg={Icons.heart} imgStyle={styles.imgstyle}
        style={styles.favicon} onPress2={() => navigation.navigate('Favourite')} />
      <Product />
      <View style={styles.top}>
        {myCartItems.length > 0 ? (
          <View style={styles.footer} >
            <View >
              <Text>{'Added items' + '{' + myCartItems.length + '}'}</Text>
              <Text>{'Total: $' + getTotal()}</Text>
            </View>
            <CustomButton style={styles.button} Title='Go to Cart' onPress={handleNavigation} />
          </View>
        ) : null}
      </View>


    </SafeAreaView>
  );
};



export default Home;


