var express = require('express');
var app = express();
app.get('/',function(req, res){//사용자가 home으로 접속 할때
  res.send('<h1>Hello home page</h1>');
});//get방식으로 접속한 사용자를 받기위해 메소드 호출
app.get('/login',function(rew,res){
  res.send('Login please');
});
app.listen(3000, function(){
  console.log('Connected 3000 port!');
});
