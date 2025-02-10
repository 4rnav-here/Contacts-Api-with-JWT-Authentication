const asyncHandler = require("express-async-handler")
const Contacts = require("../models/contactModel")

const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({messgae: "Get all contacts"});
})

const createContacts = asyncHandler(async (req, res) => {
    console.log("The required contact body is", req.body)
    const {name, phone_number} = req.body;
    if(!name || !phone_number){
        throw new Error("Mandatory fields missing");
    }
    res.status(200).json({messgae: "Create a contact"});
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