import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";

const TodoCard = ({ title, body, dueDate, id, delid, display }) => {
  const [status, setStatus] = useState("In Progress"); // Initially set to "In Progress"

  const shortenedBody = body.length > 27 ? body.substring(0, 27) + "..." : body;

  const handleDeleteClick = () => {
    // Handle delete functionality
    delid(id);
  };

  const handleStatusChange = (e) => {
    const isChecked = e.target.checked;
    setStatus(isChecked ? "Completed" : "In Progress"); // If checked, set status to "Completed", otherwise set to "In Progress"
  };

  const getDueDateText = () => {
    switch (dueDate) {
      case 0:
        return "Today";
      case 1:
        return "Tomorrow";
      case 2:
        return "Day after Tomorrow";
      case 3:
      case 4:
        return "3-4 days";
      default:
        return "5+ days";
    }
  };

  return (
    <div className="p-4 todo-card">
      <div>
        <h5>{title}</h5>
        <p className="todo-card-p">{shortenedBody}...</p>
      </div>
      <div>
        <p className="some">Due Date: {getDueDateText()}</p>
        <p className="some">Status: {status}</p>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <input
            type="checkbox"
            checked={status === "Completed"}
            onChange={handleStatusChange}
          />
          <label className="ml-2">Mark as Done</label>
        </div>
        <div className="d-flex ">
          <div className="button" onClick={() => {
            display("block");
          }}>
            <GrDocumentUpdate className="card-icons " />
            Update
          </div>
          <div className="button" onClick={handleDeleteClick}>
            <MdDelete className="card-icons del" />
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
