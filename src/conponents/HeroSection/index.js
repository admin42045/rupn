import React, {useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '.././ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP,HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';

const HeroSection = ()=>{
      const [hover, setHover] = useState(false);

      const onHover =()=> {
          setHover(!hover);
      }


    return(
      <HeroContainer>
          <HeroBg>
              <VideoBg autoPlay loop src={Video} type='video.mp4' />
          </HeroBg>
          <HeroContent>
              <HeroH1>Virtual banking mode easy!</HeroH1>
              <HeroP>Sign up a new account today and receiv $250 in credit towards your next payment.</HeroP>
          <HeroBtnWrapper>
              <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                  Get Started { hover ? <ArrowForward/> : <ArrowRight/>}
              </Button>
          </HeroBtnWrapper>
          </HeroContent>
      </HeroContainer>
    );
}

export default HeroSection;