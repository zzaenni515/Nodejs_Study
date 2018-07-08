//supervisor 설치(자동컴파일->실행됨 편함 굿굿)
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.locals.pretty = true;//줄바꿈 이쁘게 해줌
app.set('views', './views_file');
app.set('view engine', 'jade');
app.get('/topic/new', function(req, res){
  fs.readdir('data', function(err, files){
    if(err){
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
  res.render('new', {topics:files});
  });
});
app.get(['/topic', '/topic/:id'], function(req, res){
  fs.readdir('data', function(err, files){
    if(err){
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    var id = req.params.id;
    if(id){//id 값이 있을 때
      fs.readFile('data/'+id, 'utf8', function(err, data){
        if(err){
          console.log(err);
          res.status(500).send('Internal Server Error');
        }
        res.render('view', {topics:files, title:id, description:data});
      });
    }
    else{//id가 없을 때
      res.render('view', {topics:files, title:'Welcome', description:'Hello, JavaScript for server.' });
    }
  });
});//글 불러와 읽기
app.post('/topic', function(req, res){//글저장
  var title = req.body.title;
  var description = req.body.description;
  fs.writeFile('data/'+title, description, function(err){
    if(err){
      console.log(err);//error 상세 내용을 뿌려줌
      res.status(500).send('Internal Server Error');
    }
    //  res.send('Success!');
      res.redirect('/topic/'+title);//작성한 글의 상세보기 페이지로 리다이렉트
  });
});
app.listen(3000,function(){
  console.log('Connected, 3000 port!!');
});
