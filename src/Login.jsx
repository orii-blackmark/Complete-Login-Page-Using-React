import "./Style.css";

function Login() {
  return (
    <div className="form">
      <label htmlFor="">Username</label>
      <input type="text" />
      <label htmlFor="">Password</label>
      <input type="password" />
      <label htmlFor=""></label>
      <input type="submit" value="Login" defaultValue="Login" className="button" />
    </div>
  );
}

export default Login;
