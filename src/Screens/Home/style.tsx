import { StyleSheet } from "react-native";
import color from '../../Util/color';
import {vw,vh} from '../../Util/dimension';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.primary,
    
    },
  button:{
    backgroundColor:color.secondry,
    marginLeft:vw(30),
    padding:20
  },
  footer:{
    flexDirection:'row',
    justifyContent:'center',
    padding:vh(10)
   
  },
  imgstyle:{
    width:vw(20),
    height:vh(20),
  },
  
  favicon:{
    marginLeft:vw(70),
    marginRight:vw(20),
    marginTop:vh(30)
  },
  heading: {
    fontWeight: 'bold',
    fontSize: vh(40),
    fontFamily:'Italianno-Regular',
    color: 'white',
    marginLeft: vw(130),
   
  },
  
    
  });
  
  export default styles;
  
  
  