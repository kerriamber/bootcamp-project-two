import jwt from "jsonwebtoken";

export function auth(req, res, next) {
  const token = req.cookies?.token;
  const { JWT_SECRET } = process.env;

  if (!JWT_SECRET) throw new Error("Please set the JWT_SECRET env variable");

  // redirect to login if there is no token
  if (!token) {
    return res.redirect("/login"); // redirects and returns to stop function execution
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    // redirect to login if token is invalid:
    if (err) {
      return res.redirect("/login"); // redirects and returns to stop function execution
    }

    // else, assume the token just contains the user,
    // and store it in the request to be used by subsequent middleware
    req.user = decoded;
    next();
  });
}
