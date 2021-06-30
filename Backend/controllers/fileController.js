
const path = require('path');
const express = require('express');
const multer = require('multer');
const File = require('../models/file');
const FileTemplate = require('../models/fileTemplateModel');
const nodemailer = require('nodemailer');



var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'conferencesliit@gmail.com',
        pass: 'sumathyabi123'
    }
});

const fileController = {
    addfile : async  (req,res)=>{
        try {
            const { title, description ,contactDetails} = req.body;
            const { path, mimetype } = req.file;
            const file = new File({
                title,
                description,
                contactDetails,
                file_path: path,
                file_mimetype: mimetype
            });
            await file.save();
              res.send({msg:"file uploaded successfully."})
        } catch (error) {
            res.status(400).send('Error while uploading file. Try again later.');
        }

    },
    getFile : async  (req,res)=> {
        try {
            const files = await File.find({});
            const sortedByCreationDate = files.sort(
                (a, b) => b.createdAt - a.createdAt
            );
            res.send(sortedByCreationDate);
        } catch (error) {
            res.status(400).send('Error while getting list of files. Try again later.');
        }
    },

    downloadFile : async  (req,res)=> {
        try {
            const file = await File.findById(req.params.id);
            res.set({
                'Content-Type': file.file_mimetype
            });
            res.sendFile(path.join(__dirname, '..', file.file_path));
        } catch (error) {
            res.status(400).send('Error while downloading file. Try again later.');
        }
    },
    updateStatus : async (req,res)=>{
        try {
            const {status,email}=req.body;
            await File.findOneAndUpdate({_id: req.params.id}, {
                status
            })

            var mailOptionsaccept = {

                from: 'conferencesliit@gmail.com',
                to:email ,
                subject: 'Sending Email using Node.js ',
                text: 'Testing',
                html:'<h1><b>approved yours</b></h1><br><a href="http://localhost:3000/payment"><button>pay it</button></a>',
            };

            var mailOptionsreject = {

                from: 'conferencesliit@gmail.com',
                to: email,
                subject: 'Sending Email using Node.js ',
                text: 'Testing',
                html:'<h1><b>reject yours</b></h1>',
            };


            if(status=='approved'){

                transporter.sendMail(mailOptionsaccept, function(error, info){
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });

            }else{

                transporter.sendMail(mailOptionsreject, function(error, info){
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });

            }
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    // file template controller
    addTemplate : async  (req,res)=>{
        // upload.single('file')
        try {
            const { title, description } = req.body;
            const { path, mimetype } = req.file;
            const fileTemplate = new FileTemplate({
                title,
                description,
                file_path: path,
                file_mimetype: mimetype
            });
            await fileTemplate.save();
            res.send({msg:"template uploaded successfully."})
        } catch (error) {
            res.status(400).send('Error while uploading file. Try again later.');
        }

    },
    getFileTemplate : async  (req,res)=> {
        try {

            const files = await FileTemplate.find({});
            const sortedByCreationDate = files.sort(
                (a, b) => b.createdAt - a.createdAt
            );
            res.send(sortedByCreationDate);
        } catch (error) {
            res.status(400).send('Error while getting list of files. Try again later.');
        }
    },

    downloadFileTemplate : async  (req,res)=> {
        try {
            const file = await FileTemplate.findById(req.params.id);
            res.set({
                'Content-Type': file.file_mimetype
            });
            res.sendFile(path.join(__dirname, '..', file.file_path));
        } catch (error) {
            res.status(400).send('Error while downloading file. Try again later.');
        }
    }

}

module.exports=fileController