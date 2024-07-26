/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, useEffect } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";

// material-ui
import { RootState } from "@/app/store";
import { MenuItemType } from "@/constants/types/menu-item";
import { setActiveItem } from "@/features/sidebar/sidebar";
import { ChipProps } from "@mui/material/Chip";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";

// Define the NavItem interface
export interface NavItem extends MenuItemType {
  chip?: {
    color: ChipProps["color"];
    variant: ChipProps["variant"];
    size: ChipProps["size"];
    label: string;
    avatar?:
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | undefined;
  };
  disabled?: boolean;
}

type Level = number;

type NavItemProps = {
  item: NavItem;
  level: Level;
};

// Define the Level type

export default function NavItem({ item, level }: NavItemProps) {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { isDrawerOpen, openedItem } = useSelector(
    (state: RootState) => state.sidebar
  );

  let itemTarget = "_self";
  if (item.target) {
    itemTarget = "_blank";
  }
  let listItemProps = {
    component: forwardRef<HTMLAnchorElement>((props, ref) => (
      <Link ref={ref} {...props} to={item.url} target={itemTarget} />
    )),
  };

  if (item?.external) {
    listItemProps = {
      component: "a",
      href: item.url,
      target: itemTarget,
    } as any;
  }

  const Icon = item.icon;
  const itemIcon = item.icon ? (
    <Icon style={{ fontSize: isDrawerOpen ? "1rem" : "1.25rem" }} />
  ) : (
    false
  );

  const { pathname } = useLocation();
  const isSelected =
    !!matchPath({ path: item.url, end: false }, pathname) ||
    openedItem === item.id;

  // active menu item on page load
  useEffect(() => {
    if (pathname === item.url) dispatch(setActiveItem(item.id));
    // eslint-disable-next-line
  }, [pathname]);

  const textColor = "text.primary";
  const iconSelectedColor = "primary.main";

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      onClick={() => {
        dispatch(setActiveItem(item.id));
        if (item.onClick) {
          dispatch(item.onClick({ timezone: "PST", title: "MyClock" }));
        }
      }}
      selected={isSelected}
      sx={{
        zIndex: 1201,
        pl: isDrawerOpen ? `${level * 28}px` : 1.5,
        py: !isDrawerOpen && level === 1 ? 1.25 : 1,
        ...(isDrawerOpen && {
          "&:hover": {
            bgcolor: "primary.lighter",
          },
          "&.Mui-selected": {
            bgcolor: "primary.lighter",
            borderRight: `2px solid ${theme.palette.primary.main}`,
            color: iconSelectedColor,
            "&:hover": {
              color: iconSelectedColor,
              bgcolor: "primary.lighter",
            },
          },
        }),
        ...(!isDrawerOpen && {
          "&:hover": {
            bgcolor: "transparent",
          },
          "&.Mui-selected": {
            "&:hover": {
              bgcolor: "transparent",
            },
            bgcolor: "transparent",
          },
        }),
      }}
    >
      {itemIcon && (
        <ListItemIcon
          sx={{
            minWidth: 28,
            color: isSelected ? iconSelectedColor : textColor,
            ...(!isDrawerOpen && {
              borderRadius: 1.5,
              width: 36,
              height: 36,
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                bgcolor: "secondary.lighter",
              },
            }),
            ...(!isDrawerOpen &&
              isSelected && {
                bgcolor: "primary.lighter",
                "&:hover": {
                  bgcolor: "primary.lighter",
                },
              }),
          }}
        >
          {itemIcon}
        </ListItemIcon>
      )}
      {(isDrawerOpen || (!isDrawerOpen && level !== 1)) && (
        <ListItemText
          primary={
            <Typography
              variant="h6"
              sx={{ color: isSelected ? iconSelectedColor : textColor }}
            >
              {item.title}
            </Typography>
          }
        />
      )}
      {/* {(isDrawerOpen || (!isDrawerOpen && level !== 1)) && item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
        />
      )} */}
    </ListItemButton>
  );
}
