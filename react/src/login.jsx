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
          <Link to={"/signup"} className="links">
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
          Don&apos;t have an account? <a href="">Sign Up</a>
        </p>
      </div>
    </main>
  );
}
export function Signup() {
  return <p>hello</p>;
}
export default function Login() {
  return <LoginPage></LoginPage>;
}
