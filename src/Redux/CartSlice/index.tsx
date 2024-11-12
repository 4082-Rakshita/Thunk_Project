import { createSlice } from '@reduxjs/toolkit'

const CartSlice = createSlice({
 name:'cart',
 initialState:[],
 reducers:{
    addProductToMyCart(state,action){
      let myIndex= -1;
      state.map((item,index)=>{
         if(item.id==action.payload.id){
            myIndex=index;
         }
        
      });
      
      if(myIndex== -1){
         state.push({
            title:action.payload.title,
            id:action.payload.id,
            image:action.payload.image,
            price:action.payload.price,
            quantity:action.payload.quantity+1,
            category:action.payload.category
         });
         
      }
      else{
         state[myIndex].quantity=state[myIndex].quantity+1;
      }
    },

    removeProductFromCart(state,action){
       let myIndex=state.findIndex(item=>item.id===action.payload.id);
    
       if(myIndex!==-1){
        const currentItem=state[myIndex];
        if(currentItem.quantity>1){
         currentItem.quantity -=1;

        }
        else{
         state.splice(myIndex,1);
        }
       }
    },
    removeItemCompletely(state,action){
      return state.filter(item=>item.id !== action.payload.id);
    }
 }
})

export const {addProductToMyCart,removeProductFromCart,removeItemCompletely}=CartSlice.actions;
export default CartSlice.reducer;
