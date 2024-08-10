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
  function addTask(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch("/some-api", { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }
  return (
    <dialog open>
      <h2>Create a New Task</h2>
      <form action="post" onSubmit={addTask}>
        <label htmlFor="title">Title </label>
        <input type="text" name="name" defaultValue={"sam"} />

        <label htmlFor="details">Details</label>
        <input type="text" name="details" defaultValue={"info"} />

        <label htmlFor="date">Date and Time</label>
        <input type="time" name="time" id="" defaultValue={"12:00:00"} />
        <input type="date" name="date" id="" defaultValue={"2024-03-01"} />
        <Link to="/homepage">
          <button type="reset">Cancel</button>
        </Link>
        <button type="submit">Add</button>
      </form>
    </dialog>
  );
}
// export function NewTasks() {
//   function handleSubmit(e) {
//     // Prevent the browser from reloading the page
//     e.preventDefault();

//     // Read the form data
//     const form = e.target;
//     const formData = new FormData(form);

//     // You can pass formData as a fetch body directly:
//     fetch("/some-api", { method: form.method, body: formData });

//     // Or you can work with it as a plain object:
//     const formJson = Object.fromEntries(formData.entries());
//     console.log(formJson);
//   }

//   return (
//     <form method="post" onSubmit={handleSubmit}>
//       <label>
//         Text input: <input name="myInput" defaultValue="Some initial value" />
//       </label>
//       <hr />
//       <label>
//         Checkbox:{" "}
//         <input type="checkbox" name="myCheckbox" defaultChecked={true} />
//       </label>
//       <hr />
//       <p>
//         Radio buttons:
//         <label>
//           <input type="radio" name="myRadio" value="option1" /> Option 1
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="myRadio"
//             value="option2"
//             defaultChecked={true}
//           />{" "}
//           Option 2
//         </label>
//         <label>
//           <input type="radio" name="myRadio" value="option3" /> Option 3
//         </label>
//       </p>
//       <hr />
//       <button type="reset">Reset form</button>
//       <button type="submit">Submit form</button>
//     </form>
//   );
// }
