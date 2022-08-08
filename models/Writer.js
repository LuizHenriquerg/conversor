const fs = require('fs');
const util = require('util');
const { v4: uuidv4 } = require('uuid');

class Writer {
    constructor() {
        this.writer = util.promisify(fs.writeFile);
    }

    async WriterFile(filename, data) {
        try {
            const id = uuidv4();
            const name = filename.split('.')
            this.writer(`downloads/${id}_${name[0]}.html`, data)

            return `${id}_${name[0]}.html`;
        } catch(err) {
            console.log(err)
            return undefined;
        }
    }
};

module.exports = Writer;