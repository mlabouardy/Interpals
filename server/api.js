var mongoose=require('mongoose');
var User=require('./models/user');
var config=require('./config');
var jwt = require('jsonwebtoken');

mongoose.connect(config.database,function(err){
  if(err) throw err;
  console.log('MongoDB connected ...');
});

module.exports=function(app, privateRoutes){

  /************* Private Routes *********/

  privateRoutes.get('/users',function(req,res){
    User.find({},function(err,users){
      res.send(users);
    });
  });

  privateRoutes.get('/logout',function(req,res){
    res.status(200).send();
  });

  app.use('/api',function(req,res,next){
    var token = req.body.access_token || req.query.access_token || req.headers['x-access-token'];
    if (token) {
      jwt.verify(token, config.secret, function(err, decoded) {
        if (err) {
          res.send({ success: false, message: 'Failed to authenticate token.' });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      res.status(403).send({
        success: false,
        message: 'No token provided.'
      });
    }
  });

  app.use('/api', privateRoutes);

  /************* Public Routes *********/

  app.post('/register',function(req,res){
    var user=new User(req.body);
    user.save(function(err){
      if(err) throw err;
      res.status(200).send();
    })
  });

  app.post('/login',function(req,res){
    var email=req.body.email;
    var password=req.body.password;
    User.findOne({email:email, password:password},function(err,user){
      if(err)
      throw err;
      if(user==null)
      res.status(400).send();
      else {
        var token = jwt.sign(user, config.secret, {
          expiresIn: 60*60*24
        });
        res.status(200).send({token:token});
      }
    });
  });

}
