import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";

NewTask.propTypes = {
  taskArray: PropTypes.string.isRequired,
  setTaskArray: PropTypes.string.isRequired,
  completeTaskArray: PropTypes.string.isRequired,
  setCompleteTaskArray: PropTypes.string.isRequired,
  pendingTaskArray: PropTypes.string.isRequired,
  setPendingTaskArray: PropTypes.string.isRequired,
};
//create form for user input
export default function NewTask({
  taskArray,
  setTaskArray,
  completeTaskArray,
  setCompleteTaskArray,
  pendingTaskArray,
  setPendingTaskArray,
}) {
  const [Cancel, setCancel] = useState("Cancel");
  const [buttonColor, setButtonColor] = useState("#1a1a1a");
  function addTask(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // work with the data as a plain object:
    const formJson = Object.fromEntries(formData.entries());

    // Create a task object to store the Taskdata.
    const taskObject = {
      taskName: formJson.name,
      taskDetails: formJson.details,
      taskTime: formJson.time,
      taskDate: formJson.date,
    };
    //retain items in the two arrays
    setCompleteTaskArray(completeTaskArray);
    setPendingTaskArray(pendingTaskArray);
    setTaskArray([...taskArray, taskObject]);
  }
  //Give a notification for a successfull task addition
  const [confirm, setConfirmation] = useState("");
  function confirmTask() {
    setCancel("Finish");
    setButtonColor("green");
    return setConfirmation(
      "Task added successfully. Add another Task or Finish to complete."
    );
  }
  return (
    <dialog>
      <h2>Create a New Task</h2>
      <form className="taskForm" action="post" onSubmit={addTask}>
        <label htmlFor="title">Title </label>
        <input type="text" name="name" defaultValue={"Task Name"} />
        <label htmlFor="details">Details</label>
        <input type="text" name="details" defaultValue={"More info"} />
        <label htmlFor="date">Date & Time</label>
        <input type="time" name="time" id="" defaultValue={"12:00:00"} />
        <input type="date" name="date" id="" defaultValue={"2024-03-01"} />
        <div className="dialogbtns">
          {" "}
          <button type="submit" onClick={confirmTask}>
            Add Task
          </button>
          <Link to="/homepage">
            <button
              className="reset"
              type="reset"
              style={{ backgroundColor: buttonColor }}
            >
              {Cancel}
            </button>
          </Link>
        </div>
        <span style={{ color: "#1a1a1a" }}>{confirm}</span>
      </form>
    </dialog>
  );
}
