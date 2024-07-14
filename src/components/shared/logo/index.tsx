import { Link } from "react-router-dom";

// material-ui
import config from "@/config";
import { ButtonBase } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

// project import

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({ sx, to }) => {
  return (
    <ButtonBase
      disableRipple
      component={Link}
      to={!to ? config.defaultPath : to}
      sx={sx}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <h1>Timezone Track</h1>
        <Chip
          label={import.meta.env.VITE_APP_VERSION}
          variant="outlined"
          size="small"
          color="secondary"
          sx={{
            mt: 0.5,
            ml: 1,
            fontSize: "0.725rem",
            height: 20,
            "& .MuiChip-label": { px: 0.5 },
          }}
        />
      </Stack>
    </ButtonBase>
  );
};

export default LogoSection;
