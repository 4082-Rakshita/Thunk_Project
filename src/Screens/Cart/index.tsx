import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity ,Button,Image} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeProductFromCart, addProductToMyCart, removeItemCompletely} from '../../Redux/CartSlice';
import CustomButton from '../../Components/CustomButton';
import CustomFlatList from '../../Components/CustomFlatlist';
import { Icons } from '../../Assets';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../../Components/CustomHeader';
import styles from './style';
const Cart = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const cartItems = useSelector((state) => state.CartSlice);
    const renderItem = ({ item ,index}) => {
        const increment=()=>{
            dispatch(addProductToMyCart(item));
          }

          const decrement=()=>{
            dispatch(removeProductFromCart(item))
          }
         const removeItem=()=>{
           dispatch(removeItemCompletely(item))
         }
        return (
            <View style={styles.flatlist}>
                <View style={styles.body}>
                    <Image
                        source={{ uri: item.image }}
                        style={styles.itemImg}
                    />
                    <View style={{ marginLeft: 20, flexDirection: 'column' }}>
                        <Text style={styles.Title} numberOfLines={2}>{item.title} </Text>
                  
                        <Text style={styles.price}>${item.price}</Text>
                        <Text >{item.category}</Text>


                        <View style={styles.buttonConatiner}>
                           
                            {item.qty == 0 ? null : (
                                <TouchableOpacity style={styles.buttonCont} onPress={decrement}>
                                    <Text style={styles.button}>-</Text>
                                </TouchableOpacity>
                            )}
                            {item.qty == 0 ? null : (
                            <Text style={styles.count}>{item.quantity}</Text>
                        )}
                            {item.qty == 0 ? null : (

                                <TouchableOpacity style={styles.buttonCont} onPress={increment} >
                                    <Text style={styles.button}>+</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                        <CustomButton Title={"Remove"}  onPress={removeItem} style={styles.remove}/>
                    </View>
                </View>
            </View>

        )
    }
    const handleBack=()=>{
        navigation.goBack();
    }
    return (
        <SafeAreaView style={styles.container}>
            
            <CustomHeader  heading={styles.heading}Title="Cart Items" onPress={handleBack} img={Icons.back} style={styles.back} imgStyle={styles.backimg}/>
           
            {cartItems.length === 0 ? (
                <Text style={styles.noItem}>Your cart is empty.</Text>
            ) : (
                <CustomFlatList
                    data={cartItems}
                    renderItem={renderItem}
                />
            )}
        </SafeAreaView>
    );
};


export default Cart;
