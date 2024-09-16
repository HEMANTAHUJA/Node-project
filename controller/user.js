const users = require("../user");
const User = require("../model/user");
const user = require("../model/user");


exports.getUsers = async (req,res)=>{

    // res.send({message : "User fetched",data : users});
    // res.status(200).send({message : "user fetched",data : users}); // this can be used to send ststus messgae and error message to to server
    
    try{
    const users = await User.find();
    res.status(200).send({message: "User Fetched",data : users});
    }catch(error){
        res.status(500).send(error);
    }
};

exports.crateUser = async (req,res)=>{
    try{
    const {firstName , lastName, email, contactDetail}  = req.body;
    // const modifiedData = {id : users.length+1 , ...data};
    // users.push(modifiedData);
    // res.status(201).send({message : "user created", data : data});
    const newUser = new User({firstName : firstName , lastName : lastName, email : email, contactDetails : contactDetail});
    await newUser.save();
    res.status(201).send({message: "User created",data: user});
    } catch(error){
        console.log(error)
        res.status(500).send({error : error});
    }


};

exports.updateUser = (req,res)=>{
    const id = req.params.id;
    const user = users.find(item=>item.id === +id);
    if(!user){
       return res.status(404).send({message : "user not found"});
    }
    user.contactdetail = req.body.contactdetail;
    res.status(202).send({message : "User updated"});
};

exports.deleteUser = (req,res)=>{
    const id = req.params.id;
    const userIndex = users.findIndex(item => item.id === +id);
    
    if (userIndex === -1) {
      return res.status(404).send({ message: "user not found" });
    }
    
    users.splice(userIndex, 1); 
    res.status(200).send({ message: "user deleted" });
};