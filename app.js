var express = require('express');
var app = express();
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));//정적 파일 서비스 하는 법
app.get('/template', function(req,res){
  res.render('temp', {time:Date(), title:'Jade'});
});//temp파일 웹페이지로 렌더링 해서 전송(변수 주입하고싶으면 {}객체 형태로 주입시키면 됨
app.get('/',function(req, res){//사용자가 home으로 접속 할때
  res.send('<h1>Hello home page</h1>');
});//get방식으로 접속한 사용자를 받기위해 메소드 호출
app.get('/dynamic', function(req, res){
  var lis = '';
  for(var i=0;i<5;i++){
    lis = lis + '<li>coding</li>';
  }
  var time = Date();
  var output = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
      Hello, Dynamic!
      <ul>
        ${lis}
      </ul>
      ${time}
    </body>
  </html>
`;
  res.send(output);
});
app.get('/route', function(req, res){
  res.send('Hello Router, <img src="/router.png">');
});
app.get('/login',function(rew,res){
  res.send('Login please');
});
app.listen(3000, function(){
  console.log('Connected 3000 port!');
});
