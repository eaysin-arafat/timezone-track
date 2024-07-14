// material-ui
import { RootState } from "@/app/store";
import { MenuGroupType } from "@/constants/types/menu-item";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import NavItem from "./NavItem";

// project import

export default function NavGroup({ item }: { item: MenuGroupType }) {
  const isDrawerOpen = useSelector(
    (state: RootState) => state.sidebar.isDrawerOpen
  );

  const navCollapse = item.children?.map((menuItem) => {
    // switch (menuItem.type) {
    // case "collapse":
    //   return (
    //     <Typography
    //       key={menuItem.id}
    //       variant="caption"
    //       color="error"
    //       sx={{ p: 2.5 }}
    //     >
    //       collapse - only available in paid version
    //     </Typography>
    //   );
    // case "item":
    return <NavItem key={menuItem.id} item={menuItem} level={1} />;
    // default:
    //   return (
    //     <Typography
    //       key={menuItem.id}
    //       variant="h6"
    //       color="error"
    //       align="center"
    //     >
    //       Fix - Group Collapse or Items
    //     </Typography>
    //   );
    // }
  });

  return (
    <List
      subheader={
        item.title &&
        isDrawerOpen && (
          <Box sx={{ pl: 3, mb: 1.5 }}>
            <Typography variant="subtitle2" color="textSecondary">
              {item.title}
            </Typography>
            {/* only available in paid version */}
          </Box>
        )
      }
      sx={{ mb: isDrawerOpen ? 1.5 : 0, py: 0, zIndex: 0 }}
    >
      {navCollapse}
    </List>
  );
}
