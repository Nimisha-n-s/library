//importing
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const mongoose = require('mongoose');
const userModel = require('./userModel');
const bookModel = require('./bookModel');
const adminModel = require('./adminModel');

// App Initialization
const JWT_SECRET = "AryaPradeep212";
const port = 9453;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//MongoDB Connection
mongoose.connect('mongodb+srv://aryapradeep212:Arya@cluster0.zbd2evl.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

  // user registration
app.post('/register', async (req, res) => {
  const { firstName, username, place, age, email, education, contactDetails, phone, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await userModel.findOne({ username });
    if (oldUser) {
      return res.send({ error: "User Exists" });
    }
    await userModel.create({
      firstName,
      username,
      place,
      age,
      email,
      education,
      contactDetails,
      phone,
      password: hashedPassword,
    });
    return res.send({ status: 'ok' });
  } catch (error) {
    console.log(error);
    res.send({ status: 'error' });
  }
});

//book view
app.get('/viewbook', async (req, res) => {
  try {
    const data = await bookModel.find();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.send({ status: 'error' });
  }
});

//user view
app.get('/viewuser', async (req, res) => {
  try {
    const data = await userModel.find();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.send({ status: 'error' });
  }
});

//book details fetch
app.get("/singlebook/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await bookModel.findOne({ _id: id });
    res.send(data);
  } catch (error) {
    console.error(error);
    res.send("Unable to fetch data");
  }
});

// user login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findOne({ username });
    if (!user) {
      return res.send({ error: "User not found" });
    }
    if(user.blocked){
      res.send({status:"User Blocked"})
      return;
    }
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({id: user._id}, JWT_SECRET,{
        expiresIn:"1w"
      });
      if (res.status(201)) {
        return res.json({ status: "ok", data: token, user: user });
      } else {
        return res.json({ error: "error" });
      }
    }
    res.json({ status: "error", error: "Invalid Password" });
  } catch (error) {
    console.log(error);
    res.send({ status: 'error' });
  }
});


//admin login
app.post("/adminlogin", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await adminModel.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    if (password !== user.password) {
      return res.status(401).json({ error: "Invalid Password" });
    }
    // Generate and send a JWT token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: "1w"
    });
    res.status(200).json({ status: "ok", data: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//routing
app.post("/homepage",async(req,res)=>{
  const{token}=req.body
  try{
    const user=jwt.verify(token,JWT_SECRET,(err,res)=>{
      console.log(err),"error";
      console.log(res,"result");
    })
    const Username=user.username
    userModel.findOne({username:Username})
    .then((data)=>{
      res.send({status:"ok",data:data})
    })
    .catch((error)=>{
      res.send({status:"error",data:error})
    })
  }catch(error){
  }
})

//book details fetch
app.get("/singlebook/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await bookModel.findOne({ _id: id });
    res.send(data);
  } catch (error) {
    console.error(error);
    res.send("Unable to fetch data");
  }
});

//user details fetch
app.get("/singleuser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await userModel.findOne({ _id: id });
    res.send(data);
  } catch (error) {
    console.error(error);
    res.send("Unable to fetch data");
  }
});

//book details post
app.post('/createbook', async (req, res) => {
  console.log(req.body)
  try {
    console.log(req.body);
    const result = new bookModel(req.body);
    await result.save();
    res.send("Data Added");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while saving the data.");
  }
});

//admin add
app.post('/createadmin', async (req, res) => {
  try {
    console.log(req.body);
    const result = new adminModel(req.body);
    await result.save();
    res.send("Data Added");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while saving the data.");
  }
});

//delete book
app.delete('/delete/:id',async(req,res)=>{
  var id=req.params.id
  await bookModel.findByIdAndDelete(id)
  res.send("Deleted")
})

//delete user
app.delete('/deleteuser/:id',async(req,res)=>{
  var id=req.params.id
  await userModel.findByIdAndDelete(id)
  res.send("Deleted")
})

//update book
app.put('/update/:id',async(req,res)=>{
  let id=req.params.id
  var result=await bookModel.findByIdAndUpdate(id,req.body)
  res.send("Updated")
})

//update book
app.put('/update/:id',async(req,res)=>{
  let id=req.params.id
  var result=await userModel.findByIdAndUpdate(id,req.body)
  res.send("Updated")
})

app.put('/blockuser/:id', async (req, res) => {
  var id = req.params.id; // Fix: Corrected variable assignment
  var user = await userModel.findById(id);
  if (!user) {
    return res.status(404).send("User not found");
  }
  user.blocked = true;
  await user.save();
  res.send("Blocked");
});

//Rent status
app.post("/rent", async (req, res) => {
  const { bookId} = req.body;
  await bookModel.findOneAndUpdate({ _id:bookId}, {status:"Not Available"});
  res.send("Borrowed");
})

// Port Checking
app.listen(port, () => {
  console.log('App listening on port 9453');
});
