const express = require('express');
const morgan = require('morgan');
const server = express();
const productRouter = require('./routes/product');
require('dotenv').config()
const mongoose = require('mongoose');
const {Schema} = mongoose;
const cors = require('cors')


server.use(cors())
//db connection

const DB = process.env.DATABASE;

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(DB);
    console.log('db connected');
}



//middlewares
server.use(express.json());
server.use('/api',productRouter.router)


const port = process.env.PORT || 8080;


server.listen(port,()=>{
    console.log('server started');
});
