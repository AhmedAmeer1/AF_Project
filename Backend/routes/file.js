const path = require('path');
const express = require('express');
const multer = require('multer');
const File = require('../models/file');
const Router = express.Router();
const fileController = require('../controllers/fileController')

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './files');
    },
    filename(req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`);
    }
  }),
  limits: {
    fileSize: 20000000 // max file size 1MB = 1000000 bytes
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
      return cb(
        new Error(
          'only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format.'
        )
      );
    }
    cb(undefined, true); // continue with upload
  }
});


// File
Router.post('/upload',upload.single('file'),fileController.addfile)
Router.get('/getAllFiles',fileController.getFile)
Router.get('/download/:id',fileController.downloadFile)
Router.put('/editStatus/:id',fileController.updateStatus)

// File Template
Router.post('/uploadTemplate',upload.single('file'),fileController.addTemplate)
Router.get('/getAllFilesTemplate',fileController.getFileTemplate)
Router.get('/downloadTemplate/:id',fileController.downloadFileTemplate)

module.exports = Router;
