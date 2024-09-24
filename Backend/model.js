const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://aryapradeep212:Arya@cluster0.zbd2evl.mongodb.net/?retryWrites=true&w=majority");

let Schema = mongoose.Schema;

const adminSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required:true
  }

});

//Schema Creation of User Details
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  sname: String,
  pname: String,
  age: Number,
  emailId: {
    type: String,
    unique: true,
  },
  education: String,
  address: String,
  phno: Number,
  terms: Boolean,
  password: String,
  confirmPassword: String,
});

//Schema Creation of Book Details
const bookSchema = new Schema({
  bookno: {
    type: Number,
    unique: true,
    required: true,
  },
  bookname: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    unique: true,
    required: true,
  },
  publicationYear: {
    type: String,
    required: true,
  },
  price:{
    type:Number,
    required:true
  },
  description: String,
  status: {
    type: String,
    enum: ["Available", "Rented", "Sold"],
    default: "Available",
  },
});

const userModel = mongoose.model("user", userSchema);
const bookModel = mongoose.model("books", bookSchema);
const adminModel = mongoose.model("admin", adminSchema);

module.exports = {
  userModel: userModel,
  bookModel: bookModel,
  adminModel: adminModel,
}