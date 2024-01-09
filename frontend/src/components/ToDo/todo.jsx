import React from "react";
import { useState } from "react";
import "./todo.css";
import ToDoCards from "./todoCards";

const Todo = () => {
  const [Inputs, setInputs] = useState({ title: "", body: "" });
  const [Array, setArray] = useState([]);
  const show = () => {
    document.getElementById("textarea").style.display = "block";
  };
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const submit = () => {
    setArray([...Array, Inputs]);
    setInputs({ title: "", body: "" });
  };
  return (
    <div className="todo">
      <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column">
        <div className="d-flex flex-column todo-inputs-div w-50 p-1">
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="my-2 p-2 todo-inputs"
            onClick={show}
            onChange={change}
            value={Inputs.title}
          />
          <textarea
            id="textarea"
            type="text"
            placeholder="Body"
            name="body"
            className="p-2 todo-inputs"
            style={{ borderTop: "1px solid black" }}
            onChange={change}
            value={Inputs.body}
          />
        </div>
        <div className="w-50 d-flex justify-content-center my-4">
          <button className="home-btn" onClick={submit}>
            Add
          </button>
        </div>
      </div>

      <div className="todo-body">
        <div className="container-fluid">
          <div className="row">
            {Array &&
              Array.map((item, index) => (
                <div className="col-lg-3 col-10 mx-5 my-2">
                  <ToDoCards title={item.title} body={item.body} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
