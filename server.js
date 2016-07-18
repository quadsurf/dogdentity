var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static(__dirname + '/public'));
app.use(multer({dest: './uploads/'}));
// app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.post('/uploads', function(req, res){
  console.log(req.body);
  console.log(req.files);
  res.json({success:true});
});

// var public_router = express.Router();
// require('./app/routes/public.js')(public_router);
// app.use('/public', public_router);

// var port = process.env.PORT || 8080;

http.listen(8000, function(){
  console.log('listening on 8000');
});
