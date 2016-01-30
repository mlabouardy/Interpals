var express=require('express'),
bodyParser=require('body-parser'),
api=require('./api'),
morgan=require('morgan');
app=express();

app.use(function(req,res,next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Accept, Content-type, X-Access-Token');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});


var privateRoutes=express.Router();

app.use(morgan('dev'));
app.use(bodyParser.json());
api(app, privateRoutes);

app.listen(3000,function(){
  console.log('Server listening ...');
});
