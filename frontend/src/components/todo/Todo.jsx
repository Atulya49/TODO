import React, { useState } from "react";
import "./todo.css";
import TodoCard from "./TodoCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./Update";
import { UseSelector } from "react-redux";
import { UseDispatch } from "react-redux";
import { authActions } from "../../store/Index";
import axios from "axios";
let id = sessionStorage.getItem("id");
const Todo = () => {
  const [inputs, setInputs] = useState({ title: "", body: "", dueDate: 0 });
  const [array, setArray] = useState([]);

  const show = () => {
    document.getElementById("textarea").style.display = "block";
    document.getElementById("select").style.display = "block";
  };

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const sumbit = async () => {
    if (inputs.title === "" || inputs.body === "") {
      toast.error("Title or Description cant be empty");
    } else {
      if (id) {
        await axios
          .post("http://localhost:1000/api/v2/addTask", {
            title: inputs.title,
            body: inputs.body,
            id: id,
          })
          .then((response) => {
            console.log(response);
          });
      }
      setArray([...array, inputs]);
      setInputs({ title: "", body: "", dueDate: 0 }); // Reset the inputs after submission
      toast.success("Your task is added");
      toast.error("Your task not saved! please signup");
    }
  };
  const del = (id) => {
    array.splice(id, 1);
    setArray([...array]);
  };
  const dis = (value) => {
    console.log(value);
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
              placeholder="TITLE"
              className="my-2 p-2 todo-inputs"
              onClick={show}
              name="title"
              value={inputs.title}
              onChange={change}
            />
            <textarea
              id="textarea"
              type="text"
              placeholder="DESCRIPTION"
              className="p-2 todo-inputs"
              name="body"
              value={inputs.body}
              onChange={change}
            />
            <select
              id="select"
              className="my-2 p-2 todo-inputs"
              name="dueDate"
              value={inputs.dueDate}
              onChange={change}
            >
              <option value="0">Today</option>
              <option value="1">Tomorrow</option>
              <option value="2">Day after Tomorrow</option>
              <option value="3">3-4 days</option>
              <option value="4">5+ days</option>
            </select>
          </div>
          <div className="w-50 d-flex justify-content-end">
            <button className="btn-todo" onClick={sumbit}>
              ADD
            </button>
          </div>
        </div>
        <div className="todo-body">
          <div className="container-fluid">
            <div className="row">
              {array.map((item, index) => (
                <div
                  className="col-lg-3 col-10 mx-5 my-2 individual"
                  key={index}
                >
                  <TodoCard
                    title={item.title}
                    body={item.body}
                    dueDate={item.dueDate}
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
      <div className="todo-update bg-success" id="todo-update">
        <div className="container update">
          <Update display={dis} />
        </div>
      </div>
    </>
  );
};

export default Todo;
