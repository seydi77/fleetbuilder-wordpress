import React from 'react';
import styled from 'styled-components';
import bus from "../../assets/fleet-builder/bus-pinned.png";
import busReverse from "../../assets/fleet-builder/bus-pinned-reverse.png";
import boyOnBus from "../../assets/fleet-builder/boy-on-bus.png";
import liftVerticals from "../../assets/fleet-builder/lift-verticals.png";
import liftTop from "../../assets/fleet-builder/lift-top.png";
import liftCross from "../../assets/fleet-builder/lift-cross.png";
import {useStore} from "../../utils/store";

const BusHolder = styled.div`
  width: 80vh;
  position: fixed;
  bottom: 20px;
  left: -45vh;
  z-index: 5;
  will-change: transform;
  @media ( ${props => props.theme.breakpoints.lg} ) {
    left: 40px;
  }

  .bus {
    position: relative;
    z-index: 5;
    display: block;
    width: 100%;
    height: auto;
    will-change: transform;
    img {
      width: 100%;
      height: auto;
      display: block;
      position: relative;
      &.bus-reverse {
        position: absolute;
        opacity: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
      }
      &.boy-on-bus {
        position: absolute;
        top: 22.3%;
        left: 29.5%;
        width: 9%;
        height: auto;
      }
    }
    &.reversing {
      img.bus-reverse { opacity: 1; }
      img.bus-forwards { opacity: 0; }
    }
  }

  .lift {
    position: absolute;
    z-index: 1;
    bottom: 7%;
    left: -2%;
    width: 20%;
    will-change: opacity;
    opacity: 0;
    &.lift-2 {
      left: 70%;
    }
    img {
      display: block;
      width: 100%;
      height: auto;
      will-change: transform;
    }
    .lift-verticals {
      position: relative;
      z-index: 1;
    }
    .lift-top {
      position: absolute;
      top: -5%;
      left: -2%;
      z-index: 2;
      width: 120%;
    }
    .lift-cross {
      position: absolute;
      bottom: 0;
      left: -1%;
      z-index: 3;
      width: 120%;
      &.lift-cross-1, &.lift-cross-3, &.lift-cross-5, &.lift-cross-7 {
        z-index: 4;
      }
      &.lift-cross-2, &.lift-cross-4, &.lift-cross-6, &.lift-cross-8 {
        z-index: 3;
      }
    }

    &.front {
      left: 70%;
    }
  }

  .men {
    opacity: 0;
    position: absolute;
    z-index: 1;
    display: block;
    bottom: 0;
    left: 20%;
    width: 55%;
    height: auto;
  }
`;

function SceneBus() {
  const fbScrollingForwards = useStore(state => state.fbScrollingForwards);
  return (
    <BusHolder className="busHolder">
      <div className={`bus ${fbScrollingForwards ? 'driving' : 'reversing'}`}>
        <img className="bus-forwards" src={bus} alt="bus" />
        <img className="bus-reverse" src={busReverse} alt="bus" />
        <img className="boy-on-bus" src={boyOnBus} alt="boy on the bus" />
      </div>
      <div className="lift">
        <img className="lift-verticals" src={liftVerticals} alt="" />
        <img className="lift-top" src={liftTop} alt="" />
        <img className="lift-cross lift-cross-1" src={liftCross} alt="" />
        <img className="lift-cross lift-cross-2" src={liftCross} alt="" />
        <img className="lift-cross lift-cross-3" src={liftCross} alt="" />
        <img className="lift-cross lift-cross-4" src={liftCross} alt="" />
        <img className="lift-cross lift-cross-5" src={liftCross} alt="" />
        <img className="lift-cross lift-cross-6" src={liftCross} alt="" />
        <img className="lift-cross lift-cross-7" src={liftCross} alt="" />
        <img className="lift-cross lift-cross-8" src={liftCross} alt="" />
      </div>
      <div className="lift lift-2">
        <img className="lift-verticals" src={liftVerticals} alt="" />
        <img className="lift-top" src={liftTop} alt="" />
        <img className="lift-cross lift-cross-1" src={liftCross} alt="" />
        <img className="lift-cross lift-cross-2" src={liftCross} alt="" />
        <img className="lift-cross lift-cross-3" src={liftCross} alt="" />
        <img className="lift-cross lift-cross-4" src={liftCross} alt="" />
        <img className="lift-cross lift-cross-5" src={liftCross} alt="" />
        <img className="lift-cross lift-cross-6" src={liftCross} alt="" />
        <img className="lift-cross lift-cross-7" src={liftCross} alt="" />
        <img className="lift-cross lift-cross-8" src={liftCross} alt="" />
      </div>
    </BusHolder>
  )
}

export default SceneBus;