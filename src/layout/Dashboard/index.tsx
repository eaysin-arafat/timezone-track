import { useEffect } from "react";
import { Outlet } from "react-router-dom";

// material-ui
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";

// project import
import { handlerDrawerOpen, useGetMenuMaster } from "../../api/menu";
import Breadcrumbs from "../../components/@extended/Breadcrumbs";
import Loader from "../../components/Loader";
import Drawer from "./Drawer";
import Header from "./Header";

// ==============================|| MAIN LAYOUT ||============================== //

export default function DashboardLayout() {
  const { menuMasterLoading } = useGetMenuMaster();
  const downXL = useMediaQuery((theme) => theme.breakpoints.down("xl"));

  useEffect(() => {
    handlerDrawerOpen(!downXL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [downXL]);

  if (menuMasterLoading) return <Loader />;

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Header />
      <Drawer />
      <Box
        component="main"
        sx={{ width: "calc(100% - 260px)", flexGrow: 1, p: { xs: 2, sm: 3 } }}
      >
        <Toolbar />
        <Breadcrumbs navigation={navigation} title />
        <Outlet />
      </Box>
    </Box>
  );
}
