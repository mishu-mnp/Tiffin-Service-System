import Orders from "../models/orders.js";


// get all orders
export const getAllOrders = async (req, res) => {
    try {
        const tiffins = await Orders.find();
        res.status(200).send(tiffins)
    } catch (error) {
        res.status(400).send(error.message)
    }
}


// add orders
export const addToOrder = async (req, res) => {
    const data = req.body;
    try {
        const tiffin = new Orders(data);

        await tiffin.save();
        res.status(201).send(tiffin);
    } catch (error) {
        res.status(400).send(error)
    }
}


// delete order
export const deleteOrder = async (req, res) => {
    const id = req.params.id;

    try {
        const tiffin = await Orders.findByIdAndDelete(id);

        if (!tiffin) {
            return res.status(404).send({ mssg: 'No Orders found with this Tiffin' })
        }

        res.send(tiffin)
    } catch (error) {
        res.status(400).send(error)
    }
}


// update order
// Decline or Accept
export const updateOrder = async (req, res) => {
    try {

        const updates = Object.keys(req.body);

        const tiffin = await Orders.findByIdAndUpdate({ _id: req.params.id })

        if (!tiffin) {
            res.status(404).send('Not Found')
        }

        updates.forEach(update => tiffin[update] = req.body[update])

        await tiffin.save()
        res.send(tiffin)
    } catch (error) {
        res.status(400).send(error.message);
    }
}