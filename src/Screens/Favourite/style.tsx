import { StyleSheet } from "react-native";
import {vh,vw} from '../../Util/dimension'
import color from '../../Util/color';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.primary
    },
    body: {
        flexDirection: 'row',
        margin: 20,
        backgroundColor: 'white'
    },
    price: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500'
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
        width: vw(220),
    },
    flatlist: {
        backgroundColor: 'white',
        margin: vw(7),
        borderRadius: vw(20),
    },
    itemImg: { 
        width: vw(80), 
        height: vh(80), 
        resizeMode: 'contain' 
    },
    removeButton: {
        color: 'red',
        marginTop: 10,
    },
    back:{
        backgroundColor:"white",
        padding:vw(10),
        marginLeft:vw(10),
        borderRadius:vw(10)
      },
      backimg:{
        resizeMode:'contain',
        width:vw(10),
        height:vh(10)},
        noItem:{
            textAlign:'center',
            marginTop:vh(270),
            fontSize:26,
        },
        heading: {
            fontWeight: 'bold',
            fontSize: vh(40),
            fontFamily: 'Italianno-Regular',
            color: 'white',
            marginLeft: vw(90),
           
          },
      
});

export default styles;
