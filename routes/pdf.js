const route = require('express').Router()
const multer = require('multer');
const upload = multer({
    storage: multer.diskStorage({
        destination: 'uploads/',
        filename(req, file, callback) {
            const fileName = `${Date.now()}_${file.originalname}`
            
            return callback(null, fileName)
        },
    }),
})
const converterController = require('../controllers/PdfController');

route.post('/pdf/converter', upload.single('file'), converterController.converter)
route.get('/pdf/:id', converterController.download)

module.exports = route;