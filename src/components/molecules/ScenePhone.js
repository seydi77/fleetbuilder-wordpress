import React from 'react';
import styled from 'styled-components';
import phone from "../../assets/fleet-builder/phone-outline.png";
import dash1 from "../../assets/fleet-builder/dashboard-1.png";
import dash2 from "../../assets/fleet-builder/dashboard-2.png";
import dash3 from "../../assets/fleet-builder/dashboard-3.png";

const PhoneHolder = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 50%;
  z-index: 15;
  padding: 20vw 30vw 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  will-change: transform;
  @media ( ${props => props.theme.breakpoints.sm} ) {
    bottom: 35%;
  }
  @media ( ${props => props.theme.breakpoints.lg} ) {
    width: 50vw;
    top: 4.5rem;
    bottom: 0;
    padding: 10vw;
    justify-content: center;
  }
  @media ( ${props => props.theme.breakpoints.lg} ) {
    padding: 12.5vw;
  }
  @media ( ${props => props.theme.breakpoints.xl} ) {
    padding: 15vw;
  }
  .phone-inner {
    position: relative;
    img {
      display: block;
      width: 100%;
      height: auto;

      &.dashboard {
        position: absolute;
        top: 2.25%;
        left: 4%;
        width: 92%;
      }
    }
  }
`;

function ScenePhone() {
  return (
    <PhoneHolder className="phone-holder">
      <div className="phone-inner">
        <img className="phone" src={phone} alt="mobile phone" />
        <img className="dashboard dashboard-1" src={dash1} alt="highland dashboard" />
        <img className="dashboard dashboard-2" src={dash2} alt="highland dashboard" />
        <img className="dashboard dashboard-3" src={dash3} alt="highland dashboard" />
      </div>
    </PhoneHolder>
  )
}

export default ScenePhone;