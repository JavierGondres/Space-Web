import { useCallback, useEffect, useMemo, useState } from "react";
import useBackground, { BackgroundProps } from "../../hooks/useBackground";
import { Box, Container, styled } from "@mui/system";
import { Divider, Grid, Stack, Typography } from "@mui/material";
import { destinationData } from "../../utils.tsx/destinationData";
import {
  NavParentTab,
  NavTab,
  NavLink,
} from "../../components/navbarComponents/navbarComponents";
import { useParams } from "react-router-dom";

const backgroundOptions: BackgroundProps = {
  desktopUrl:
    'url("../../public/assets/destination/background-destination-desktop.jpg")',
  tabletUrl:
    'url("../../public/assets/destination/background-destination-tablet.jpg")',
  mobileUrl:
    'url("../../public/assets/destination/background-destination-mobile.jpg")',
  mediaDesktop: "(max-width:1024px)",
  mediaTablet: "(max-width:768px)",
  mediaMobile: "(max-width:425px)",
  custom: "(max-width:900px)",
};

const Span = styled("span")({
  color: "white",
  fontSize: "1.5rem",
  fontWeight: "bold",
  opacity: "25%",
  marginRight: 20,
});

const Image = styled("img")({});

export default function Destination() {
  const { id } = useParams();
  const paramId = id ? parseInt(id) : undefined; // Convierte id a número si existe
  const [value, setValue] = useState(id);
  const { backgroundImage, customMediaQuery } =
    useBackground(backgroundOptions);
  const data = useMemo(() => {
    return destinationData;
  }, []);

  useEffect(() => {
    document.body.style.backgroundImage = backgroundImage;
  }, [backgroundImage]);

  const handleChange = useCallback(
    (_event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    },
    [value]
  );

  console.log(paramId);

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ paddingInline: { md: 20, sm: 11, xs: 3 } }}
    >
      <Typography
        color={"white"}
        variant="h5"
        sx={{
          textAlign: { xs: "center", sm: "start" },
          fontSize: { xs: 19, md: 25 },
        }}
      >
        <Span>01</Span>
        PICK YOUR DESTINATION
      </Typography>
      <Grid
        container
        height={"50vh"}
        mt={5}
        textAlign={{ xs: "center", sm: "center", md: "start" }}
        justifyContent={{ xs: "center", sm: "space-between" }}
        alignItems={"center"}
        gap={5}
      >
        <Grid
          item
          sm={12}
          md={5}
          lg={5}
          display={"grid"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box>
            <Image
              src={data[paramId ? paramId : 0].image}
              sx={{
                width: `${customMediaQuery ? "60vw" : "25vw"}`,
              }}
            ></Image>
          </Box>
        </Grid>
        <Grid
          item
          sm={12}
          md={5}
          lg={5}
          display={"grid"}
          alignItems={"start"}
          justifyContent={"center"}
        >
          <Box mb={3}>
            <NavParentTab
              centered={customMediaQuery}
              value={value}
              onChange={handleChange}
            >
              {data.map((item) => (
                <NavTab
                  key={item._id}
                  disableRipple
                  value={`${item._id}`}
                  label={<NavLink to={`${item._id}`}>{item.name}</NavLink>}
                />
              ))}
            </NavParentTab>
          </Box>
          <Box paddingX={2}>
            <Stack gap={3} mb={3}>
              <Typography
                color={"white"}
                fontSize={{ xs: 50, sm: 80, md: 100 }}
                textAlign={{ sm: "center", md: "start" }}
              >
                {data[paramId ? paramId : 0].name.toUpperCase()}
              </Typography>
              <Typography color={"#D0D6F9"} variant={"subtitle1"}>
                {data[paramId ? paramId : 0].description}
              </Typography>
            </Stack>

            <Divider color={"#D0D6F9"} sx={{ mb: 4 }}></Divider>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              flexWrap={"wrap"}
              gap={{ xs: 4, sm: 10 }}
              justifyContent={{ xs: "center", md: "start" }}
            >
              <Stack>
                <Typography color={"#D0D6F9"}>AVG. DISTANCE</Typography>
                <Typography color={"white"} variant={"body1"}>
                  {data[paramId ? paramId : 0].distance}
                </Typography>
              </Stack>
              <Stack>
                <Typography color={"#D0D6F9"}>EST. TRAVELTIME</Typography>
                <Typography color={"white"} variant={"body1"}>
                  {data[paramId ? paramId : 0].travelTime}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
