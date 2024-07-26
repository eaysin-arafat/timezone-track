import PropTypes from "prop-types";
import { useMemo } from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";

// project import
import DrawerContent from "./content";

import { RootState } from "@/app/store";
import { setDashboardDrawerOpen } from "@/features/sidebar/sidebar";
import { Theme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { drawerWidth } from "../../../config";
import DrawerHeader from "./header";
import MiniDrawerStyled from "./MiniDrawerStyled";

// ==============================|| MAIN LAYOUT - DRAWER ||============================== //

interface MainDrawerProps {
  window?: () => Window;
}

export default function MainDrawer({ window }: MainDrawerProps) {
  const matchDownMD = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );
  const dispatch = useDispatch();
  const isDrawerOpen = useSelector(
    (state: RootState) => state.sidebar.isDrawerOpen
  );
  
  // responsive drawer container
  const container =
    window !== undefined ? () => window().document.body : undefined;

  // header content
  const drawerContent = useMemo(() => <DrawerContent />, []);
  const drawerHeader = useMemo(
    () => <DrawerHeader open={!!isDrawerOpen} />,
    [isDrawerOpen]
  );

  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 }, zIndex: 1200 }}
      aria-label="mailbox folders"
    >
      {!matchDownMD ? (
        <MiniDrawerStyled variant="permanent" open={isDrawerOpen}>
          {drawerHeader}
          {drawerContent}
        </MiniDrawerStyled>
      ) : (
        <Drawer
          container={container}
          variant="temporary"
          open={isDrawerOpen}
          onClose={() => dispatch(setDashboardDrawerOpen(!isDrawerOpen))}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRight: "1px solid",
              borderRightColor: "divider",
              backgroundImage: "none",
              boxShadow: "inherit",
            },
          }}
        >
          {drawerHeader}
          {drawerContent}
        </Drawer>
      )}
    </Box>
  );
}

MainDrawer.propTypes = { window: PropTypes.func };
