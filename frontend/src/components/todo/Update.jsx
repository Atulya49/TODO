import React from "react";

const Update = ({display}) => {
  return (
    <div className="p-5 d-flex justify-content-center align-items-start flex-column update">
      <h3>Update Your Task</h3>
      <input type="text" className="todo-inputs my-4 w-100 p-3" />
      <textarea className="todo-inputs w-100 p-3" />
      <select className="form-select w-100 p-3 my-4">
        <option value="0">Today</option>
        <option value="1">Tomorrow</option>
        <option value="2">Day after Tomorrow</option>
        <option value="3">3-4 days</option>
        <option value="4">5+ days</option>
      </select>
      <div>
        <button className="btn btn-dark my-4">UPDATE</button>
        <button className="btn btn-dark my-4 mx-2 " onClick={()=>{
            display("none");
        }}>Close</button>
      </div>
    </div>
  );
};

export default Update;
