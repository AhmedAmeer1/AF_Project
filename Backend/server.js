
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')












const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))



const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



app.get('/',(req,res)=>{

    res.send({msg:"hiiiiiiiiii"})
})



app.use('/user',require('./routes/userRouter'));
app.use('/admin',require('./routes/adminRouter'));
//app.use('/upload',require('./routes/imageRouter'));
app.use('/api', require('./routes/upload'))
app.use('/api', require('./routes/productRouter'))
app.use('/conference', require('./routes/conferenceRouter'))
app.use('/workshop', require('./routes/workshopRouter'))
app.use('/researchPaper', require('./routes/researchPaperRouter'))




// connect to the mongodb
const uri = "mongodb+srv://ahmed:ahmed@cluster0.t9ube.mongodb.net/AF_TEST?retryWrites=true&w=majority"
mongoose.connect(uri, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true 
}, err =>{
    if(err) throw err;
    console.log('Connecsd tkko MoDB')
})

  


 
app.listen(port, () => {
    console.log(`Server is   unnn   ig on : ${port}`);
});
