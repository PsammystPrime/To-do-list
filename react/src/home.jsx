// export default function Home() {
//   return <p>homepage Coming Next</p>;
// }
import { Link } from "react-router-dom";
import profile from "/profile1.png";

export default function Home() {
  // create tasks objects
  function Task(key, title, status) {
    (this.title = title), (this.status = status), (this.key = key);
  }
  const task1 = new Task(0, "Real Estate Website Design", "complete");
  const task2 = new Task(1, "Finance Mobile App Design", "incomplete");
  const task3 = new Task(2, "To do list Analytics Integrations", "incomplete");
  // create array and store the tasks
  const taskArray = [];
  taskArray.push(task1, task2, task3);
  //map the itemsArray into an another array and the tags each item will take
  const listItems = taskArray.map((task) => (
    <li key={task.key}>
      <h3>{task.title}</h3>
      <span>Team Members</span>
      <p className="status">{task.status}</p>
    </li>
  ));

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
            <h4>Completed Tasks</h4>
            <button>See all</button>
          </div>
          <ul>{listItems}</ul>
        </div>

        {/* Ongoing Tasks */}
        {/* <div className="ongoing">
          <h4>Ongoing Projects</h4>
          <button>See all</button>
        </div>*/}
      </div>
      <Link to="/new">
        <button onClick={NewTask}>New Task</button>
      </Link>
    </main>
  );
}

export function NewTask() {
  // renders a modal for user input
  console.log("task added");
  return (
    <dialog open>
      <h2>Create a New Task</h2>
      <label htmlFor="title">Title</label>
      <input type="text" name="" id="" placeholder="Psammyst Prime" />
      <label htmlFor="details">Details</label>
      <input type="text" placeholder="lorem ipsum dolorem" />
      <label htmlFor="date">Date and Time</label>
      <input type="time" name="" id="" />
      <input type="date" name="" id="" />
      <button type="submit">Add</button>
      <button type="reset">Cancel</button>
    </dialog>
  );
}
