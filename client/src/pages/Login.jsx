import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow p-5 rounded-4"
        style={{
          width: "600px",
          height: "550px",
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
          />
        </div>

        <div className="mb-5">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control form-control-lg rounded-pill"
            placeholder="Enter Password"
          />
        </div>

        <div className="mb-4 form-check">
          <input type="checkbox" className="form-check-input" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember me
          </label>
        </div>

        <div className="d-flex justify-content-center">
          <button
            className="btn rounded-pill py-2"
            style={{
              width: "250px",
              background:
                "linear-gradient(to right,rgb(255, 174, 109),rgb(255, 232, 81))",
              boxShadow: "2px 2px 5px 3px rgba(0, 0, 0, 0.3)",
              color: "rgb(99, 136, 229)",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            LOGIN
          </button>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-4">
          <a href="#" className="text-white text-decoration-underline">
            Forgot password?
          </a>
          <div>
            <span className="text-white">Don't have an account? </span>
            <span className="fw-bold">Sign up</span>
          </div>
        </div>
      </div>

      <div style={{ marginLeft: "30px" }}>
        <img
          src="/assets/images/coffee-cup.png"
          alt="Coffee Cup Dad Joke"
          style={{ width: "400px", height: "auto", borderRadius: "10px" }}
        />
      </div>
    </div>
  );
}
