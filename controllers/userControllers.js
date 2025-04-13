const User = require("../models/userModel");

exports.addUser = async(req, res) => {
    try {

        const { name } = req.body;

        const user = new User({ name: name });

        const newUser = await user.save();

        res.status(200).json({
            newUser,
        })

    } catch (e) {

        console.log(`Error is -----> ${e}`);

        res.status(500).json({
            msg: "Internal Error"
        })

    }
}


exports.exportData = async(req, res) => {
    try {

        const data = await User.find().populate('contact').exec();

        console.log(`The whole exported data is : \n ${data}`);


        res.status(200).json({
            msg: "---Whole data exported in console u can see ---"
        })

    } catch (e) {
        console.log(`Error ---> ${e}`);
        res.status(500).json({
            msg: "Internal Error"
        })
    }
}