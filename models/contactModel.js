const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    email :{
        type: String,
        required : true
    },
    phone_number:{
        type: String,
        required : true
    }
    },
    {
        timestamps: true
    }
);

const Contacts = mongoose.model("Contacts", contactSchema)

module.exports =  {
    Contacts
}