import { useEffect } from 'react'
import useBackground from '../../hooks/useBackground';

export default function Destination() {

    const { backgroundImage } = useBackground({
        desktopUrl: 'url("../../public/assets/destination/background-destination-desktop.jpg")',
        tabletUrl: 'url("../../public/assets/destination/background-destination-tablet.jpg")',
        mobileUrl: 'url("../../public/assets/destination/background-destination-mobile.jpg")',
        mediaDesktop: "(max-width:1024px)",
        mediaTablet: "(max-width:768px)",
        mediaMobile: "(max-width:425px)",
      });
    
      
      useEffect(() => {
        document.body.style.backgroundImage = backgroundImage
      }, [backgroundImage])
      
      console.log('destination')
  return (
    <div>Destination</div>
  )
}
