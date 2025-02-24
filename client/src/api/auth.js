export async function loginToAccount(username, password) {
  console.log(username, password);
  // ask server for token in exchange for login credentials
  // if the server responds with 403 status, then alert the user
  // that the login was incorrect
  try {
    // TODO: replace with correct backend path
    const response = await fetch("/api/login-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const { token } = await response.json();
      if (token) localStorage.setItem("authToken", token);
    }
  } catch (err) {
    console.log(err);
    alert("Error while trying to login.");
  }
}

export async function createAccount(username, password, email) {
  try {
    // send a post request, then store the returned token in localstorage:
    const response = await fetch("/api/users", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, email }),
    });

    if (response.ok) {
      // once the account is created, login with the already provided
      // credentials:
      const { token } = await response.json();
      localStorage.setItem("authToken", token);
      loginToAccount(username, password);
    } else if (response.status === 403) {
      // TODO: replace with more desciption and a better ui component
      alert("Login Failed.");
    }
  } catch (err) {
    console.log(err);
    alert("Error on creating account! See console log for more.");
  }
}
