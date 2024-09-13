            const express=require("express");
            const userRouters = require("./route/user");
            const productRoute = require("./route/product");

            const app=express();//ye app ke ander sara server ban gay ahai

            app.use(express.json());

            const users = [{
                username : "hemant",
                email : "ahujahemant@gmail.com",
                contactdetail : "12345678"
            }
            ]

            const middleware1 = (req,res,next)=>{
                console.log("Middleware 1 called");
                // res.send({message : "Unauthorized"});
                next();
            }
            const middleware2 = (req,res,next)=>{
                console.log("Middleware2 called");
                next();
            }

            app.use(middleware1);

            app.use("/api",userRouters); //http://localhost:3000/api/
            app.use("/products",productRoute); //http://localhost:3000/products/product

            app.get("/",((req,res)=>{
                res.send({messgae : "user fetched",users : users});
            }))
            // crud-create,read,update,delete
            // GET -read data,POST-create-entry,PUT-update entry,DELETE-delete entry
            // node is middle ware which connect frontend and backend or is node ke ander req and res middleware hai 
            app.post("/createUser",middleware2,(req,res)=>{ //  http://127.0.0.1:3000/createUser
                const data=req.body;
                console.log(data);
                users.push(data);
                res.send({message:"User Created",user:data});
            });

            app.put("/updateUser",(req,res)=>{

            })

            // MVC -- Model , view , controller


            app.listen(3000,()=>{ //localhostname daalne ki zarurat nahi hai
                console.log("server is running on 3000")
            })

            /*ye upar pura server create hogya isko run krwane ke liye package.json mai script 
            mai test ke neeche start likhke krenge or terminal pr npm start run krke fir postman 
            mai jaake get se send krdena hai*/  
