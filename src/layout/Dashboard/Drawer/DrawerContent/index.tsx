// project import
import { SxProps } from "@mui/system";
import SimpleBar from "simplebar-react";
import Navigation from "./Navigation";

// ==============================|| DRAWER CONTENT ||============================== //

export default function DrawerContent() {
  const simpleBarStyles: SxProps = {
    ".simplebar-content": {
      display: "flex",
      flexDirection: "column",
    },
  };

  return (
    <>
      <SimpleBar style={simpleBarStyles}>
        <Navigation />
        {/* <NavCard /> */}
      </SimpleBar>
    </>
  );
}
