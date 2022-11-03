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
            console.log(action.payload)
            state.tiffins = [...state.tiffins, action.payload]
        }
    }
})


export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;