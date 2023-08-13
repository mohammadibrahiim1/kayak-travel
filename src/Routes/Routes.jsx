import Home from "../pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: Root } = require("../Layout/Root");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
