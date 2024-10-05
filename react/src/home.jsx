import { Link } from "react-router-dom";
import profile from "/profile1.png";
import { useState } from "react";

export default function Home({ taskArray, setTaskArray }) {
  function DeleteTask(index) {
    const removedTasks = taskArray.filter((element, i) => i !== index);
    setTaskArray(removedTasks);
  }
  const [completeTaskArray, setCompleteTaskArray] = useState(["das"]);
  function handleCheckbox(index) {
    const newItem = taskArray[index].taskName;
    setCompleteTaskArray([...completeTaskArray, newItem]);
    console.log(newItem);
    // console.log(index);
    // console.log("completed");
    DeleteTask(index);
  }
  // display the output
  return (
    <main>
      <div className="home-container">
        <div className="profile">
          <div className="greetings">
            <span>Welcome Back</span>
            <h2>Psammyst Prime</h2>
          </div>
          <img src={profile} alt="profile picture" className="profile-pic" />
        </div>
        {/* Search bar */}
        <div className="search">
          <input type="search" name="" id="search" />
          <button>S</button>
        </div>
        {/* Completed Tasks */}
        <div id="complete">
          <div className="complete">
            <h3 style={{ color: "green", textDecoration: "underline" }}>
              Completed Tasks
            </h3>
            <button>See all</button>
          </div>
          {completeTaskArray == "" ? (
            <p style={{ color: "red", fontSize: "15px" }}>No completed tasks</p>
          ) : (
            <ul>
              {completeTaskArray.map((comptask, index) => (
                <p key={index}>{comptask}</p>
              ))}
            </ul>
          )}
        </div>
        {/* Started Tasks */}
        <div id="start">
          <div className="start">
            <h3 style={{ color: "green", textDecoration: "underline" }}>
              Started Tasks
            </h3>
            <button>See all</button>
          </div>
          {completeTaskArray == "" ? (
            <p style={{ color: "red", fontSize: "15px" }}>No started tasks</p>
          ) : (
            <p>filled</p>
          )}
        </div>
        {/* Pending Tasks */}
        <div id="pending">
          <div className="pending">
            <h3 style={{ color: "green", textDecoration: "underline" }}>
              Pending Tasks
            </h3>
            <button>See all</button>
          </div>
          {completeTaskArray == "" ? (
            <p style={{ color: "red", fontSize: "15px" }}>No pending tasks</p>
          ) : (
            <p>filled</p>
          )}
        </div>

        {taskArray.length === 0 ? (
          <p>Add a New Task</p>
        ) : (
          <ul>
            {taskArray.map((item, index) => (
              <li key={index}>
                <h1>{item.taskName}</h1>
                <p>
                  completed{" "}
                  <input
                    type="checkbox"
                    name="comp"
                    id="comp"
                    onClick={() => handleCheckbox(index)}
                  />
                </p>
                <button onClick={() => DeleteTask(index)}>delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Link to="/new">
        <button>New Task</button>
      </Link>
    </main>
  );
}

//create form for user input
export function NewTask({ taskArray, setTaskArray }) {
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
    };
    console.log(taskObject);

    //push the task object to the task array for storage
    setTaskArray([...taskArray, taskObject]);
  }
  //Gives a notification for a successfull task addition
  // const [confirm, setConfirmation] = useState("");
  function confirmTask() {
    // return setConfirmation("task added");
  }
  return (
    <dialog>
      <h2>Create a New Task</h2>
      <form action="post" onSubmit={addTask}>
        <label htmlFor="title">Title </label>
        <input type="text" name="name" defaultValue={"sam"} />
        <label htmlFor="details">Details</label>
        <input type="text" name="details" defaultValue={"info"} />
        <label htmlFor="date">Date & Time</label>
        <input type="time" name="time" id="" defaultValue={"12:00:00"} />
        <input type="date" name="date" id="" defaultValue={"2024-03-01"} />
        <button type="submit" onClick={confirmTask}>
          Add
        </button>{" "}
        <Link to="/homepage">
          <button type="reset">Cancel</button>
        </Link>
        <span>{"confirm"}</span>
      </form>
    </dialog>
  );
}
