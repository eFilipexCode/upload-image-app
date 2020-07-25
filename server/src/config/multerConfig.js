const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const multerConfig = {
    storage: multer.diskStorage({
        destination: function (request, file, callback) {
            callback(null, path.resolve(__dirname, '..', '..', 'uploads'));
        },
        filename: function (request, file, callback) {
            const idFileName = crypto.randomBytes(6).toString('hex');
            const fileName = `${idFileName}_${file.originalname}`;
            callback(null, fileName);
        },
    }),
};

module.exports = multerConfig;