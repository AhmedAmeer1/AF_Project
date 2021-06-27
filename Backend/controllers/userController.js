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
                console.log("inside register ")
          

                const user = await userModel.findOne({email})
                if(user) return res.send({msg: "The email already exists."})

                  
                // Password Encryption
                const passwordHash = await bcrypt.hash(password, 10)
                console.log("working ")     
                const newUser = new userModel({userRole,name,email,password: passwordHash})
                

                await newUser.save()
                .then(user =>{
                    console.log("inside save user")
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
                                   res.json({ token,
                                    user: {
                                        id:user._id,
                                        name:user.name,
                                        email:user.email
 
                                    }});
                                  

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
console.log(user.email)
console.log(user.password)
              const isMatch =await bcrypt.compare(password, user.password)
              console.log("inside this shit")
              console.log(isMatch)
                if(!isMatch){return res.status(400).json({msg: "Incorrect password."})} 
               
                const accessToken=jwt.sign({email:user.email},jwtSecret,{expiresIn: 1500});
                console.log(accessToken)
                var decoded = jwt.decode(accessToken, {complete: true});
                console.log(decoded.header);
                console.log(decoded.payload.email)
                const emailuser =decoded.payload.email
        res.status(201).send(accessToken);

              

                

               
            

             //res.json(user)
             //console.log("user is : "+user)

        } catch (err) {
            console.log("err :"+err)
            return res.status(500).json({msg: err.message})
           
        }


    },


    updateUser : async (req,res)=>{
        try {
            console.log("inside user  update controller")

            console.log(req.params.id)

            const {role}=req.body;

            console.log(role)
            console.log(req.body)

            await userModel.findOneAndUpdate({_id: req.params.id}, {
                role 
            })



           //const conferences= await conferenceModel.find().then(conference => res.json(conference));
        } catch (err) {
            console.log("err :"+err)
           // return res.status(500).json({msg: err.message})
        }
    }





}

module.exports=userController
