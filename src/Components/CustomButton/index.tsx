import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import { vh, vw } from '../../Util/dimension';

interface ButtonProps {
    onPress: () => void; 
    Title: string; 
    img?: any; 
    style?: object; 
}

const CustomButton: React.FC<ButtonProps> = ({ onPress, Title, img, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, style]}>
            {img && <Image style={styles.image} source={img} />} 
            <Text style={styles.text}>{Title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: 'black',
        borderRadius: vw(10),
        paddingVertical: vh(10),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        textAlign: 'center',
        marginLeft: vw(10),
    },
    image: {
        width: vh(20),
        height: vw(20),
        resizeMode: 'contain',
    },
});

export default CustomButton;
