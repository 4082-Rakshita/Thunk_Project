import { vh, vw } from '../../Util/dimension';

import color from '../../Util/color';
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: vh(10),
    },
    item: {
        width: '48%',
        margin: 5,
        padding: 16,
        backgroundColor: 'white',
        borderRadius: vw(10),
        shadowColor: 'grey',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 10,
    },
    title: {
        fontSize: 16,
        fontWeight:'700',
        flexWrap: 'wrap',
        width: '100%',
    },
    image: {
        width: '100%',
        height: vh(100),
        borderRadius: vw(10),
        resizeMode: 'contain',
    },
    favicon: {
        width: vw(20),
        height: vh(20),
        resizeMode: "contain",
        marginBottom:vh(10)
    },
    price:{
        color:'green',
        fontSize:16,
        fontWeight:'400'
    },
    loader: {
        marginTop: 10,
    }
});

export default styles;

