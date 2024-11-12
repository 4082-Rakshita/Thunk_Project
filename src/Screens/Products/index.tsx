import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction } from '../../Redux/Config/ConfigAction';
import CustomFlatList from '../../Components/CustomFlatlist';
import CustomButton from '../../Components/CustomButton';
import { Icons } from '../../Assets/index';
import { addProductToMyCart } from '../../Redux/CartSlice';
import { favouriteItem, removeFromFavourite } from '../../Redux/FavouriteSlice';
import color from '../../Util/color';
import styles from './style';

const Product = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.ProductSlice.products);
    const isLoading = useSelector((state) => state.ProductSlice.isLoading);
    const favourites = useSelector((state) => state.FavouriteSlice);
    
    
    const [loadingMore, setLoadingMore] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(getProductsAction());
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [dispatch]);

    const loadMoreData = async () => {
        if (!loadingMore) {
            setLoadingMore(true);
            
            setLoadingMore(false);
        }
    };

    const groupProducts = (products) => {
        const grouped = [];
        for (let i = 0; i < products.length; i += 2) {
            grouped.push(products.slice(i, i + 2));
        }
        return grouped;
    };

    const isFavorite = (product) => {
        return favourites.some(fav => fav.id === product.id);
    };

    const renderItem = ({ item }) => {
        return (
            <View style={styles.row}>
                {item.map((product) => (
                    <View style={styles.item} key={product.id}>
                        <View style={styles.content}>
                            <View>
                                <TouchableOpacity 
                                    style={styles.favicon} 
                                    onPress={() => {
                                        if (isFavorite(product)) {
                                            dispatch(removeFromFavourite(product));
                                        } else {
                                            dispatch(favouriteItem(product));
                                        }
                                    }}
                                >
                                    <Image 
                                        style={styles.favicon} 
                                        source={isFavorite(product) ? Icons.fav : Icons.notfav} 
                                    />
                                </TouchableOpacity>
                                <Image source={{ uri: product.image }} style={styles.image} />
                            </View>
                            <Text style={styles.title} numberOfLines={2}>{product.title}</Text>
                            <Text style={styles.price}>${product.price}</Text>
                        </View>
                        <CustomButton 
                            Title="Add to cart" 
                            img={Icons.Cart} 
                            onPress={() => dispatch(addProductToMyCart(product))}
                        />
                    </View>
                ))}
            </View>
        );
    };

    const groupedProducts = groupProducts(products);

    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator size="large" color={color.secondry} />
            ) : (
                <CustomFlatList
                    data={groupedProducts}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    onEndReached={loadMoreData}
                    onEndReachedThreshold={0.5} 
                />
            )}
            {loadingMore && <ActivityIndicator size="small" color="#0000ff" style={styles.loader} />}
        </View>
    );
};


export default Product;

