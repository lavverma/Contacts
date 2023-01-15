require("dotenv").config();
const express = require("express");
const route = require("./routes/route")
const mongoose = require("mongoose")
const cors  = require("cors")
const app = express();

const {
  PORT,
  DATA_BASE_LINK
} = process.env;

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(cors())

// Connect DataBase
mongoose.set('strictQuery', false)
mongoose.connect(DATA_BASE_LINK,{
    useNewUrlParser : true
})
.then(()=>console.log(`Data Base connected`))
.catch((err)=>console.log(err))

//Set routing
app.use('/', route)

//Server
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
