class Tables {
    constructor(arr) {
        this.header = arr[0];
        arr.shift()
        this.rows = arr;
    }

    get RowsCount() {
        return this.rows.length;
    }
}

module.exports = Tables;