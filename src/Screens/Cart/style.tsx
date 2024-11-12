import { StyleSheet } from "react-native";
import {vh,vw} from '../../Util/dimension'
import color from '../../Util/color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor:color.primary
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    body: {
        flexDirection: 'row',
        margin: 20,
        backgroundColor: 'white'
    },
    price: {
        color: 'green',
        fontSize: 16,
        fontWeight: '500'
    },
    name: {
        fontSize: 16,
        fontWeight: '500'
    },
    buttonConatiner: {
        flexDirection: "row",
    },
    buttonCont: {
        backgroundColor: 'black',
        padding: 5,
        borderRadius: 5,
        marginLeft: 10,
    },
    button: {
        color: 'white'
    },
    count: {
        marginLeft: 6,
        marginTop: 5,
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
        itemImg:{ 
            width: vw(80), 
            height: vh(80), 
            resizeMode:'contain' 
        },
        flatlist:{ 
            backgroundColor: 'white',
             margin: vw(7), 
             borderRadius:vw(20),
        },
        heading: {
            fontWeight: '800',
            fontSize: vh(40),
            fontFamily: 'Italianno-Regular',
            color: 'white',
            marginLeft: vw(90),
           
          },
          remove:{
            marginTop:vh(10),
          },
          Title:{
            width:vw(220),
            fontSize:16,
            fontWeight:'600'
          },
          noItem:{
            textAlign:'center',
            marginTop:vh(250),
            fontSize:20,
            fontWeight:'600'
          }
});

export default styles;

