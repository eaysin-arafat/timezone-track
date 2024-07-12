import { createBrowserRouter } from "react-router-dom";
import LoginRoutes from "./LoginRoutes";
import MainRoutes from "./MainRoutes";

// project import

// ==============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter([MainRoutes, LoginRoutes], {
  basename: import.meta.env.VITE_APP_BASE_NAME,
});

export default router;
