import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage.jsx";
import Login from "./pages/Login.jsx";
import Post from "./pages/Post.jsx";

// TODO: import bootstrap

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      //TODO: place the rest of the page route info here:
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/post",
        element: <Post />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
