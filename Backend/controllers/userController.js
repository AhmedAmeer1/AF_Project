const userModel = require('../models/usersModel');
const bcrypt = require('bcrypt')
const jwt =require ('jsonwebtoken')
//const config = require ('config')

const jwtSecret= "sl_myJwtSecret"
const userController ={
    register : async  (req,res)=>{
        try {
                const {userRole,name,email,password}=req.body;
                const category = new userModel(req.body);
                const user = await userModel.findOne({email})
                if(user) return res.send({msg: "The email already exists."})
                  
                // Password Encryption
                const passwordHash = await bcrypt.hash(password, 10)
                const newUser = new userModel({userRole,name,email,password: passwordHash})
                await newUser.save()
                .then(user =>{
                       jwt.sign(
                           {
                               //payload (adding information)
                               id:user._id,
                               name:user.name

                            },
                               jwtSecret,
                               //expire 1hr
                               {expiresIn:3600},
                               (err,token)=>{
                                   if(err){
                                       throw err
                                   }
                                   console.log(token)
                                   res.send ({ token,
                                    user: {
                                        id:user._id,
                                        name:user.name,
                                        email:user.email
                                     },
                                   msg:"your registration  successfull",success:true
                                   });
                               }
                       )
                });
        } catch (error) {
            console.log(error)
            return res.sendStatus(500)
        }
    },
    login: async (req,res )=>{
        try {
            const {email, password} = req.body;
            const user = await userModel.findOne({email})
            if(!user) return res.status(400).json({msg: "User does not exist."})
            const isMatch =await bcrypt.compare(password, user.password)
            if(!isMatch){return res.status(400).json({msg: "Incorrect password."})}
            const accessToken=jwt.sign({email:user.email,role:user.role},jwtSecret,{expiresIn: 1500});
            res.status(201).send(accessToken);
        } catch (err) {
            console.log("err :"+err)
            return res.status(500).json({msg: err.message})
        }
    },
    updateUser : async (req,res)=>{
        try {
            const {role}=req.body;
            await userModel.findOneAndUpdate({_id: req.params.id}, {
                role 
            })
        } catch (err) {
            console.log("err :"+err)
           // return res.status(500).json({msg: err.message})
        }
    },
    deleteUser: async(req, res) =>{
        try {

            await userModel.findByIdAndDelete(req.params.id)
            res.json({msg: "user is Deleted"})
        } catch (err) {
            return res.status(500).json("{msg: err.message}")
        }
    }
}

module.exports=userController