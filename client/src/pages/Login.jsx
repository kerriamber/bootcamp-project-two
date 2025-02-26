import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [creatingAccount, setCreatingAccount] = useState(false);

  const [loginButtonEnabled, setLoginButtonEnabled] = useState(formDataValid());

  const navigate = useNavigate();

  useEffect(() => {
    setLoginButtonEnabled(formDataValid());
  }, [username, password, email]);

  function formDataValid() {
    const nameAndPassValid = username.trim() !== "" && password.trim() !== "";
    const emailValid = email.trim() !== "";
    if (creatingAccount) return nameAndPassValid && emailValid;
    else return nameAndPassValid;
  }

  async function loginToAccount() {
    // ask server for an httpOnly cookie containing the token, and
    // on success redirect to /allposts
    // if the server responds with 403 status, then alert the user
    // that the login was incorrect
    try {
      // TODO: replace with correct backend path
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
       const { message } = await response.json();
       alert(message);
       return;
      }

      navigate("/allposts");
    } catch (err) {
      console.log(err);
      alert("Error while trying to login.");
    }
  }

  async function createAccount() {
    try {
      // send a post request, then store the returned token in localstorage:
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, email })
      });
  
      if (response.ok) {
        // once the account is created, login with httpOnly cookie that should have been set:
        loginToAccount();
      } else if (response.status === 403) {
        // TODO: replace with more desciption and a better ui component
        alert("Login Failed.");
      }
    } catch (err) {
      console.log(err);
      alert("Error on creating account! See console log for more.");
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow p-5 rounded-4"
        style={{
          width: "600px",
          height: `${creatingAccount ? "625px" : "500px"}`,
          background: "linear-gradient(to bottom,rgb(245, 94, 94), #4a69bd)",
          color: "white",
          padding: "30px",
        }}
      >
        <h2
          className="text-center fw-bold fs-4"
          style={{ marginBottom: "40px" }}
        >
          WELCOME BACK
        </h2>

        <div className="mb-5">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control form-control-lg rounded-pill"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control form-control-lg rounded-pill"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {creatingAccount && (
          <div className="mb-5">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control form-control-lg rounded-pill"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        )}

        <div className="mb-4 form-check">
          <div className="float-left d-inline-block w-50">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
          </div>

          <div className="w-50 float-right d-inline-block">
            <button
              className="btn btn-link text-white py-0"
              onClick={() => setCreatingAccount(!creatingAccount)}
            >
              {creatingAccount ? "Login Instead" : "Create Account Instead"}
            </button>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <button
            disabled={!loginButtonEnabled}
            className="btn rounded-pill py-2 my-2"
            style={{
              width: "250px",
              background:
                "linear-gradient(to right,rgb(255, 174, 109),rgb(255, 232, 81))",
              boxShadow: "2px 2px 5px 3px rgba(0, 0, 0, 0.3)",
              color: "rgb(99, 136, 229)",
              fontWeight: "bold",
              fontSize: "20px",
            }}
            onClick={creatingAccount ? createAccount : loginToAccount}
          >
            {creatingAccount ? "CREATE ACCOUNT" : "LOGIN"}
          </button>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-4">
          {!creatingAccount && <div></div>}
        </div>
      </div>
    </div>
  );
}
