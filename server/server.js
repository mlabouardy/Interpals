var express=require('express'),
    bodyParser=require('body-parser');
    api=require('./api'),
    app=express(),
    port=4300;


app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

api(app);

app.listen(port,function(){
  console.log('Server listening to port '+port);
});
