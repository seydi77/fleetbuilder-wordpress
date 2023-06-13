import React, { useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';
import background from "../../assets/fleet-builder/background.png";
import mid1 from "../../assets/fleet-builder/mid-part-1.png";
import mid2 from "../../assets/fleet-builder/mid-part-2.png";
import mid3 from "../../assets/fleet-builder/mid-part-3.png";
import boyBusStop from "../../assets/fleet-builder/boy-at-bus-stop.png";
import boyBusStopArm from "../../assets/fleet-builder/boy-at-bus-stop-arm.png";
import dogWalker1 from "../../assets/fleet-builder/dog-walker-1.png";
import dogWalker2 from "../../assets/fleet-builder/dog-walker-2.png";
import dogWalker3 from "../../assets/fleet-builder/dog-walker-3.png";
import manStanding from "../../assets/fleet-builder/man.png";
import wisp1 from "../../assets/fleet-builder/wisp-1.png";
import wisp2 from "../../assets/fleet-builder/wisp-2.png";
import pinkFlower from "../../assets/fleet-builder/flower-pink.png";
import yellowFlower from "../../assets/fleet-builder/flower-yellow.png";
import turbine1 from "../../assets/fleet-builder/turbine-1.png";
import turbine2 from "../../assets/fleet-builder/turbine-2.png";
import turbine3 from "../../assets/fleet-builder/turbine-3.png";
import turbine4 from "../../assets/fleet-builder/turbine-4.png";
import smoke1 from "../../assets/fleet-builder/smoke-1.png";
import smoke2 from "../../assets/fleet-builder/smoke-2.png";
import smoke3 from "../../assets/fleet-builder/smoke-3.png";
import dieselBus from "../../assets/fleet-builder/diesel-bus.png";
import {gsap} from "gsap";

const Holder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: lightblue;
  z-index: 0;
  will-change: transform;

  img {
    display: block;
    height: 100%;
    width: auto;
  }

  .scene-background {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
    top: 0;
    will-change: transform;
  }

  .scene-midground {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    .scene-midground-moving-elements {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      img {
        position: absolute;
        width: auto;
        will-change: transform;
      }
      .boy-at-bus-stop {
        bottom: 15.8%;
        left: 8%;
        height: 18%;
        z-index: 2;
      }
      .boy-at-bus-stop-arm {
        bottom: 27.5%;
        left: 7.8%;
        height: 8.5%;
        z-index: 1;
      }
      .dog-walker-1 {
        bottom: 15.8%;
        left: 9.54%;
        height: 24%;
      }
      .wisp-1 {
        top: 22%;
        left: 5.8%;
        height: 5%;
      }
      .wisp-2 {
        top: 15%;
        left: 8.3%;
        height: 4%;
      }
      .dog-walker-2 {
        bottom: 15.8%;
        left: 17.3%;
        height: 25.7%;
      }
      .man-standing {
        bottom: 15.8%;
        left: 19.05%;
        height: 25.1%;
      }
      .flower {
        bottom: 27%;
        left: 14.85%;
        height: 2.5%;
        &.flower-2 {
          bottom: 45%;
          left: 18.85%;
          height: 3%;
        }
      }
      .dog-walker-3 {
        bottom: 19.5%;
        left:54.5%;
        height: 24%;
      }
      .turbine-1 {
        top: 13%;
        left:52.3%;
        height: 29.5%;
      }
      .turbine-2 {
        top: 5%;
        left: 53.43%;
        height: 26%;
      }
      .turbine-3 {
        top: 12.5%;
        left:54.8%;
        height: 26.5%;
      }
      .turbine-4 {
        top: 5.7%;
        left:55.99%;
        height: 26%;
      }
      .smoke-1 {
        top: 17.9%;
        left:61.4%;
        height: 49.1%;
      }
      .smoke-2 {
        top: 19.4%;
        left:63.59%;
        height: 38%;
      }
      .smoke-3 {
        top: 24.8%;
        left:64.67%;
        height: 30.2%;
      }
      .diesel-bus {
        top: 46.5%;
        left:62.82%;
        height: 25.5%;
      }
    }
  }
`;

const SceneMidAndBackground = React.forwardRef((props, ref) => {

  const comp = useRef(); // create a ref for the root level element (for scoping)

  useLayoutEffect(() => {

    let ctx = gsap.context(() => {

      gsap.to(".boy-at-bus-stop-arm", {
        rotation: -10,
        transformOrigin: "bottom right",
        yoyo: true,
        repeat: -1,
        duration: 1,
      });

      gsap.to(".wisp-1, .wisp-2", {
        rotation: 15,
        yPercent: -5,
        transformOrigin: "bottom 90%",
        yoyo: true,
        repeat: -1,
        duration: 1.5,
      });

      gsap.to(".flower", {
        rotation: 360,
        transformOrigin: "center center",
        repeat: -1,
        duration: 3,
        ease: 'none',
      });

      gsap.to(".turbine-1", {
        rotation: 360,
        transformOrigin: "50% 53%",
        repeat: -1,
        duration: 3,
        ease: 'none',
      });
      gsap.to(".turbine-2", {
        rotation: 360,
        transformOrigin: "55% 59%",
        repeat: -1,
        duration: 4,
        ease: 'none',
      });
      gsap.to(".turbine-3", {
        rotation: 360,
        transformOrigin: "51% 60.5%",
        repeat: -1,
        duration: 3,
        ease: 'none',
      });
      gsap.to(".turbine-4", {
        rotation: 360,
        transformOrigin: "46% 59%",
        repeat: -1,
        duration: 4,
        ease: 'none',
      });

      gsap.timeline({
        repeat: -1,
      }).fromTo(".smoke-1", {
        autoAlpha: 0,
      },{
        autoAlpha: 1,
        delay: 1,
        duration: 0.01,
        ease: 'none',
      }).fromTo(".smoke-2", {
        autoAlpha: 0,
      },{
        autoAlpha: 1,
        duration: 0.01,
        delay: 1,
        ease: 'none',
      }).fromTo(".smoke-3", {
        autoAlpha: 0,
      },{
        autoAlpha: 1,
        duration: 0.01,
        delay: 1,
        ease: 'none',
      }).to(".smoke-1, .smoke-2", {
        autoAlpha: 0,
        duration: 0.01,
        delay: 1,
      })

      gsap.to(".diesel-bus", {
        rotation: -2,
        transformOrigin: "bottom left",
        yoyo: true,
        repeat: -1,
        duration: 0.5,
      });


    }, comp);

    return () => ctx.revert();

  });

  return (
    <Holder className="scene-inner" ref={ref}>
      <img className="scene-background" src={background} alt="city scene" />
      <div className="scene-midground" ref={comp}>
        <img src={mid1} alt="city scene" />
        <img src={mid2} alt="city scene" />
        <img src={mid3} alt="city scene" />
        <div className="scene-midground-moving-elements">
          <img className="boy-at-bus-stop" src={boyBusStop} alt="boy at a bus stop" />
          <img className="boy-at-bus-stop-arm" src={boyBusStopArm} alt="boy at a bus stop" />
          <img className="dog-walker-1" src={dogWalker1} alt="dog-walker" />
          <img className="man-standing" src={manStanding} alt="man" />
          <img className="wisp-1" src={wisp1} alt="wisp" />
          <img className="wisp-2" src={wisp2} alt="wisp" />
          <img className="dog-walker-2" src={dogWalker2} alt="dog-walker" />
          <img className="flower flower-1" src={pinkFlower} alt="flower" />
          <img className="flower flower-2" src={yellowFlower} alt="flower" />
          <img className="dog-walker-3" src={dogWalker3} alt="dog-walker" />
          <img className="turbine-1" src={turbine1} alt="turbine" />
          <img className="turbine-2" src={turbine2} alt="turbine" />
          <img className="turbine-3" src={turbine3} alt="turbine" />
          <img className="turbine-4" src={turbine4} alt="turbine" />
          <img className="smoke-1" src={smoke1} alt="smoke" />
          <img className="smoke-2" src={smoke2} alt="smoke" />
          <img className="smoke-3" src={smoke3} alt="smoke" />
          <img className="diesel-bus" src={dieselBus} alt="bus" />
        </div>
      </div>
    </Holder>
  )
})

export default SceneMidAndBackground;
