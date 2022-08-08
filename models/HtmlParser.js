const ejs = require('ejs');
const path = require('path');

class HtmlParser {
    static async Parser(data) {
        try {
            const dirPath = path.join(__dirname, '../utils/template.ejs');
            return await ejs.renderFile(dirPath, {header: data.header, rows: data.rows});
        } catch(err) {
            console.log(err)
            return undefined;
        }
    }
};

module.exports = HtmlParser