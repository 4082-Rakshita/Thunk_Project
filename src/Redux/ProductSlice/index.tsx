import { createSlice } from '@reduxjs/toolkit';
import { getProductsAction } from '../Config/ConfigAction';

const initialState = {
  isLoading: false,
  products: [],
  currentPage:1,
  itemsPerPage:10,
  totalItems:0,
  error: null,
};

const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    resetProducts:(state)=>{
      state.products=[];
      state.currentPage=1;
      state.totalItems=0;
    }
  },
  extraReducers: builder => {
    builder.addCase(getProductsAction.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getProductsAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload.map(product => ({
        ...product,
        quantity: 0,
      }));
    });
    builder.addCase(getProductsAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default ProductSlice.reducer;
