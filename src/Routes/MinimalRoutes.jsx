import ErrorPage from "../components/ErrorPage";
import Minimal from "../layouts/Minimal";
import Scan from "../pages/Scan";
import Login from "../pages/Login";

const minimalRoutes = () => {
  return {
    path: "",
    element: <Minimal />,
    errorElement: <ErrorPage />,
    children: [
      { 
        path: "/",
        element: <Login />,
      },
      {
        path: "scan",
        element: <Scan />,
      },
    ],
  };
};

export default minimalRoutes;
