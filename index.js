import express from 'express'; 
import mongoose from 'mongoose';
import Student from './models/students.js';
import methodOverride from "method-override";


const app = express();
const port = 8080;
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
    .then(() => console.log('Connected to MongoDB'))

    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Student'); 
}
//index.routes 
app.get("/students", async (req, res) => {
    const students = await Student.find();
    res.render("index.ejs", { students });
});



app.get("/students/:id/edit", async (req, res) => {
    const { id } = req.params;
    const student = await Student.findById(id);
    res.render("edit.ejs", { student });
});

app.put("/students/:id", async (req, res) => {
    const { id } = req.params;

    await Student.findByIdAndUpdate(
        id,
        req.body.student,
        { runValidators: true }
    );

    res.redirect("/students");
});

//new route
app.get("/students/new", (req, res) => {
    res.render("new.ejs");
});


app.post("/students", async (req, res) => {
    try {
        console.log(req.body);

        const student = new Student(req.body.student);

        await student.save();

        res.redirect("/students");
    } catch (err) {
        console.log(err);      // Important
        res.send(err);         // Show actual error
    }
});

//delete route 
app.delete("/students/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const deletedStudent = await Student.findByIdAndDelete(id);

        if (!deletedStudent) {
            return res.status(404).send("Student not found");
        }

        res.redirect("/students");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error deleting student");
    }
});





app.get('/', (req, res) => {
    res.redirect('/students');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});