import React, { useState, useEffect } from 'react';
import IntroVideoMobile from '../HomeComponents/IntroVideoMobile';
import Introduction from "../HomeComponents/Introduction";
import MobileFFCarousel from "../HomeComponents/MobileFFCarousel/MobileFFCarousel";
import MobileGSCCarousel from "../HomeComponents/MobileGSCCarousel/MobileGSCCarousel";
import Step1 from "../HomeComponents/Step1/Step1";
import Step2 from "../HomeComponents/Step2/Step2";
import Step3 from "../HomeComponents/Step3/Step3";
import Resources from "../HomeComponents/Resources";
import AFewWords from "../HomeComponents/AFewWords";
import SingleCommunities from "../HomeComponents/SingleCommunities";
import Question from "../HomeComponents/Question";
import '../HomeComponents/HomePage.css'

export default function HomePage() {
  const [width] = useState(window.innerWidth)
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (width <= 720) {
      setMobile(true)
    }
    else {
      setMobile(false)
    }
  }, [width])

  return (
    <div id="homepage">
      <IntroVideoMobile />
      <Introduction />
      {
        mobile
        ?
        <>
          <MobileFFCarousel />
          <br />
          <MobileGSCCarousel />
        </>
        :
        <>
          <Step1 />
          <Step2 />
          <Step3 />
        </>
      }
      <Resources />
      <AFewWords />
      {
      /*
        <SingleCommunities /> 
      */
      }
      <Question />
    </div>
  )
}
