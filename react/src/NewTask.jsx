import { Link } from "react-router-dom";
import { useState } from "react";

//create form for user input
export default function NewTask({ taskArray, setTaskArray }) {
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
    // console.log(taskObject);

    //push the task object to the task array for storage
    setTaskArray([...taskArray, taskObject]);
  }
  //Gives a notification for a successfull task addition
  const [confirm, setConfirmation] = useState("");
  function confirmTask() {
    return setConfirmation("task added successfully");
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
            <button className="reset" type="reset">
              Cancel
            </button>
          </Link>
        </div>
        <span>{confirm}</span>
      </form>
    </dialog>
  );
}
