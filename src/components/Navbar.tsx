import { Link, Outlet, useLocation} from "react-router-dom";

import { styled } from "@mui/material/styles";
import {
  Avatar,
  Container,
  Grid,
} from "@mui/material";

import logo from "../../public/assets/nav/logo.svg";

// react hooks
import { useCallback, useState } from "react";

// Nav components
import { NavParentTab, NavTab, NavTabsContainer  } from "./navbarComponents/navbarComponents";



const NavLink = styled(Link)(({theme}) => ({
  color: theme.palette.primary.light,
  textDecoration: 'none'
}))

export default function Navbar() {
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);

  const handleChange = useCallback(
    (_event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    },
    [value]
  );

  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          pt: { xl: 5, lg: 5, md: 0 },
          pl: 10
        }}
      >
        <Grid container columns={{ xs: 4, sm: 8, md: 11 }} justifyContent={"space-between"}>
          <Grid item xs={4} md={4} sm ={2} display={"grid"} alignItems={"center"}>
            <Avatar src={logo} />
          </Grid>

          <Grid item xs={6} md={6} sm ={6} display={"grid"} alignItems={"center"}>
            <NavTabsContainer alignItems={"center"}>
              <NavParentTab  value={value} onChange={handleChange} >
                <NavTab disableRipple value={'/home'} label={<NavLink to={'home'} >HOME</NavLink>}/>
                <NavTab disableRipple value={'/destination'} label={<NavLink to={'destination'} >DESTINATION</NavLink>} />
                <NavTab disableRipple value={'/crew'} label={<NavLink to={'crew'} >CREW</NavLink>} />
                <NavTab disableRipple value={'/technology'} label={<NavLink to={'technology'} >TECHNOLOGY</NavLink>} />
              </NavParentTab>
            </NavTabsContainer>
          </Grid>
        </Grid>
      </Container>
      <Outlet></Outlet>
    </>
  );
}
