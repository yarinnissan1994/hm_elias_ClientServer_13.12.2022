import React, { useEffect, useState } from "react";
import { getStudents } from "../../services/students.services";
import { StudentsRow } from "../StudentsRow/studentsRow.component";
import "./student.css";

export const StudentsList = (props) => {
  const [studentsList, setStudentsList] = useState([]);

  const initComponent = async () => {
    let Students = await getStudents();
    setStudentsList(Students);
  };

  useEffect(() => {
    initComponent();
  }, []);

  return (
    <div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {studentsList.length > 0 ? (
            studentsList.map((s) => {
              let { firstName, lastName, age } = s;
              return (
                <StudentsRow
                  firstName={firstName}
                  lastName={lastName}
                  age={age}
                  init={initComponent}
                ></StudentsRow>
              );
            })
          ) : (
            <tr>
              <td colSpan={4}>
                <div class="text-center">
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
