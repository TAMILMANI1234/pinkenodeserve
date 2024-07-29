const multer =  require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
    destination :(req,file,cb)=>{
        const folder_name = req.params.id;
         if(!folder_name){
             console.log("error in creating customer folder in uploads folder...")
         }

         //define a path
         const folder_path = path.join(__dirname,'uploads/verification/',folder_name); 
         if(fs.existsSync(folder_path)){
            console.log("yes")
         }else{
           fs.mkdirSync(folder_path,{recursive:true})
         }
         cb(null,`uploads/verification/${folder_name}`);
        
    },
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}-${file.originalname}`)
    }
});

const upload_image = multer({storage}).single('file');

module.exports = upload_image;
//