import { useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';

export interface BackgroundProps {
    desktopUrl: string,
    tabletUrl: string,
    mobileUrl: string,
    mediaDesktop: string,
    mediaTablet: string,
    mediaMobile: string,
    custom?: string
}

function useBackground({desktopUrl,tabletUrl,mobileUrl, mediaDesktop, mediaTablet, mediaMobile, custom}: BackgroundProps) {
  const [backgroundImage, setBackgroundImage] = useState(desktopUrl);
  const desktopQuery = useMediaQuery(mediaDesktop)
  const tabletQuery = useMediaQuery(mediaTablet)
  const mobileQuery = useMediaQuery(mediaMobile)
  const customMediaQuery = useMediaQuery(custom || '(max-width:900px)')

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
    backgroundImage,
    desktopQuery,
    tabletQuery,
    mobileQuery,
    customMediaQuery
  };
}

export default useBackground;