import { useEffect } from "react";
import { Outlet } from "react-router-dom";

// material-ui
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

// project import
import { setDashboardDrawerOpen } from "@/features/sidebar/sidebar";
import { Theme, Toolbar } from "@mui/material";
import { useDispatch } from "react-redux";
import Drawer from "./Drawer";
import Header from "./Header";

// ==============================|| MAIN LAYOUT ||============================== //

export default function DashboardLayout() {
  const downXL = useMediaQuery((theme: Theme) => theme.breakpoints.down("xl"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDashboardDrawerOpen(!downXL));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [downXL]);

  // if (menuMasterLoading) return <Loader />;

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Header />
      <Drawer />
      <Box
        component="main"
        sx={{
          width: "calc(100% - 260px)",
          flexGrow: 1,
          p: { xs: 2, sm: 3 },
        }}
      >
        <Toolbar />
        {/* <Breadcrumbs navigation={menuItems} title /> */}
        <Outlet />
      </Box>
    </Box>
  );
}
