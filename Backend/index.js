const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

const {DbConnection} = require("./Config/db");
const {Alluser,Createuser,deleteUser,updateUser} = require("./Controller/userregcontroller");

app.route('/userregistration').get(Alluser).post(Createuser);

app.route('/userregistration/:id').delete(deleteUser).put(updateUser);


app.listen(process.env.PORT,function(){
    console.log(`Server is running on PORT ${process.env.PORT}`);
    DbConnection();
})

