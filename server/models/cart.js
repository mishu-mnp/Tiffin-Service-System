import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
    tiffinID: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    address: String,
    days: String,
    desc: String,
    fixed: Boolean,
    img: String,
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    },
    shift: String
})


const Cart = mongoose.model('Cart', cartSchema);

export default Cart;