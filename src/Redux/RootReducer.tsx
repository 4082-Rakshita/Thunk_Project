import {combineReducers} from 'redux';

import ConfigSlice from './Config/ConfigSlice';
import ProductSlice from './ProductSlice';
import CartSlice from './CartSlice';
import FavouriteSlice from './FavouriteSlice';


const RootReducer =combineReducers({
    ConfigSlice,
    ProductSlice,
    CartSlice, 
    FavouriteSlice  
})
export default RootReducer;