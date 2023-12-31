import { Outlet, useLocation } from "react-router-dom";

import {
  Avatar,
  Box,
  Container,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

import logo from "../../public/assets/nav/logo.svg";

// react hooks
import { useCallback, useState } from "react";

// Nav components
import {
  NavParentTab,
  NavTab,
  NavTabsContainer,
  NavLink
} from "./navbarComponents/navbarComponents";

import { Icon } from "@iconify/react";

export default function Navbar() {
  const location = useLocation();
  const parentPath = location.pathname.split('/').slice(0, -1).join('/');
  const [value, setValue] = useState(parentPath || location.pathname);
  const [openMenu, setOpenMenu] = useState(false);
  const matches = useMediaQuery("(max-width:600px)");


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
    <Grid container direction={"row"} gap={3} justifyContent={"center"} pt={5}>
      <Grid item xs={12}>
        <IconButton onClick={handleMenu}>
          <Icon icon="ph:x-bold" color="white" />
        </IconButton>
      </Grid>
      <Grid item xs={12}>
        <NavParentTab
          orientation="vertical"
          value={value}
          onChange={handleChange}
        >
          <NavTab
            disableRipple
            value={"/home"}
            label={
              <NavLink
                to={"home"}
                sx={{ display: "flex", gap: 1, alignItems: "center" }}
              >
                <Typography fontWeight={"bold"}>01</Typography>HOME
              </NavLink>
            }
            sx={{
              alignItems: "flex-start",
              fontSize: "1rem",
            }}
          />
          <NavTab
            disableRipple
            value={"/destination"}
            label={
              <NavLink
                to={"destination/0"}
                sx={{ display: "flex", gap: 1, alignItems: "center" }}
              >
                <Typography fontWeight={"bold"}>02</Typography>DESTINATION
              </NavLink>
            }
            sx={{
              alignItems: "flex-start",
              fontSize: "1rem",
            }}
          />
          <NavTab
            disableRipple
            value={"/crew"}
            label={
              <NavLink
                to={"crew"}
                sx={{ display: "flex", gap: 1, alignItems: "center" }}
              >
                <Typography fontWeight={"bold"}>03</Typography>CREW
              </NavLink>
            }
            sx={{
              alignItems: "flex-start",
              fontSize: "1rem",
            }}
          />
          <NavTab
            disableRipple
            value={"/technology"}
            label={
              <NavLink
                to={"technology"}
                sx={{ display: "flex", gap: 1, alignItems: "center" }}
              >
                <Typography fontWeight={"bold"}>04</Typography>TECHNOLOGY
              </NavLink>
            }
            sx={{
              alignItems: "flex-start",
              fontSize: "1rem",
            }}
          />
        </NavParentTab>
      </Grid>
    </Grid>
  );


  console.log('nav')

  return (
    <>
      <Container
        disableGutters={!matches}
        maxWidth={false}
        sx={{
          pt: { xl: 5, lg: 5, md: 0, xs: 5 },
          pl: { xl: 10, lg: 10, md: 10, sm: 10, xs: null },
          mb: 10
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
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              },
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
                  label={<NavLink to={"destination/0"}>DESTINATION</NavLink>}
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
          display: { xs: "block", sm: "block", md: "none" },
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
