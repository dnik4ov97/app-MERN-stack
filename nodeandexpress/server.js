const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const userRouter = require('./routes/user-router')

const app = express()
const apiPort = 5002

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', userRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))








/*
//Load express module with 'require' directive
const express = require('express')
var connectDB = require('./config/db')

// new stuff ----------------------------
//const mongoose = require("mongoose")
//const Router = require("./routes")
// ---------------------------------------
const app = express()

app.use(express.json())


connectDB()

//Define port
var port = 5000

//Define request response in root URL (/)
app.get('/', function (req, res){
    res.send('Hello World!')
})

//Launch listening server on port 3000
app.listen(port, function () {
    console.log(`app listening on port ${port}!`)
})
*/


/*
const username = "dnikiforov"
const password = "DavRu97.."
const dbname = "WhatsUp"

mongoose.connect(
    `mongodb+srv://${username}:${password}@cluster0.vggxf.mongodb.net/${dbname}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "))
db.once("open", function (){
    console.log("Connected successfully")
})

app.use(Router)
app.listen(5000, () => {
    console.log("Server is running at port 5000")
})
*/