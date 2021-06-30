
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const path = require('path');
const fileRoute = require('./routes/file');



const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
// app.use(fileUpload({
//     useTempFiles: true
// }))



const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



app.get('/',(req,res)=>{

    res.send({msg:"hiiiiiiiiii"})
})




app.use('/payment',require('./routes/paymentRouter'));
app.use('/user',require('./routes/userRouter'));
app.use('/admin',require('./routes/adminRouter'));



app.use('/conference', require('./routes/conferenceRouter'))
app.use('/workshop', require('./routes/workshopRouter'))

//file uploading
app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(fileRoute);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});







// connect to the mongodb
const uri = "mongodb+srv://ahmed:ahmed@cluster0.t9ube.mongodb.net/AF_TEST?retryWrites=true&w=majority"
mongoose.connect(uri, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err =>{
    if(err) throw err;
    console.log('Connectedd to    MoDB')
})





app.listen(port, () => {
    console.log(`Server is   running  in : ${port}`);
});
