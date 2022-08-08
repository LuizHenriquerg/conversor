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
const converterController = require('../controllers/HtmlController');

route.post('/html/converter', upload.single('file'), converterController.converter)
route.get('/html/:id', converterController.download)

module.exports = route;