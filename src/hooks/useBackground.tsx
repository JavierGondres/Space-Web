import { useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';

export interface BackgroundProps {
    desktopUrl: string,
    tabletUrl: string,
    mobileUrl: string,
    mediaDesktop: string,
    mediaTablet: string,
    mediaMobile: string,
}

function useBackground({desktopUrl,tabletUrl,mobileUrl, mediaDesktop, mediaTablet, mediaMobile}: BackgroundProps) {
  const [backgroundImage, setBackgroundImage] = useState(desktopUrl);
  const desktopQuery = useMediaQuery(mediaDesktop)
  const tabletQuery = useMediaQuery(mediaTablet)
  const mobileQuery = useMediaQuery(mediaMobile)

    useEffect(() => {
        if(mobileQuery)
            setBackgroundImage(mobileUrl)
        else if(tabletQuery)
            setBackgroundImage(tabletUrl)
        else
            setBackgroundImage(desktopUrl)

    }, [desktopQuery, tabletQuery, mobileQuery])

    console.log('useBack')
  return {
    backgroundImage
  };
}

export default useBackground;