var express=require('express'),
    api=require('./api'),
    app=express(),
    port=4300;

api(app);

app.listen(port,function(){
  console.log('Server listening to port '+port);
});
