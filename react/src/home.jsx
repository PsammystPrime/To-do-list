import profile from "/profile1.png";

export default function Home() {
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
        <div className="search">
          <input type="search" name="" id="search" />
          <button>S</button>
        </div>
        <div className="complete">
          <h4>Completed Tasks</h4>
          <button>See all</button>
        </div>
        <div className="ongoing">
          <h4>Ongoing Projects</h4>
          <button>See all</button>
        </div>
      </div>
    </main>
  );
}
