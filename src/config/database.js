const sqlite3 = {
    client: 'sqlite3',
    connection: {
        filename: __dirname + '/../db/mensajes.sqlite'
    },
    useNullAsDefault:true
}

const mysql = {
    client: 'mysql',
    connection: {
    host : '127.0.0.1',
    port : 3306,
    user : 'coder',
    password : 'P@ssword.01',
    database : 'products'
  }
}
module.exports = {sqlite3, mysql};