const mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    database : 'employee',
    user : 'root',
    password :'root',
});

connection.connect(function(err){
    if(err){
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id '+ connection.threadId);
});

connection.query('SELECT * FROM time_table', function(error, result, fields){
    if (error)
        throw error;
    
    result.forEach(result => {
        console.log(result);
    })   
})