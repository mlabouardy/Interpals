var mongoose=require('mongoose');

var LocationSchema=mongoose.Schema({
    city:{
      type:String
    },
    country:{
      type:String
    }
});

var LanguageSchema=mongoose.Schema({
    name:{
      type:String
    },
    level:{
      type:String,
      enum:['Beginner', 'Intermediate', 'Advanced', 'Fluent', 'Native Speaker']
    }
});

var ProfileSchema=mongoose.Schema({
  picture:{
    type:String
  },
  country:{
    type:LocationSchema
  },
  languages:{
    type:[LanguageSchema]
  }
});

var UserSchema=mongoose.Schema({
    username:{
      type:String
    },
    email:{
      type:String
    },
    password:{
      type:String
    },
    sex:{
      type:String
    },
    profile:ProfileSchema
});

module.exports=mongoose.model('User', UserSchema);
