const fs = require('fs');
const util = require('util');

class Reader {
    constructor()  {
        this.read = util.promisify(fs.readFile);
    }

    async Read(urlPath) {
        try {
            return await this.read(urlPath, 'utf8');
        } catch(err) {
            console.log(err)
            return undefined;
        }
    }
}

module.exports = Reader;