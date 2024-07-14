import { createBrowserRouter } from "react-router-dom";

// project import
import LoginRoutes from "./LoginRoutes";
import MainRoutes from "./MainRoutes";

//ROUTING RENDER
const router = createBrowserRouter([MainRoutes, LoginRoutes]);

export default router;
