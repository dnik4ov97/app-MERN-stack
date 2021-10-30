import express from 'express'
import mongoose from 'mongoose'
import Users from './dbUsers.js'
import Cors from 'cors'

// App Config
const app = express();
const port =  process.env.PORT || 5001;
const connection_url = "mongodb+srv://admin:Dniki1234@cluster0.y0lxp.mongodb.net/userdb?retryWrites=true&w=majority";

// Middlewares
app.use(express.json())
app.use(Cors());

// DB Config
mongoose.connect(connection_url, {
    // to make the connection really smooth because Mongo is in constant change 
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true,
});

// API Endpoints
app.get("/", (req, res) => res.status(200).send("Application Backend server!!"));

app.post('/app/user',  (req, res) => {
    const dbUser = req.body;

    Users.create(dbUser, (err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

app.get('/app/user', (req, res) => {
    Users.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})
// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));