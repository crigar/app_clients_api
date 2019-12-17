const crypto = require('crypto');
const jwt = require("jsonwebtoken");
module.exports = {
    validate: async (user, password) => {
        const hash = crypto.createHash('md5').update(password).digest('hex');
        return user.pass == hash;
    },
    getToken: async (data, expiresIn) => {
        const token = await jwt.sign(data, config.secret, {
            expiresIn: expiresIn
        });
        
        return token;
    },
    encryptPass: async function (password) {
        let hash = crypto.createHash('md5')
          .update(password)
          .digest('hex');
        return hash;
    },
}
