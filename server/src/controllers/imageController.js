const database = require('../database/connection.js');

module.exports = {
    async create(request, response) {
        const { title } = request.body;
        const originalName = request.file.originalname;
        const articialName = request.file.filename;
        const size = request.file.size;
        const mimetype = request.file.mimetype;

        if (!title)
            return response.status(400).send('Informações recebidas inválidas.');

        const data = {
            title,
            image_original_name: originalName,
            image_artificial_name: articialName,
            size,
            mimetype,
        };

        try {
            const imageData = await database('images')
                .insert(data);
            return response.json(imageData);
        } catch (error) {
            return response.status(500).send('Ocorreu um erro ao registrar imagem. Tente novamente');
        };
    },
    async index(request, response) {
        const { page = 1 } = request.query;
        const imagesLimit = 10;

        try {
            const images = await database('images')
                .select('*')
                .limit(imagesLimit)
                .offset((page - 1) * imagesLimit);
            response.json(images);
        } catch (error) {
            response.status(500).send('Ocorreu um erro ao obter as imagens. Tente novamente.');
        };
    },
    async show(request, response) {
        const { id } = request.params;

        try {
            const image = await database('images')
                .select('*')
                .where('id', id)
                .first();

            response.json(image);
        } catch (error) {
            response.status(500).send('Ocorreu um erro ao tentar carregar informações desta imagem. Tente novamente');
        };
    },
};