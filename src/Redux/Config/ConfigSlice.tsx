// import { createSlice } from '@reduxjs/toolkit';
// import { getProductsAction } from './ConfigAction';

// interface ConfigModal {
//   isLoading: boolean;
//   count: number;
//   products?: any;
//   matched: boolean;
// }

// type ActionType = {
//   type: string;
//   payload: any;
// };

// let initialState = {
//   isLoading: false,
//   count: 0,
//   products: [],
//   matched: false,
// };

// const ConfigSlice = createSlice({
//   name: 'Config',
//   initialState,
//   reducers: {
//   },

//   extraReducers: builder => {

//     builder.addCase(getProductsAction.pending, state => {
//       state.isLoading = true;
//     });

//     builder.addCase(getProductsAction.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.products = action.payload.map(product => ({
//         ...product,
//         quantity: 0,

//       }));

//     });
//     builder.addCase(getProductsAction.rejected, state => {
//       state.isLoading = false;
//     });

//     builder.addMatcher(
//       action => action.type.endsWith('/fulfilled'),
//       (state, action) => {
//         state.isLoading = false;
//         state.matched = true;
//       },
//     );
//     builder.addDefaultCase((state, action) => {
//       state.isLoading = false;
//     });
//   },
//   selectors: {
//     getProducts: (state: ConfigModal) => state.products,
//   },
// });

// export const { getProducts } = ConfigSlice.selectors;
// export const { setProductQuantity } = ConfigSlice.actions;
// export const selectProducts = (state: ConfigModal) => state.products;


// export default ConfigSlice.reducer;


