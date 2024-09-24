//Importing
var express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const { userModel, bookModel, adminModel } = require('./model');

//App Initialization
var app = express();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//Admin post
app.post('/createadmin',(req,res)=>{
  console.log(req.body)
  var result=new adminModel(req.body)//data passing
  result.save()
  res.send("Data Added")
})

//User Details Get
app.get('/adminview', async (req, res) => {
  var data = await adminModel.find();
  res.json(data);
});

//User Details Get
app.get('/viewuser', async (req, res) => {
  var data = await userModel.find();
  res.json(data);
});

//User Details Delete
app.delete('/deleteuser/:id', async (req, res) => {
  var id = req.params.id;
  await userModel.findByIdAndDelete(id);
  res.send("Deleted");
});

//User Details Update
app.put('/updateuser/:id', async (req, res) => {
  let id = req.params.id;
  var result = await userModel.findByIdAndUpdate(id, req.body);
  res.send("Updated");
});

//Book Details Create
app.post('/createbookAdmin',(req,res)=>{
    console.log(req.body)
    var result=new bookModel(req.body)//data passing
    result.save()
    res.send("Data Added")
})

//Book Details Get
app.get('/viewbookAdmin',async(req,res)=>{
    var data=await bookModel.find()
    res.json(data)
})

//Book Details Delete
app.delete('/deletebookAdmin/:id', async (req, res) => {
  var id = req.params.id;
  await bookModel.findByIdAndDelete(id);
  res.send("Deleted");
});

//Book Details Update
app.put('/updatebookAdmin/:id', async (req, res) => {
  let id = req.params.id;
  var result = await bookModel.findByIdAndUpdate(id, req.body);
  res.send("Updated");
});

//Port Checking
app.listen(8000, () => {
  console.log('App listening on port 8000');
});