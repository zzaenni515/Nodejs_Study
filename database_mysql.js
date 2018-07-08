var mysql = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'dailygram',
  password : 'dailygram',
  database : 'dailygram'
});

conn.connect();
//DB 연결

var sql = 'SELECT * FROM member';
conn.query(sql, function(err, rows, fields){
  if(err){
    consle.log(err);
  }else{
    console.log('rows', rows);
    console.log('fields', fields);
  }
});//member테이블의 컬럼과 값들을 출력

conn.end(); //DB 연결 끊기
