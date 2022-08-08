class Processor {
    static Process(data) {
        const strings = data.split('\r\n');
        const rows = []

        strings.forEach(row => {
            rows.push(
                row.split(',')
            )
        });

        return rows;
    }
}

module.exports = Processor;