import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { useEffect } from "react";
import useBackground, { BackgroundProps } from "../../hooks/useBackground";

const backgroundOptions: BackgroundProps = {
  desktopUrl: 'url("../../public/assets/home/background-home-desktop.jpg")',
  tabletUrl: 'url("../../public/assets/home/background-home-tablet.jpg")',
  mobileUrl: 'url("../../public/assets/home/background-home-mobile.jpg")',
  mediaDesktop: "(max-width:1024px)",
  mediaTablet: "(max-width:768px)",
  mediaMobile: "(max-width:425px)",
};

export default function Home() {

  const { backgroundImage } = useBackground(backgroundOptions)
  
  useEffect(() => {
    document.body.style.backgroundImage = backgroundImage
  }, [backgroundImage])
  
  console.log('home')

  return (
    <Container disableGutters maxWidth={false}  sx={{paddingInline: {md:20, sm: 20, xs: 3}}}>
      <Grid container rowSpacing={4} justifyContent={"space-between"} alignItems={'end'} minHeight={'50vh'}>
        <Grid item lg={4} md={5} sm={12} xs ={12} >
          <Stack gap={2} textAlign={{xs:"center",sm:"center", md: 'start'}}>
            <Typography color={'white'} sx={{
              fontSize: {xs: '4vw', sm: 24, md: 24, lg:24}
            }}>SO, YOU WANT TO TRAVEL TO</Typography>
            <Typography color={'white'} sx={{
              fontSize: {lg: '9vw',md: '9vw', sm: '15vw', xs: '20vw'},
            }} lineHeight={1}>SPACE</Typography>
            <Typography color={'white'} variant="subtitle1" sx={{
              fontSize: {lg: '16px',md: '16px', sm: '16px', xs: '3vw'},
            }}>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </Typography>
          </Stack>
        </Grid>
        <Grid item lg={4} md={5} sm={12} xs={12} display={'grid'}  justifyContent={"center"}>
          <Box borderRadius={100} sx={{
            width: {lg: '300px', sm: "190px", xs: '150px'},
            height: {lg: '300px', sm: "190px", xs: '150px'},
            backgroundColor: 'white',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}>
            <Typography fontSize={{lg:40,xs:30}}>EXPLORE</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
