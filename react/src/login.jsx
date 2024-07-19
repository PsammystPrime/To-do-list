import { Link } from "react-router-dom";

import logo from "/logo.png";

export function LoginPage() {
  return (
    <main>
      <div className="login-container">
        <img className="login-logo" src={logo} alt="logo" />
        <h2>Welcome Back!</h2>
        <form action="" method="post">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="" placeholder="todo@gmail.com" />
          <label htmlFor="password">Password</label>
          <input type="password" name="" id="" />
          <span>Forgot Passsword?</span>
          <Link to={"/homepage"} className="links">
            <button type="submit" className="login">
              Log In
            </button>
          </Link>
        </form>
        <section>
          <hr />
          <p>Or continue with</p>
          <hr />
        </section>
        <button className="google">Google</button>
        <p>
          Don&apos;t have an account?{" "}
          <Link to={"/signup"}>
            <a>Sign Up</a>
          </Link>
        </p>
      </div>
    </main>
  );
}
export function Signup() {
  return (
    <main>
      <div className="login-container">
        <img className="login-logo" src={logo} alt="logo" />
        <h2>Create your account</h2>
        <form action="" method="post">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Psammyst Prime "
            required
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id=""
            placeholder="123@gmail.com"
            required
          />
          <label htmlFor="password" required>
            Password
          </label>
          <input type="password" name="" id="" />{" "}
          <label htmlFor="password" required>
            Confirm Password
          </label>
          <input type="password" name="" id="" />
          <span className="signup">
            <input type="checkbox" name="yes" id="" className="checkbox" />
            {""}I have read and agreed to DayTask {""}
            <a>Privacy Policy, Terms and Conditions</a>
          </span>
          <Link to={"/homepage"} className="links">
            <button type="submit" className="login">
              Sign up
            </button>
          </Link>
        </form>
        <section>
          <hr />
          <p>Or continue with</p>
          <hr />
        </section>
        <button className="google">Google</button>
        <p>
          Don&apos;t have an account?{" "}
          <Link to={"/login"}>
            <a href="">Log In</a>
          </Link>
        </p>
      </div>
    </main>
  );
}
export default function Login() {
  return <LoginPage></LoginPage>;
}
