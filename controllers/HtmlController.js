const Reader = require('../models/Reader');
const Writer = require('../models/Writer');
const Tables = require('../models/Tables');
const Processor = require('../models/Processor');
const HtmlParser = require('../models/HtmlParser');

const fs = require('fs');
const path = require('path');
const mime = require('mime');

exports.converter = async (req, res) => {
    try {
        console.log(req)
        const excel = await new Reader().Read(req.file.path) // Pega o arquivo(EXCEL) e transforma em texto

        if (excel == undefined) {
            return res.status(500).json({
                status: 'Conversão mal sucessida!' 
            });
        }

        const rowsOfExcel = Processor.Process(excel)

        const table = new Tables(rowsOfExcel)
        
        const html = await HtmlParser.Parser(table)

        if (html == undefined) {
            return res.status(500).json({
                status: 'Conversão mal sucessida!'
            });
        }
        
        const id = await new Writer().WriterFile(req.file.filename, html)

        if (id == undefined) {
            return res.status(500).json({
                status: 'Conversão mal sucessida!'
            });
        }
        
        return res.status(200).json({
            status: 'Conversão para html realizada!',
            data: {
                rota: `http//:localhost:8080/api/v1/html/${id}`
            }
        });
    } catch(err) {
        console.log(err)
        return res.status(500).json({
            status: 'Conversão mal sucessida!'
        });
    }
};

exports.download = (req, res) => {
    const id = req.params.id;
    const filename = path.basename(id);

    const dirPath = path.join(__dirname, `../downloads/${id}`);
    const mimetype = mime.getType(dirPath);

    res.setHeader('Content-disposition', 'attachment; filename=' + filename);
    res.setHeader('Content-type', mimetype);

    const filestream = fs.createReadStream(dirPath);
    filestream.pipe(res);
};