import { createSlice } from "@reduxjs/toolkit";


const orderSlice = createSlice({
    name: 'orders',
    initialState: {
        orders: []
    },
    reducers: {
        addToOrder: (state, action) => {
            console.log(action.payload)
            state.orders = [...state.orders, action.payload]
        }
    }
})


export const { addToOrder } = orderSlice.actions;

export default orderSlice.reducer;