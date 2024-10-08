const multer = require('multer')
const storage = multer.diskStorage({
destination: function(req, file, cb) {
cb(null, 'uploads')
},
filename: function(req, file, cb) {
const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
cb(null, "Fatih" + '-' + uniqueSuffix + "-" + file.originalname)
}
})
const fileFilter = (req, file, cb) => {
// if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//     cb(null, true)
// } else {
//     return cb(new Error('Dosya Türü Desteklenmiyor'), false);
// }
cb(null, true)
}
const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports=upload;