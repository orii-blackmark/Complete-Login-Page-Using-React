import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";

function Login() {
  const naviget = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setTimeout(function () {
      setMsg("");
    }, 5000);
  }, [msg]);

  const handleInputChange = (e, type) => {
    switch (type) {
      case "user":
        setError("");
        setUser(e.target.value);
        if (e.target.value === "") {
          setError("Username Cannot be blank");
        }
        break;
      case "pass":
        setError("");
        setPass(e.target.value);
        if (e.target.value === "") {
          setError("Password Cannot be blank");
        }
        break;
      default:
    }
  };

  function loginSubmit() {
    if (user !== "" && pass !== "") {
      var url = "https://localhost/react/login.php";
      var headers = {
        Accept: "application/json",
        "Content-type": "application/json",
      };
      var Data = {
        user: user,
        pass: pass,
      };
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((response) => {
          if (
            response[0].result === "Invalid Username!" ||
            response[0].result === "Invalid Password!"
          ) {
            setError(response[0].result);
          } else {
            setMsg(response[0].result);
            setTimeout(function () {
              naviget("/dashboard");
            }, 5000);
          }
        })
        .catch((err) => {
          setError(err);
          console.log(err);
        });
    } else {
      setError("All fields are required!");
    }
  }
  return (
    <div className="form">
      <p>
        {error !== "" ? (
          <span className="error">{error}</span>
        ) : (
          <span className="success">{msg}</span>
        )}
      </p>
      <label htmlFor="">Username</label>
      <input
        type="text"
        value={user}
        onChange={(e) => handleInputChange(e, "user")}
      />
      <label htmlFor="">Password</label>
      <input
        type="password"
        value={pass}
        onChange={(e) => handleInputChange(e, "pass")}
      />
      <label htmlFor=""></label>
      <input
        type="submit"
        value="Login"
        defaultValue="Login"
        className="button"
        onClick={loginSubmit}
      />
    </div>
  );
}

export default Login;
