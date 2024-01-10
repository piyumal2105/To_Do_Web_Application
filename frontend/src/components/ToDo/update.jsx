import React from "react";

const Update = ({ display }) => {
  return (
    <div className="p-5 d-flex justify-content-center align-items-center flex-column update">
      <br />
      <h3>Update Your Task</h3>
      <br />
      <br />
      <input type="text" className="todo-update-input" />
      <br />
      <textarea className="todo-update-input" />
      <br />
      <div>
        <button className="btn btn-dark my-4">Update</button>
        <button
          className="btn btn-danger my-4 mx-4"
          onClick={() => {
            display("none");
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Update;
