module.exports = {
    client: 'sqlite',
    connection: {
        filename:  __dirname + '/src/database/database.sqlite'
    },
    migrations: {
        directory: __dirname + '/src/database/migrations'
    },
    useNullAsDefault: false
};