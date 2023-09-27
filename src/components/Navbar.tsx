import { Outlet } from "react-router-dom";

import { styled } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

import logo from "../../public/assets/nav/logo.svg";

// react hooks
import { useCallback, useState } from "react";

const NavParentTab = styled(Tabs)(({ theme }) => ({
  "& .MuiTabs-indicator": {
    backgroundColor: theme.palette.primary.light,
  },
}));

const NavTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.primary.light,
  fontSize: "0.8rem",
  marginRight: 1,
  "&.Mui-selected": {
    color: theme.palette.primary.light,
  },
}));

const NavTabsContainer = styled(Stack)({
    padding: 20
})

export default function Navbar() {
  const [value, setValue] = useState(0);

  const handleChange = useCallback(
    (_event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    },
    [value]
  );

  return (
    <>
      <Container maxWidth={"xl"} sx={{pt: 5}}>
        <Grid container>
          <Grid item xs={6} display={"grid"} alignItems={"center"}>
            <Avatar src={logo} />
          </Grid>

          <Grid item xs={6} display={"grid"} alignItems={"center"} >
            <NavTabsContainer alignItems={"end"}>
              <NavParentTab value={value} onChange={handleChange}>
                <NavTab disableRipple value={0} label="HOME" />
                <NavTab disableRipple value={1} label="DESTINATION" />
                <NavTab disableRipple value={2} label="CREW" />
                <NavTab disableRipple value={3} label="TECHNOLOGY" />
              </NavParentTab>
            </NavTabsContainer>
          </Grid>
        </Grid>
      </Container>
      <Outlet></Outlet>
    </>
  );
}
