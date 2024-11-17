const mysql = require('mysql2');

const makeConnection = () => {
    return mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });
}

const database = {
    connection: makeConnection(),
    connect: function(){
        console.log("Conectando ao banco de dados...\n");

        this.connection.connect(function(err){
            if(err) throw err;
            console.log("Conectado ao banco de dados!\n");
        });
    }
}

module.exports = database;