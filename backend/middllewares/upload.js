import path from 'path'
import multer from 'multer'

var storage = multer.diskStorage({
    destination:function(req,file,cb) {
        cb(null,'uploads/')
    },
    filename: function(req,file,cb) {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

var upload = multer({
    storage:storage,
    fileFilter: function(req,file,callback) {
        if (path.extname(file.originalname) === '.xlsx') {
            callback(null, true);
        }
        else{
            console.log('Only excel files are allowed');
            callback(null,false)
        }
    }
})

export default upload;