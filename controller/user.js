const users = require("../user");


exports.getUsers = (req,res)=>{

    // res.send({message : "User fetched",data : users});
    res.status(200).send({message : "user fetched",data : users}); // this can be used to send ststus messgae and error message to to server
};

exports.crateUser = (req,res)=>{
    const data  = req.body;
    const modifiedData = {id : users.length+1 , ...data};
    users.push(modifiedData);
    res.status(201).send({message : "user created", data : data});
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