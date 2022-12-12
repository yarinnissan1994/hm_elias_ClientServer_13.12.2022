import express, { Request, Response } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { arrayOfStudents } from "./DB/Students";
import { Student } from "./DB/models/Student";

let data = arrayOfStudents;

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.get("/", function (req: Request, res: Response) {
  res.send("Hello World");
});

app.get("/api/students", function (req: Request, res: Response) {
  let Students = data;
  res.send(Students);
});

app.post("/api/students", function (req: Request, res: Response) {
  let student: Student = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
  };

  data.push(student);

  res.send(student);
});

app.delete("/api/students/:firstName", function (req: Request, res: Response) {
  let firstName = req.params.firstName;
  let filteredData = data.filter((s) => s.firstName !== firstName);
  data = filteredData;
  res.send();
});

app.listen(process.env.PORT);
