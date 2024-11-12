import { createSlice } from '@reduxjs/toolkit';

const favouriteSlice = createSlice({
    name: 'favourite',
    initialState: [],
    reducers: {
        favouriteItem: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index === -1) {
              
                state.push(action.payload);
            }
        },
        removeFromFavourite: (state, action) => {
            return state.filter(item => item.id !== action.payload.id);
        },
    },
});

export const { favouriteItem, removeFromFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;


