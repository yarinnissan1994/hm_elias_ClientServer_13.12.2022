import React, { useState } from "react";
import { addStudent } from "../../services/students.services";
import { ToastContainer, toast } from "react-toastify";

export const InsertStudent = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  const notify_success = () =>
    toast.success("Student has been added", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notify_error = () =>
    toast.error("error: Make sure to fill in all the fields", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = { firstName, lastName, age };
    if (firstName === "" || lastName === "" || age === "") {
      notify_error();
    } else {
      notify_success();
      addStudent(student);
    }
  };

  return (
    <form className="from" onSubmit={handleSubmit}>
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">
          First Name
        </span>
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">
          Last Name
        </span>
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">
          Age
        </span>
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <button type="submit" class="btn btn-success">
        Add Student
      </button>
      <ToastContainer />
    </form>
  );
};
