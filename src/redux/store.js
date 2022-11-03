import { configureStore } from "@reduxjs/toolkit";

import cartReducer from './cartSlice';

// configurestore in reduxjs toolkit

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});


export default store;




