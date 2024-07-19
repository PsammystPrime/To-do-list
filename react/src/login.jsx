// import { Link } from "react-router-dom";

import logo from "/logo.png";

export function LoginPage() {
  return (
    <>
      <img className="logo" src={logo} alt="logo" />
      <h2>Welcome Back!</h2>
      <form action="" method="post">
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="" />
        <label htmlFor="password">Password</label>
        <input type="password" name="" id="" />
        <p>Forgot Passsword?</p>
        <button type="submit">Log In</button>
      </form>
      <section>
        <div></div>
        <p>Or continue with</p>
        <div></div>
      </section>
      <button>Google</button>
      <p>
        Don`&apos;`t have an account? <a href="">Sign Up</a>
      </p>
    </>
  );
}

export default function Login() {
  return <LoginPage></LoginPage>;
}
