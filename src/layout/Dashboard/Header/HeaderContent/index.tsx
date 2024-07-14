// material-ui
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import useMediaQuery from "@mui/material/useMediaQuery";

// project import
import { GithubOutlined } from "@ant-design/icons";
import { Theme } from "@mui/material";
import MobileSection from "./MobileSection";
import Notification from "./Notification";
import Profile from "./Profile";
import Search from "./Search";

// ==============================|| HEADER - CONTENT ||============================== //

export default function HeaderContent() {
  const downLG = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  return (
    <>
      {!downLG && <Search />}
      {downLG && <Box sx={{ width: "100%", ml: 1 }} />}
      <IconButton
        component={Link}
        // href="https://github.com/codedthemes/mantis-free-react-admin-template"
        href="https://github.com/eaysin-arafat/timezone-track.git"
        target="_blank"
        disableRipple
        color="secondary"
        title="Download Free Version"
        sx={{ color: "text.primary", bgcolor: "grey.100" }}
      >
        <GithubOutlined />
      </IconButton>

      <Notification />
      {!downLG && <Profile />}
      {downLG && <MobileSection />}
    </>
  );
}
