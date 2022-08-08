const pdf = require('html-pdf');
const { v4: uuidv4 } = require('uuid');

class PdfParser {
    static Writer(html, filename) {
        const id = uuidv4();
        const name = filename.split('.')

        const dirname = 

        pdf.create(html, {}).toFile(`downloads/${id}_${name[0]}.pdf`)

        return `${id}_${name[0]}.pdf`;
    }
}

module.exports = PdfParser;