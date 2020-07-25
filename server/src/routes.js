const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('./config/multerConfig.js');

const imagesController = require('./controllers/imageController.js');

const routes = Router();
const upload = multer(multerConfig);

routes.get('/images', imagesController.index);
routes.get('/image/:id', imagesController.show);
routes.post('/image', upload.single('image'), imagesController.create);

module.exports = routes;