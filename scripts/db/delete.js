const mysql = require('mysql2');  

require('dotenv').config();

const { 
  T_DB_USER, 
  T_DB_PASS, 
  T_DB_HOST,
  T_DB_DEV_DB_NAME,
  T_DB_TEST_DB_NAME,
  NODE_ENV
} = process.env;

const dbName = NODE_ENV === "development" 
  ? T_DB_DEV_DB_NAME 
  : T_DB_TEST_DB_NAME;

const connection = mysql.createConnection({  
  host: T_DB_HOST,  
  user: T_DB_USER,  
  password: T_DB_PASS 
});  

connection.connect((err) => {
  if (err) throw err;
  connection.query(`DROP SCHEMA ${dbName}`, (err, result) => {
    if (err && err.code === "ER_DB_DROP_EXISTS") {
      console.log("Already deleted");
      process.exit(0);
    }

    if (err) throw err;

    console.log('Deleted db');
    process.exit(0);
  })
})