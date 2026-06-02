import mongoose from 'mongoose'
import Student from "./models/students.js";
   
    main()
        .then(()=>{
            console.log("SuccessFul");
        })
        .catch((err)=>{
            console.log(err);
        })

        async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Student');

        } 


const allStudents = [
 
  {
    "name": "Aditya Kumar",
    "email": "aditya@gmail.com",
    "age": 22,
    "gender": "Male",
    "course": "MCA",
    "semester": 2,
    "address": "Bhopal, Madhya Pradesh",
    "phone": "9876543210"
  },
  {
    "name": "Priya Sharma",
    "email": "priya@gmail.com",
    "age": 21,
    "gender": "Female",
    "course": "BCA",
    "semester": 4,
    "address": "Indore, Madhya Pradesh",
    "phone": "9876543211"
  },
  {
    "name": "Rahul Verma",
    "email": "rahul@gmail.com",
    "age": 23,
    "gender": "Male",
    "course": "B.Tech",
    "semester": 6,
    "address": "Jabalpur, Madhya Pradesh",
    "phone": "9876543212"
  },
  {
    "name": "Sneha Gupta",
    "email": "sneha@gmail.com",
    "age": 20,
    "gender": "Female",
    "course": "B.Sc",
    "semester": 3,
    "address": "Gwalior, Madhya Pradesh",
    "phone": "9876543213"
  },
  {
    "name": "Aman Singh",
    "email": "aman@gmail.com",
    "age": 24,
    "gender": "Male",
    "course": "MBA",
    "semester": 1,
    "address": "Delhi",
    "phone": "9876543214"
  }

];

Student.insertMany(allStudents);
