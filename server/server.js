const express = require( 'express' )
const mongoose = require("mongoose")
const cors = require('cors')
const app     = express()
const port    = process.env.PORT || 4000

mongoose.connect("mongodb+srv://database:6hey974YwCsRia4t@cluster0.frn94hi.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err))

const routes = require('./routes/user.routes')
const authRoutes = require('./routes/auth.routes')

app.use(cors())
app.use(express.json());

app.use('/api', routes)
app.use('/auth',authRoutes)

app.listen( port ,
() => console.log(`Expresso is on Port ${ port } Ctrl + C to Stop `) )