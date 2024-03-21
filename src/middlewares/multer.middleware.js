import multer from "multer";
// import { Path } from "mongoose";
import path from 'path';

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.resolve("./public/temp"));
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
});

export const upload = multer({
    storage,
});