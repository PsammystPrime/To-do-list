import { Link } from "react-router-dom";
import profile from "/profile1.png";
import { useState } from "react";

export default function Home({ taskArray, setTaskArray }) {
  const [completeTaskArray, setCompleteTaskArray] = useState([]);
  const [startedTaskArray, setStartedTaskArray] = useState([]);

  function DeleteTask(index) {
    const removedTasks = taskArray.filter((element, i) => i !== index);
    setTaskArray(removedTasks);
  }

  function handleCompleteCheckbox(index) {
    const addCompleteTask = taskArray[index];
    setCompleteTaskArray([...completeTaskArray, addCompleteTask]);
    DeleteTask(index);
  }
  function handleStartedCheckbox(index) {
    const addStartedTask = taskArray[index];
    setStartedTaskArray([...startedTaskArray, addStartedTask]);
    DeleteTask(index);
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
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Started Tasks */}
        <div id="started">
          <div className="started">
            <h3
              style={{
                color: "rgb(240, 137, 19)",
                fontSize: "35px",
                textDecoration: "underline",
              }}
            >
              Started Tasks
            </h3>
          </div>
          {completeTaskArray == "" ? (
            <p style={{ color: "red", fontSize: "25px" }}>No started tasks</p>
          ) : (
            <ul>
              {startedTaskArray.map((startedTask, index) => (
                <li key={index}>
                  <h1 style={{ color: "#ffffff" }}>{startedTask.taskName}</h1>
                  <p>{startedTask.taskDetails}</p>
                  <p>Due on</p>
                  <p>{`${startedTask.taskDate} at ${startedTask.taskTime}`}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Pending Tasks */}
        <div id="pending">
          <div className="pending">
            <h3
              style={{
                color: "#ffffff",
                fontSize: "35px",
                textDecoration: "underline",
              }}
            >
              Pending Tasks
            </h3>
          </div>
          {taskArray == "" ? (
            <p style={{ color: "red", fontSize: "25px" }}>No pending tasks</p>
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
                  <p style={{ color: "#71e43c" }}>
                    Completed?{" "}
                    <input
                      type="checkbox"
                      name="comp"
                      id="comp"
                      onClick={() => handleCompleteCheckbox(index)}
                    />
                  </p>
                  <p style={{ color: "#fed36a" }}>
                    Pending?{" "}
                    <input
                      type="checkbox"
                      name="pend"
                      id="pend"
                      onClick={() => handleStartedCheckbox(index)}
                    />
                  </p>
                </div>
                <button className="delete" onClick={() => DeleteTask(index)}>
                  delete
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
