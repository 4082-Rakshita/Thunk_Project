import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavourite } from '../../Redux/FavouriteSlice';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../../Components/CustomHeader';

import {Icons} from '../../Assets';
import styles from './style';

const Favourite = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const favoriteItems = useSelector((state) => state.FavouriteSlice); 


    const renderItem = ({ item }) => (
        <View style={styles.flatlist}>
            <View style={styles.body}>
                <Image source={{ uri: item.image }} style={styles.itemImg} />
                <View style={{ marginLeft: 20, flexDirection: 'column' }}>
                    <Text style={styles.name}>{item.title}</Text>
                    <Text style={styles.price}>${item.price}</Text>
                    <TouchableOpacity onPress={() => dispatch(removeFromFavourite(item))}>
                        <Text style={styles.removeButton}>Remove</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <CustomHeader  heading={styles.heading}
            Title="Favourites" onPress={handleBack}  img={Icons.back} style={styles.back} imgStyle={styles.backimg}/>
            {favoriteItems.length === 0 ? (
                <View>
                <Text style={styles.noItem}>Your favourites list is empty.</Text>
                </View>
            ) : (
                <FlatList
                    data={favoriteItems}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                />
            )}
            
        </SafeAreaView>
    );
};


   
export default Favourite;
