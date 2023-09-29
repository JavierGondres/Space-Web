import { Link, Outlet, useLocation } from "react-router-dom";

import { styled } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Container,
  Drawer,
  Grid,
  IconButton,
  Stack,
  useMediaQuery,
} from "@mui/material";

import logo from "../../public/assets/nav/logo.svg";

// react hooks
import { useCallback, useEffect, useState } from "react";

// Nav components
import {
  NavParentTab,
  NavTab,
  NavTabsContainer,
} from "./navbarComponents/navbarComponents";

import { Icon } from "@iconify/react";

const NavLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.light,
  textDecoration: "none",
}));

export default function Navbar() {
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);
  const [disableGutters, setDisableGutters] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const matches = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    setDisableGutters((prev) => !prev);
  }, [matches]);

  const handleMenu = useCallback(() => {
    return setOpenMenu((prev) => !prev);
  }, []);

  const handleChange = useCallback(
    (_event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    },
    [value]
  );

  const menu = (
    <Grid container direction={"row"} alignItems={"start"} pt={5}>
      <Grid item xs={12} alignItems={"end"}>
        <IconButton onClick={handleMenu}>
          <Icon icon="ph:x-bold" color="white" />
        </IconButton>
      </Grid>
      <Grid item xs={10}>
        <NavParentTab
          orientation="vertical"
          value={value}
          onChange={handleChange}
          sx={{ display: "flex", justifyContent:'start',alignItems: "start", textAlign: 'start'}}
        >
          <NavTab
            disableRipple
            value={"/home"}
            label={<NavLink to={"home"}>HOME</NavLink>}
          />
          <NavTab
            disableRipple
            value={"/destination"}
            label={<NavLink to={"destination"}>DESTINATION</NavLink>}
          />
          <NavTab
            disableRipple
            value={"/crew"}
            label={<NavLink to={"crew"}>CREW</NavLink>}
          />
          <NavTab
            disableRipple
            value={"/technology"}
            label={<NavLink to={"technology"}>TECHNOLOGY</NavLink>}
          />
        </NavParentTab>
      </Grid>
    </Grid>
  );

  return (
    <>
      <Container
        disableGutters={disableGutters}
        maxWidth={false}
        sx={{
          pt: { xl: 5, lg: 5, md: 0, xs: 5 },
          pl: { xl: 10, lg: 10, md: 10, sm: 10, xs: null },
        }}
      >
        <Grid
          container
          columns={{ xs: 4, sm: 8, md: 11 }}
          justifyContent={"space-between"}
        >
          <Grid
            item
            xs={2}
            md={4}
            sm={2}
            display={"grid"}
            alignItems={"center"}
          >
            <Avatar src={logo} />
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              display: { xs: "block", sm: "block", md: "none", xl: "none" },
            }}
          >
            <Stack justifyContent={"end"} alignItems={"end"}>
              <Box>
                <IconButton onClick={handleMenu}>
                  <Icon icon="mingcute:menu-fill" color="#d0d6f9" width={30} />
                </IconButton>
              </Box>
            </Stack>
          </Grid>
          <Grid
            item
            xs={6}
            md={6}
            sm={6}
            display={"grid"}
            alignItems={"center"}
            sx={{
              display: { xs: "none", sm: "none", md: "block", xl: "block" },
            }}
          >
            <NavTabsContainer alignItems={"center"}>
              <NavParentTab value={value} onChange={handleChange}>
                <NavTab
                  disableRipple
                  value={"/home"}
                  label={<NavLink to={"home"}>HOME</NavLink>}
                />
                <NavTab
                  disableRipple
                  value={"/destination"}
                  label={<NavLink to={"destination"}>DESTINATION</NavLink>}
                />
                <NavTab
                  disableRipple
                  value={"/crew"}
                  label={<NavLink to={"crew"}>CREW</NavLink>}
                />
                <NavTab
                  disableRipple
                  value={"/technology"}
                  label={<NavLink to={"technology"}>TECHNOLOGY</NavLink>}
                />
              </NavParentTab>
            </NavTabsContainer>
          </Grid>
        </Grid>
      </Container>

      <Drawer
        anchor="right"
        hideBackdrop
        variant="temporary"
        open={openMenu}
        onClose={handleMenu}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "50vw",
            backdropFilter: "blur(25px)",
            webkitBackdropFilter: "blur(25px)",
            backgroundColor: "rgba(255, 255, 255, 0.04)",
          },
        }}
      >
        {menu}
      </Drawer>
      <Outlet></Outlet>
    </>
  );
}
