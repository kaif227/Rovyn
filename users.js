const mongoose = require('mongoose');
const User = require('./models/user');

main()
.then((res)=>[
    console.log("Connected to MongoDB"),
]).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/rovyn');
}


const users = [
  {
    name: "Aarav Sharma",
    email: "aarav.sharma@.com",
    password: "Aarav@123",
    phone: "+91-9876543210"
  },
  {
    name: "Isha Verma",
    email: "isha.verma@.com",
    password: "Isha#2024",
    phone: "+91-8765432109"
  },
  {
    name: "Rahul Patel",
    email: "rahul.patel@.com",
    password: "Patel@321",
    phone: "+91-9123456780"
  },
  {
    name: "Priya Mehta",
    email: "priya.mehta@.com",
    password: "Priya@987",
    phone: "+91-9988776655"
  },
  {
    name: "Vivaan Reddy",
    email: "vivaan.reddy@.com",
    password: "VivaanR2024",
    phone: "+91-8899776655"
  },
  {
    name: "Sneha Nair",
    email: "sneha.nair@.com",
    password: "Sneha#456",
    phone: "+91-9001122334"
  },
  {
    name: "Karan Singh",
    email: "karan.singh@.com",
    password: "Karan$Singh1",
    phone: "+91-9988123456"
  },
  {
    name: "Ananya Joshi",
    email: "ananya.joshi@.com",
    password: "Ananya@999",
    phone: "+91-7012345678"
  },
  {
    name: "Rohan Das",
    email: "rohan.das@.com",
    password: "DasRohan12",
    phone: "+91-7788990011"
  },
  {
    name: "Meera Kulkarni",
    email: "meera.kulkarni@.com",
    password: "KulkarniMeera!",
    phone: "+91-8877665544"
  },
  {
    name: "Aditya Gupta",
    email: "aditya.gupta@.com",
    password: "Gupta@1234",
    phone: "+91-9345678901"
  },
  {
    name: "Pooja Bhatia",
    email: "pooja.bhatia@.com",
    password: "Pooja@9999",
    phone: "+91-9988774411"
  },
  {
    name: "Manav Iyer",
    email: "manav.iyer@.com",
    password: "IyerManav22",
    phone: "+91-9112233445"
  },
  {
    name: "Ritika Kapoor",
    email: "ritika.kapoor@.com",
    password: "RitikaKap!24",
    phone: "+91-8888445566"
  },
  {
    name: "Siddharth Chauhan",
    email: "siddharth.chauhan@.com",
    password: "Sid@2025",
    phone: "+91-9009988776"
  },
  {
    name: "Nisha Rao",
    email: "nisha.rao@.com",
    password: "NishaRao##1",
    phone: "+91-7223344556"
  },
  {
    name: "Arjun Pillai",
    email: "arjun.pillai@.com",
    password: "PillaiArj77",
    phone: "+91-7901234567"
  },
  {
    name: "Divya Malhotra",
    email: "divya.malhotra@.com",
    password: "DivyaM123",
    phone: "+91-9090901234"
  },
  {
    name: "Yash Thakur",
    email: "yash.thakur@.com",
    password: "Thakur!Yash",
    phone: "+91-8001234567"
  },
  {
    name: "Tanvi Deshmukh",
    email: "tanvi.deshmukh@.com",
    password: "Tanvi@001",
    phone: "+91-9333445566"
  }
]

User.insertMany(users)
.then((res)=>{
    console.log("Data inserted successfully");
}).catch(err => console.log(err));



  
