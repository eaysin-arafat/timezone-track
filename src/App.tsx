import { RouterProvider } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";
import router from "./routes";
import ThemeCustomization from "./themes";

// project import

// APP - THEME, ROUTER, LOCAL

export default function App() {
  return (
    <ThemeCustomization>
      <ScrollTop>
        <RouterProvider router={router} />
      </ScrollTop>
    </ThemeCustomization>
  );
}
