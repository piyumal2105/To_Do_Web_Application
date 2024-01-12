import React, { useEffect } from "react";
import { useState } from "react";
import "./todo.css";
import ToDoCards from "./todoCards";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./update";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authAction } from "../../store";
let id = sessionStorage.getItem("id");

const Todo = () => {
  const [Inputs, setInputs] = useState({ title: "", body: "" });
  const [Array, setArray] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`http://localhost:1000/api/v2/getTask/${id}`)
        .then((response) => {
          setArray(response);
        });
    };
    fetch();
  }, []);
  const show = () => {
    document.getElementById("textarea").style.display = "block";
  };
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const submit = async () => {
    if (Inputs.title === "" || Inputs.body === "") {
      toast.error("Title Or Body Should Not Be Empty");
    } else {
      if (id) {
        await axios
          .post("http://localhost:1000/api/v2/addTask", {
            title: Inputs.title,
            body: Inputs.body,
            id: id,
          })
          .then((response) => {
            console.log(response);
          });
        setInputs({ title: "", body: "" });
        toast.success("Your Task Is Added");
      } else {
        setArray([...Array, Inputs]);
        setInputs({ title: "", body: "" });
        toast.success("Your Task Is Added");
        toast.error("Your Task Is Not Saved ! Please SignUp");
      }
    }
  };
  const del = (id) => {
    Array.splice(id, "1");
    setArray([...Array]);
  };
  const dis = (value) => {
    document.getElementById("todo-update").style.display = value;
  };

  return (
    <>
      <div className="todo">
        <ToastContainer />
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
                  <div className="col-lg-3 col-10 mx-5 my-2" key={index}>
                    <ToDoCards
                      title={item.title}
                      body={item.body}
                      id={index}
                      delid={del}
                      display={dis}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="todo-update" id="todo-update">
        <div className="container update">
          <Update display={dis} />
        </div>
      </div>
    </>
  );
};

export default Todo;
