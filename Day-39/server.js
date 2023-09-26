const express = require("express");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

require("dotenv").config();

const Mentor = require("./models/Mentor");

const Student = require("./models/Student");

const app = express();

const PORT = process.env.PORT;

const DB_URL = process.env.DB_URL;

app.use(bodyParser.json());

mongoose
.connect(DB_URL,{})
.then(() => console.log('connect to mongoDB'))
.catch((err) => console.log('could not connect to mongoDB',err));

app.post('/mentor',async(req,res)=>{
    try{
        const mentor = new Mentor(req.body);
        await mentor.save();
        res.status(201).send(mentor);
    }catch(error){
        res.send(400).send(error);
    }
});

app.post('/student',async(req,res)=>{
    try{
        const student = new Student(req.body);
        await student.save();
        res.status(201).send(student);
    }catch(error){
        res.send(400).send(error);
    }
});


app.post("/mentor/:mentorId/assign", async (req, res) => {
    try {
      const mentor = await Mentor.findById(req.params.mentorId);
      const students = await Student.find({ _id: { $in: req.body.students } });
  
      students.forEach((student) => {
        student.cMentor = mentor._id;
        student.save();
      });
  
      mentor.students = [
        ...mentor.students,
        ...students.map((student) => student._id),
      ];
      await mentor.save();
      res.send(mentor);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  app.put("/student/:studentId/assignMentor/:mentorId", async (req, res) => {
    try {
      const mentor = await Mentor.findById(req.params.mentorId);
      const student = await Student.findById(req.params.studentId);
  
      if (student.cMentor) {
        student.pMentor.push(student.cMentor);
      }
  
      student.cMentor = mentor._id;
      await student.save();
      res.send(student);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  app.get("/mentor/:mentorId/students", async (req, res) => {
    try {
      const mentor = await Mentor.findById(req.params.mentorId).populate(
        "students"
      );
      res.send(mentor);
    } catch (error) {
      res.status(400).send(error);
    }
  });


app.listen(PORT, () => {
    console.log("Server is successfully running on port : ",PORT);
});