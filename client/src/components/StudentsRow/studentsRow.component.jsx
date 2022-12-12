import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { removeStudentByName } from "../../services/students.services";

export const StudentsRow = ({ firstName, lastName, age, init }) => {
  const handleDelete = async () => {
    await removeStudentByName(firstName);
    init();
    notify_delete();
  };

  const notify_delete = () =>
    toast.error("Student has been deleted", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{age}</td>
      <td>
        <button className="btn btn-danger" onClick={handleDelete}>
          Remove
        </button>
        <ToastContainer />
      </td>
    </tr>
  );
};
