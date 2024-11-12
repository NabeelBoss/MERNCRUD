const {registration} = require("../Model/usereg");


// Method GET
// API : http://localhost:5000/userregistration

async function Alluser(req,res){
    
    const alluser =  await registration.find();
    return res.send({"data":alluser})

}



// Method POST
// API : http://localhost:5000/userregistration

async function Createuser(req, res) {
    const { Name, Email, Pass } = req.body;

    const emailverification = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailverification.test(Email)) {
        const exist = await registration.findOne({ Email: Email.toLowerCase() });

        if (exist) { 
            return res.send({ "error": "Email already exists" });
        }

        await registration.create({
            Name: Name,
            Email: Email.toLowerCase(),
            Pass: Pass,
        });

        return res.send({ "Message": "User Created Successfully" });
    } else {
        return res.send({ "error": "Email is incorrect" });
    }
}


module.exports = {Alluser,Createuser};