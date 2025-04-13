const User = require("../models/userModel");
const Contact = require("../models/contactModel");


exports.addContact = async(req, res) => {
    try {

        const { user, name, phoneNumber, address, dob } = req.body;

        const contact = new Contact({
            user: user,
            name: name,
            address: address,
            phoneNumber: phoneNumber,
            dob: dob
        })

        const newContact = await contact.save();

        const userData = await User.findOneAndUpdate({ _id: user }, { $push: { 'contact': newContact } }, { new: true }).populate('contact').exec();


        res.status(200).json({
            userData,
        })



    } catch (e) {

        console.log(`ERROR is -----------> ${e}`);

        res.status(500).json({
            msg: "Internal Error",
        })

    }
}


exports.seacrhContact = async(req, res) => {
    try {

        const { name } = req.query;

        const data = await Contact.findOne({ name: name });

        res.status(200).json({
            data
        })

    } catch (e) {
        console.log("Error is ----->", e)
        res.status(500).json({
            msg: "Internal Error"
        })

    }
}


exports.deleteContact = async(req, res) => {
    try {

        const { id } = req.params;

        await Contact.findByIdAndDelete({ _id: id });

        const updatedUser = await User.updateMany({ contact: id }, { $pull: { contact: id } });

        res.status(200).json({
            msg: "Deleted Successfully",
            updatedUser,
        });

    } catch (e) {
        console.log(`Error is ------> ${e}`)

        res.status(500).json({
            msg: "internal Error"
        })
    }
}