const crypto = require('crypto');

module.exports = function generaeUniqueId() {
    return crypto.randomBytes(4).toString('HEX');
}