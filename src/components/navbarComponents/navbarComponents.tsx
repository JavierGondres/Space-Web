import { Stack, Tab, Tabs, styled } from "@mui/material";

export const NavParentTab = styled(Tabs)(({ theme }) => ({
  "& .MuiTabs-indicator": {
    backgroundColor: theme.palette.primary.light,
  },
}));

export const NavTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.primary.light,
  fontSize: "0.8rem",
  marginRight: 1,
  "&.Mui-selected": {
    color: theme.palette.primary.light,
  },
}));

export const NavTabsContainer = styled(Stack)({
  padding: 20,
  backdropFilter: "blur(25px)",
  webkitBackdropFilter: "blur(25px)",
  backgroundColor: "rgba(255, 255, 255, 0.04)",
});
