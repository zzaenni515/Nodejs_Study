var mysql = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'dailygram',
  password : 'dailygram',
  database : 'dailygram'
});

conn.connect();
//DB 연결

/*var sql = 'SELECT * FROM member';
conn.query(sql, function(err, rows, fields){
  if(err){
    consle.log(err);
  }else{
    for(var i=0;i<rows.length;i++){
      console.log(rows[i].id);
    }
  }
});//member테이블의 컬럼과 값들을 출력*/

/*var sql1 = 'INSERT INTO alerm(date, sender, receiver, board_seq, type) VALUES("2018-07-09 02:28:30", "hwangcl515", "zzaenni515", 1, "L")';
conn.query(sql1, function(err, rows, fields){
    if(err){
      console.log(err);
    }else{
      console.log(rows);
    }
});*/
/*var sql1 = 'INSERT INTO alerm(date, sender, receiver, board_seq, type) VALUES(?, ?, ?, ?, ?)';
var params=['2018-07-09 02:39:40', 'zzaenni515', 'hwangcl515', 2, 'S'];
conn.query(sql1, params, function(err, rows, fields){
    if(err){
      console.log(err);
    }else{
      console.log(rows.insertId);
    }
});*/

/*var sql2 = 'UPDATE alerm SET date=?, type=?  WHERE sender=?';
var params=['2018-07-09 02:39:50', 'L', 'zzaenni515', 'hwangcl515'];
conn.query(sql2, params, function(err, rows, fields){
    if(err){
      console.log(err);
    }else{
      console.log(rows);
    }
});*/

var sql3 = 'DELETE FROM alerm WHERE board_seq=?';
var params=[2];
conn.query(sql3, params, function(err, rows, fields){
    if(err){
      console.log(err);
    }else{
      console.log(rows);
    }
});
conn.end(); //DB 연결 끊기
