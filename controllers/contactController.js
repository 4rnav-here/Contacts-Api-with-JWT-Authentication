const asyncHandler = require("express-async-handler")
const Contacts = require("../models/contactModel")

// const newContact = Contacts.create({
//     name: "John Doe",
//     email: "johndoe@example.com",
//     phone_number: "1234567890"
// });

const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contacts.find();
    res.status(200).json(contacts);
});

const createContacts = asyncHandler(async (req, res) => {
    const {name, email, phone_number} = req.body;
    if(!name || !phone_number || !email){
        throw new Error("Mandatory fields missing");
    }
    console.log("The required contact body is", req.body)
    const contact = await Contacts.create({
        name,
        email,
        phone_number,
    });
    res.status(201).json({contact});
})

const getContactAt = asyncHandler(async (req, res) => {
    res.status(200).json({messgae: `Get the contact at ${req.params.id}`});
})

const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({messgae: `Update the contact at ${req.params.id}`});
})

const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({messgae: `Delete the contact at ${req.params.id}`});
})

module.exports = {
    getContacts,
    createContacts,
    getContactAt,
    updateContact,
    deleteContact
}