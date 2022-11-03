import { createSlice } from "@reduxjs/toolkit";


const demoData = {
    tiffinId: '',
    desc: '',
    price: 0,
    addr: '',
    qty: 0,
    shift: {},
    fixed: '',
    days: ''
};


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        tiffins: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.tiffins = [...state.tiffins, action.payload]
        },
        removeFromCart: (state, action) => {
            let newTiffins = state.tiffins.filter(tf => tf.tiffinId !== action.payload)
            state.tiffins = newTiffins

        }
    }
})


export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;