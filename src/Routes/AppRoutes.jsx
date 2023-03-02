import Login from "@/layouts/App";
import ErrorPage from "@/components/ErrorPage";
import App from "../layouts/App";
const appRoutes = () => {
  return {
    path: "/menu",
    element: <App />,
    errorElement: <ErrorPage />,
    
  };
};

export default appRoutes;
