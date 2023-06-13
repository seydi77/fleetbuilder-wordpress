import React, {useEffect} from 'react';
import styled from 'styled-components';
import SpeechBubble from '../../assets/fleet-builder/intro-speech-bubble.inline.svg';
import SpeechBubbleM from '../../assets/fleet-builder/intro-speech-bubble-m.inline.svg';
import character from '../../assets/fleet-builder/intro-character.png';
import useScrollTrigger from "../../hooks/useScrollTrigger";

const Holder = styled.div`
  width: 50%;
  will-change: transform;
  @media ( ${props => props.theme.breakpoints.lg} ) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80%;
  }


  img {
    display: block;
    width: 76%;
    height: auto;
    will-change: transform;
  }
`;

const SpeechBubbleHolder = styled.div`
  margin-left: 20%;
  width: 80%;
  will-change: transform;

  svg {
    will-change: transform;
    width: 100%;
    height: auto;

    &:first-child {
      display: none;
      @media ( ${props => props.theme.breakpoints.lg} ) {
        display: block;
      }
    }

    &:nth-child(2) {
      @media ( ${props => props.theme.breakpoints.lg} ) {
        display: none;
      }
    }
  }
}
`;

function ScrollInvitation() {

  const {tl, holderRef, gsap, q} = useScrollTrigger();

  useEffect(() => {
      if (!tl.current) {
        tl.current = gsap.timeline({
          repeat: -1,
        }).to(q(`.speech-holder`), {
          yPercent: -30,
          duration: 1,
          yoyo: true,
          repeat: 1,
          ease: 'power2.out'
        }).to(q(`img`), {
          yPercent: -2,
          duration: 1,
          yoyo: true,
          repeat: 1,
          ease: 'power1.out'
        }, '<')
      }
    }
  )

  return (
    <Holder className="scroll-invitation-holder">
      <div ref={holderRef} className="scroll-invitation-inner">
        <SpeechBubbleHolder className="speech-holder">
          <SpeechBubble />
          <SpeechBubbleM />
        </SpeechBubbleHolder>
        <img src={character} alt="Cute character" />
      </div>
    </Holder>
  )
}

export default ScrollInvitation;