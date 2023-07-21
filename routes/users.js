const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/pracpracprac");

const userSchema = mongoose.Schema(
  {
    name:String,
    email:String,
    phone:Number,
    Course:String,
  
    pwd:String

  }
)
 module.exports=mongoose.model("user",userSchema);