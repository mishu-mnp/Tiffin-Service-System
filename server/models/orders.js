import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    tiffinID: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    address: String,
    message: String,
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
    shift: {
        lunch: Boolean,
        dinner: Boolean
    },
    status: {
        type: Boolean,
        default: false
    },
    total: {
        type: Number,
        required: true
    }
})


const Orders = mongoose.model('Orders', orderSchema);

export default Orders