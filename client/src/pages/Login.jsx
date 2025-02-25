import { useEffect, useState } from "react";
import { loginToAccount, createAccount } from "../api/auth.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [creatingAccount, setCreatingAccount] = useState(false);

  const [loginButtonEnabled, setLoginButtonEnabled] = useState(formDataValid());

  useEffect(() => {
    setLoginButtonEnabled(formDataValid);
  }, [username, password, email]);

  function formDataValid() {
    const nameAndPassValid = username.trim() !== "" && password.trim() !== "";
    const emailValid = email.trim() !== "";
    if (creatingAccount) return nameAndPassValid && emailValid;
    else return nameAndPassValid;
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow p-5 rounded-4"
        style={{
          width: "600px",
          height: `${creatingAccount ? "625px" : "500px"}`,
          background: "linear-gradient(to bottom,rgb(100, 55, 18),rgba(214, 129, 31, 0.81))",
          color: "white",
          padding: "30px",
        }}
      >
        <h2
          className="text-center fw-bold fs-3"
          style={{ marginBottom: "40px" }}
        >
          <FontAwesomeIcon icon={faMugHot} className="me-2" />
          COFFEE DAD JOKE BLOG
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
              type="email"
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
              {creatingAccount ? "Have an account? Login Here!" : "Not a User? Create Account "}
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
            onClick={
              creatingAccount
                ? () => createAccount(username, password, email)
                : () => loginToAccount(username, password)
            }
          >
            <FontAwesomeIcon icon={faMugHot} className="me-2" />
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
