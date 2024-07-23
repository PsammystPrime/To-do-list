import profile from "/profile1.png";

export default function Home() {
  // create tasks objects
  function Task(key, title, status) {
    (this.title = title), (this.status = status), (this.key = key);
  }
  const tsk1 = new Task(0, "design", "complete");
  const tsk2 = new Task(1, "write", "incomplete");
  const tsk3 = new Task(2, "docs", "incomplete");
  // create array and store the tasks
  const taskArray = [];
  taskArray.push(tsk1, tsk2, tsk3);
  console.log(taskArray);

  const listItems = taskArray.map((task) => (
    <li key={task.key}>
      <h3>{task.title}</h3>
      <span>Team Members</span>
      <p className="status">{task.status}</p>
    </li>
  ));

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
        <div className="ongoing">
          <h4>Ongoing Projects</h4>
          <button>See all</button>
        </div>
      </div>
    </main>
  );
}

// const listItems = taskArray.map((person) => (
//   <li key={person.key}>
//     <p>
//       <b>{person.title}:</b>
//       {" " + person.status + " "}
//       known for {person.accomplishment}
//     </p>
//   </li>
// ));
// return <ul>{listItems}</ul>;
