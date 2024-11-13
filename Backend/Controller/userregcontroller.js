const {registration} = require("../Model/usereg");


// Method GET
// API : http://localhost:5000/userregistration

async function Alluser(req,res){
    
    const alluser =  await registration.find();
    return res.send(alluser)

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



// Method DELETE
// API : http://localhost:5000/userregistration/_id


async function deleteUser(req, res) {
    const urlUser_id = req.params.id;
  
    await registration.deleteOne({
      _id: urlUser_id,
    });
  
    return res.status(200).send({ message: "User Deleted Successfully" });
  }



// Method UPDATE
// API : http://localhost:5000/userregistration/_id

async function updateUser(req, res) {
    const User_id = req.params.id;
  
    const getolduser = await registration.findOne({_id: User_id,});
  
    if (getolduser) {
      const { Name, Email, Pass } = req.body;
  
      const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
      if (!emailValidation.test(Email)) {
        return res.status(400).send({ error: "Invalid Email" });
      }
  
      const Exists = await registration.find({Email: Email.toLowerCase()});
  
      if (Exists.length > 0) {
        return res.status(409).send({ error: "Useremail already exists" });
      }
  
      await registration.updateOne(
        {
          _id: User_id,
        },
        {
          $set: {
            Name: Name,
            Email: Email.toLowerCase(),
            Pass: Pass,
          },
        }
      );
  
      return res.status(200).send({ message: "Role Updated Successfully", data: req.body });
    } else {
      return res.status(400).send({ error: "User not found" });
    }
  }



module.exports = {Alluser,Createuser,deleteUser,updateUser};

