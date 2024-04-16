const mysql=require('mysql2/promise');

const conexion=mysql.createPool({
    host:'localhost', //127.0.0.1
    port:3306,
    database:'campanas',
    user:'root',
    password:'shelter'
})

module.exports=conexion;