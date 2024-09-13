const middleWare1 = (req,res,next)=>{
    // console.log("Middle ware 1 is called");
    // next();
    const randomNumber = Math.floor(Math.random() * 10);
    if(randomNumber % 2 !== 0){
        res.send({Message : "Unauthorized"})
    }else{
        console.log("User authenticated");
        next();
    }
}
    
module.exports = middleWare1;