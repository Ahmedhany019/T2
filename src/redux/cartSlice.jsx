import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items:[]
    },
    reducers:{
        addToCart(state,action){
            const newItem = action.payload
            const existingItem = state.items.find(item=> item.id === newItem.id)
            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    name:newItem.name,
                    image:newItem.image,
                    price:newItem.price,
                    desc:newItem.desc
                })
            }
        },
        removeFromCart(state,action){
            const id = action.payload;
            const existingItem = state.items.find(item=> item.id === id);
            if(existingItem){
                state.items = state.items.filter(item=>item.id !== id);
            }
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer;