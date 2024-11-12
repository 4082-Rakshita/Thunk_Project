import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { vh, vw } from '../../Util/dimension';
import color from '../../Util/color';

interface HeaderProps {
  onPress: () => void;
  Title: string;
  img?: any;
  style?: object;
  imgStyle?: object;
  secondimg?: any;
  onPress2?: () => void;
  heading:object;
}

const CustomHeader: React.FC<HeaderProps> = ({ onPress, Title, img, style, imgStyle, secondimg, onPress2 ,heading}) => {
  return (
    <View style={styles.container}>
      <View style={styles.items}>
        {img && (
          <TouchableOpacity onPress={onPress} style={style}>
            <Image source={img} style={imgStyle} />
          </TouchableOpacity>
        )}
        </View>
        <View style={styles.header}>
        <Text style={heading}>{Title}</Text>
        </View>
        <View>
        {secondimg && (
          <TouchableOpacity onPress={onPress2} style={style}>
            <Image source={secondimg} style={imgStyle} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: color.secondry,
    height: vh(100),
    borderBottomLeftRadius: vw(10),
    borderBottomRightRadius: vw(10),
  },
 
  items: {
    marginTop: vh(30),
  },
  header:{marginTop:vh(20)}
  
});

export default CustomHeader;
