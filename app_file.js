var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.locals.pretty = true;//줄바꿈 이쁘게 해줌
app.set('views', './views_file');
app.set('view engine', 'jade');
app.get('/topic/new', function(req, res){
  res.render('new');
});
app.post('/topic', function(req, res){
  var title = req.body.title;
  var description = req.body.description;
  fs.writeFile('data/'+title, description, function(err){
    if(err){
      console.log(err);//error 상세 내용을 뿌려줌
      res.status(500).send('Internal Server Error');
    }
      res.send('Success!');
  });
});
app.listen(3000,function(){
  console.log('Connected, 3000 port!!');
});
