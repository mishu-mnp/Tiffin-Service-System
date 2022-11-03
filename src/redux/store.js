import { configureStore } from "@reduxjs/toolkit";

import cartReducer from './cartSlice';
import orderReducer from './orderSlice';

// configurestore in reduxjs toolkit

const store = configureStore({
    reducer: {
        cart: cartReducer,
        orders: orderReducer
    }
});


export default store;




