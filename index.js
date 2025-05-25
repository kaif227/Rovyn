const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const User = require('./models/user');


const port =8080;

main()
.then((res)=>[
    console.log("Connected to MongoDB"),
]).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/rovyn');
}



app.use(methodOverride('_method'))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));





//home route
app.get("/home",async (req,res)=>{
    const users = await User.find();
    res.render("home",{users}); 
});

//Create route
app.get("/home/create",(req,res)=>{
    res.render("new.ejs");
});

app.post("/home/create",async (req,res)=>{
    let {name,email,phone,password} = req.body;
    const user  = new User({name,email,phone,password});
    await user.save();
    res.redirect("/home");
})

//Update route

app.get("/home/edit/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.render("edit.ejs", { user });
});


app.put("/home/edit/:id",async (req,res)=>{
    const {id} = req.params;
    const{name,email,phone} = req.body;
    let updatedUser = await User.findByIdAndUpdate(id,{name,email,phone});
    res.redirect("/home");

});

//Delete route
app.delete("/home/delete/:id",async (req,res)=>{
    const {id} = req.params;
     const delUser = await User.findByIdAndDelete(id);
    res.redirect("/home");
});

//register route
app.get("/register",(req,res)=>{
    res.render("register.ejs");    
});

app.post("/register",async (req,res)=>{
    const {name,email,phone,password} = req.body;
    const newUser = new User({name,email,phone,password});
    await newUser.save();
    res.redirect("/login");
});

//login route
app.get("/login",(req,res)=>{
    res.render("login.ejs");
});
app.post("/login",async (req,res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email, password});
    if(user){
        res.redirect("/main");
        console.log("user is",user)
        console.log("email and password is :",{email, password});
    } else {
        res.render("login.ejs", {error: "Invalid email or password"});
    }   
}
);


//main route
app.get("/main",(req,res)=>{
    res.render("main.ejs");
});

//about route
app.get("/main/about",(req,res)=>{
    res.render("about.ejs");
});

//contact route
app.get("/main/about/contact",(req,res)=>{
    res.render("contact.ejs");
});
app.get("/tickets",(req,res)=>{
    res.render("not.ejs");
});
//404 rout




app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    
})