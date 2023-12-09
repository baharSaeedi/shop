const autoBind = require("auto-bind");

module.exports = class Contrller {
    constructor(){
        autoBind(this)
    }
}