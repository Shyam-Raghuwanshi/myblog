const mongoose = require('mongoose')
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost:27017/MyBlog?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')

const contactSchema = new Schema({
    name: String,
    email: String,
    number: String,
    message: String
})

mongoose.model('contact', contactSchema)

export default async function handler(req, res) {
    // let contact = await Contact.create(req.body)
    res.status(200).send(req.body)
}