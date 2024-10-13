import { Link } from "react-router-dom";
import profile from "/profile1.png";
import { useState } from "react";

export default function Home({
  taskArray,
  setTaskArray,
  completeTaskArray,
  setCompleteTaskArray,
}) {
  const [pendingTaskArray, setPendingTaskArray] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  function DeleteTask(index) {
    const removedTasks = taskArray.filter((element, i) => i !== index);
    setTaskArray(removedTasks);
  }
  function DeleteCompletedTask(index) {
    const removedCompletedTasks = completeTaskArray.filter(
      (element, i) => i !== index
    );
    setCompleteTaskArray(removedCompletedTasks);
  }
  function DeletePendingTask(index) {
    const removedPendingTasks = pendingTaskArray.filter(
      (element, i) => i !== index
    );
    setPendingTaskArray(removedPendingTasks);
  }

  function handleCompleteCheckbox(index) {
    const addCompleteTask = taskArray[index];
    setCompleteTaskArray([...completeTaskArray, addCompleteTask]);
    DeleteTask(index);
  }
  function handlePendingCheckbox(index) {
    const addPendingTask = taskArray[index];
    // console.log("asss");
    console.log(addPendingTask);
    console.log(pendingTaskArray);
    setPendingTaskArray([...pendingTaskArray, addPendingTask]);
    DeleteTask(index);
  }
  function handleAddedCompleteTask(index) {
    const pushedTask = pendingTaskArray[index];
    setCompleteTaskArray([...completeTaskArray, pushedTask]);
    DeletePendingTask(index);
  }
  function handlePushToPending(index) {
    const pushedTask = completeTaskArray[index];
    setPendingTaskArray([...pendingTaskArray, pushedTask]);
    DeleteCompletedTask(index);
  }

  // display the output
  return (
    <main>
      <div className="home-container">
        <div className="profile">
          <div className="greetings">
            <span style={{ color: "#fed36a" }}>Welcome Back!</span>
            <br />
            <span style={{ color: "#ffffff", fontSize: "29px" }}>
              Psammyst Prime
            </span>
          </div>
          <img src={profile} alt="profile picture" className="profile-pic" />
        </div>

        {/* Search bar */}
        <div className="search">
          <input
            type="search"
            name=""
            id="search"
            style={{ minHeight: "42px", minWidth: "260px" }}
          />
          <button>Search</button>
        </div>

        {/* Completed Tasks */}
        <div id="complete">
          <div className="complete">
            <h3
              style={{
                color: "rgb(31, 216, 31)",
                fontSize: "35px",
                textDecoration: "underline",
              }}
            >
              Completed Tasks
            </h3>
          </div>
          {completeTaskArray == "" ? (
            <p style={{ color: "red", fontSize: "25px" }}>No completed tasks</p>
          ) : (
            <ul>
              {completeTaskArray.map((completedtask, index) => (
                <li key={index}>
                  <h1 style={{ color: "#ffffff" }}>{completedtask.taskName}</h1>
                  <p>{completedtask.taskDetails}</p>
                  <p>Due on</p>
                  <p>{`${completedtask.taskDate} at ${completedtask.taskTime}`}</p>
                  <button
                    className="delete"
                    onClick={() => DeleteCompletedTask(index)}
                  >
                    Delete
                  </button>{" "}
                  <button
                    className="push"
                    onClick={() => handlePushToPending(index)}
                  >
                    Mark Pending
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Pending Tasks */}
        <div id="started">
          <div className="started">
            <h3
              style={{
                color: "rgb(240, 137, 19)",
                fontSize: "35px",
                textDecoration: "underline",
              }}
            >
              Pending Tasks
            </h3>
          </div>
          {pendingTaskArray == "" ? (
            <p style={{ color: "red", fontSize: "25px" }}>No pending tasks</p>
          ) : (
            <ul>
              {pendingTaskArray.map((pendingtask, index) => (
                <li key={index}>
                  <h1 style={{ color: "#ffffff" }}>{pendingtask.taskName}</h1>
                  <p>{pendingtask.taskDetails}</p>
                  <p>Due on</p>
                  <p>{`${pendingtask.taskDate} at ${pendingtask.taskTime}`}</p>
                  <button
                    className="delete"
                    onClick={() => DeletePendingTask(index)}
                  >
                    Delete
                  </button>{" "}
                  <button
                    className="push"
                    onClick={() => handleAddedCompleteTask(index)}
                  >
                    Mark Complete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Created Tasks */}
        <div id="created">
          <div className="created">
            <h3
              style={{
                color: "#ffffff",
                fontSize: "35px",
                textDecoration: "underline",
              }}
            >
              Created Tasks
            </h3>
          </div>
          {taskArray == "" ? (
            <p style={{ color: "red", fontSize: "25px" }}>No Created tasks</p>
          ) : (
            <p>The tasks below require your attention</p>
          )}
        </div>

        {taskArray.length == 0 ? (
          <p>Add a New Task</p>
        ) : (
          <ul>
            {taskArray.map((item, index) => (
              <li key={index}>
                <h2>{item.taskName}</h2>
                <p>{item.taskDetails}</p>
                <p>Due on</p>
                <p>{`${item.taskDate} at ${item.taskTime}`}</p>
                <div className="checkboxSelection">
                  <p
                    style={{
                      color: "#71e43c",
                      fontWeight: "bolder",
                      fontSize: "20px",
                    }}
                  >
                    Completed?{" "}
                    <input
                      type="checkbox"
                      name="comp"
                      id="comp"
                      checked={isChecked}
                      onClick={() => handleCompleteCheckbox(index)}
                    />
                  </p>
                  <p
                    style={{
                      color: "#fed36a",
                      fontWeight: "bolder",
                      fontSize: "20px",
                    }}
                  >
                    Pending?{" "}
                    <input
                      type="checkbox"
                      name="pend"
                      id="pend"
                      checked={isChecked}
                      onClick={() => handlePendingCheckbox(index)}
                    />
                  </p>
                </div>
                <button className="delete" onClick={() => DeleteTask(index)}>
                  Delete
                </button>
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
