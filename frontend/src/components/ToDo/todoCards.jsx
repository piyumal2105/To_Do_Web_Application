import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";

const ToDoCards = ({ title, body }) => {
  return (
    <div className="p-3 todo-card">
      <div>
        <h4>{title}</h4>
        <p className="todo-card-p">{body.split("", 77)}...</p>
      </div>
      <div className="d-flex justify-content-around">
        <div className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1">
          <GrDocumentUpdate className="card-icon-update" /> Update
        </div>
        <div className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1 text-danger">
          <AiFillDelete className="card-icon-delete" /> Delete
        </div>
      </div>
    </div>
  );
};

export default ToDoCards;
