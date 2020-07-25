const knex = require('knex');

const connection = knex({
    client: 'sqlite',
    connection: {
        filename: __dirname + '/database.sqlite'
    },
    migrations: {
        directory: './migrations'
    },
    useNullAsDefault: false
});

module.exports = connection; 