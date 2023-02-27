import Cart from '../models/cart.js'


// add tiffin
export const addTiffin = async (req, res) => {
    const data = req.body;
    try {
        const tiffin = new Cart(data);

        await tiffin.save();
        res.status(201).send(tiffin);
    } catch (error) {
        res.status(400).send(error)
    }
}


// remove tiffin
export const removeTiffin = async (req, res) => {

    const { tiffinID, userID } = req.body;

    try {
        const tiffin = await Cart.findOneAndDelete({ id: tiffinID, user: userID })

        if (!tiffin) {
            res.status(404).send({ mssg: 'Tiffin not found' })
        }
        res.send(tiffin)

    } catch (error) {
        res.send(error.message)
    }
}
