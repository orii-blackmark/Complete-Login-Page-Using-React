import "./Style.css";

function Login() {
  return (
    <div className="form">
      <div className="title"><h2>Enter your Details to Login</h2></div>
      <label htmlFor="">Username</label>
      <input type="text" required />
      <label htmlFor="">Password</label>
      <input type="password" required />
      <label htmlFor=""></label>
      <input
        type="submit"
        value="Login"
        defaultValue="Login"
        className="button"
      />
    </div>
  );
}

export default Login;
