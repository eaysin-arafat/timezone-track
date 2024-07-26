// material-ui
import { Theme, useTheme } from "@mui/material/styles";

// project import
import DrawerHeaderStyled from "./DrawerHeaderStyled";

// ==============================|| DRAWER HEADER ||============================== //

export default function DrawerHeader({ open }: { open: boolean }) {
  const theme: Theme = useTheme();

  return (
    <DrawerHeaderStyled theme={theme} open={!!open}>
      {/* <Logo isIcon={!open} sx={{ width: open ? "auto" : 35, height: 35 }} /> */}
      <h2>Timezone Track</h2>
    </DrawerHeaderStyled>
  );
}
