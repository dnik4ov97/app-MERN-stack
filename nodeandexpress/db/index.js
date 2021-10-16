const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://dnikiforov:DavRu97..@cluster0.vggxf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db