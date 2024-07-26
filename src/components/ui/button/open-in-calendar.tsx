import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(0.1, 2),
  display: "flex",
  alignItems: "center",

  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    boxShadow: `0px 2px 5px rgba(0, 0, 0, 0.1)`, // Example: Adding a box shadow on hover
  },
}));

const OpenInCalendarButton = () => {
  return (
    <StyledButton
      variant="outlined"
      color="inherit"
      startIcon={<CalendarMonthIcon sx={{ color: "#6477FF" }} />}
    >
      <Typography>Open in Calendar</Typography>
    </StyledButton>
  );
};

export default OpenInCalendarButton;
