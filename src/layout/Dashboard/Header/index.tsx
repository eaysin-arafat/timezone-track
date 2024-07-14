import { useMemo } from "react";

// material-ui
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";

// project import
import { RootState } from "@/app/store";
import { setDashboardDrawerOpen } from "@/features/sidebar/sidebar";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Theme } from "@emotion/react";
import { useMediaQuery } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import AppBarStyled from "./AppBarStyled";
import HeaderContent from "./HeaderContent";

// assets

// ==============================|| MAIN LAYOUT - HEADER ||============================== //

export default function Header() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const downLG = useMediaQuery(theme.breakpoints.down("lg"));

  const isDrawerOpen = useSelector(
    (state: RootState) => state.sidebar.isDrawerOpen
  );

  // header content
  const headerContent = useMemo(() => <HeaderContent />, []);

  const iconBackColor = "grey.100";
  const iconBackColorOpen = "grey.200";

  // common header
  const mainHeader = (
    <Toolbar>
      <IconButton
        disableRipple
        aria-label="open drawer"
        onClick={() => dispatch(setDashboardDrawerOpen(!isDrawerOpen))}
        edge="start"
        color="secondary"
        // variant="light"
        sx={{
          color: "text.primary",
          bgcolor: isDrawerOpen ? iconBackColorOpen : iconBackColor,
          ml: { xs: 0, lg: -2 },
        }}
      >
        {!isDrawerOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </IconButton>
      {headerContent}
    </Toolbar>
  );

  // app-bar params
  const appBar: Theme = {
    position: "fixed",
    color: "inherit",
    elevation: 0,
    sx: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      // boxShadow: theme.customShadows.z1,
    },
  };

  return (
    <>
      {!downLG ? (
        <AppBarStyled theme={theme} open={!!isDrawerOpen} {...appBar}>
          {mainHeader}
        </AppBarStyled>
      ) : (
        <AppBar {...appBar}>{mainHeader}</AppBar>
      )}
    </>
  );
}
