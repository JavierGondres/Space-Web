import { useEffect } from 'react'
import useBackground, {BackgroundProps} from '../../hooks/useBackground';
import { Container, styled } from '@mui/system';
import { Grid, Typography } from '@mui/material';

const backgroundOptions: BackgroundProps = {
    desktopUrl: 'url("../../public/assets/destination/background-destination-desktop.jpg")',
    tabletUrl: 'url("../../public/assets/destination/background-destination-tablet.jpg")',
    mobileUrl: 'url("../../public/assets/destination/background-destination-mobile.jpg")',
    mediaDesktop: "(max-width:1024px)",
    mediaTablet: "(max-width:768px)",
    mediaMobile: "(max-width:425px)",
};

const Span = styled('span')(({
    color: 'white',
    fontSize: "1.5rem",
    fontWeight: 'bold',
    opacity: "25%",
    marginRight: 20
}))

export default function Destination() {

    const { backgroundImage } = useBackground(backgroundOptions)

    useEffect(() => {
        document.body.style.backgroundImage = backgroundImage
    }, [backgroundImage])
      
    console.log('destination')
  return (
    <Container disableGutters maxWidth={false}  sx={{paddingInline: {md:20, sm: 11, xs: 3}}}>
            <Typography color={'white'} variant='h5' sx={{
                textAlign: {xs:'center', sm:'start'},
                fontSize: {xs: 19, md:25}
            }}>
                <Span>01</Span>
                PICK YOUR DESTINATION
            </Typography>
        <Grid container>
            <Grid item sm={12} md={6}>

            </Grid>
        </Grid>
    </Container>
  )
}
