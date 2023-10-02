import { useEffect } from "react";
import useBackground, { BackgroundProps } from "../../hooks/useBackground";

const backgroundOptions: BackgroundProps = {
  desktopUrl: 'url("../../public/assets/crew/background-crew-desktop.jpg")',
  tabletUrl: 'url("../../public/assets/crew/background-crew-tablet.jpg")',
  mobileUrl: 'url("../../public/assets/crew/background-crew-mobile.jpg")',
  mediaDesktop: "(max-width:1024px)",
  mediaTablet: "(max-width:768px)",
  mediaMobile: "(max-width:425px)",
};

export default function Crew() {
  const { backgroundImage } = useBackground(backgroundOptions);

  useEffect(() => {
    document.body.style.backgroundImage = backgroundImage;
  }, [backgroundImage]);

  console.log("crew");

  return <div>Crew</div>;
}
