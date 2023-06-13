import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import useScrollTrigger from "../../hooks/useScrollTrigger";
import FleetReport from "./FleetReport";
import FleetBuilderData from "./FleetBuilderData";
import {fbDesktopTl} from "../../utils/fleetBuilderDesktopTimeline";
import {fbMobileTl} from "../../utils/fleetBuilderMobileTimeline";
import SceneBus from "../molecules/SceneBus";
import ScenePhone from "../molecules/ScenePhone";
import ScenePhoneText from "../molecules/ScenePhoneText";
import SceneText from "../molecules/SceneText";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import SceneHeader from "../molecules/SceneHeader";
import {useMeasure} from "react-use";
import SceneForeground from "../molecules/SceneForeground";
import SceneStationaryForeground from "../molecules/SceneStationaryForeground";
import SceneMidAndBackground from "../molecules/SceneMidAndBackground";
import FleetBuilderMobNav from "../molecules/FleetBuilderMobNav";
import {useStore} from "../../utils/store";

const Holder = styled.div`
  height: var(--windowHeight);
  overflow: hidden;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  will-change: transform;

  .desktop-button {
    display: none;
    @media ( ${props => props.theme.breakpoints.lg} ) {
      display: block;
    }
  }

  .mobile-button {
    @media ( ${props => props.theme.breakpoints.lg} ) {
      display: none;
    }
  }
`;
const breakPoint = 992;
const sceneDuration = 28;
const mStepData = [
  {label: 'intro', dvHolderX: 0, frHolderX: 0, showReport: false},
  {label: 'data-input-1', dvHolderX: 0, frHolderX: 0, showReport: false},
  {label: 'data-input-1', dvHolderX: 0, frHolderX: 0, showReport: false},
  {label: 'data-vis', dvHolderX: -100 / 3, frHolderX: 0, showReport: false},
  {label: 'data-output-1', dvHolderX: -100 / 3 * 2, frHolderX: 0, showReport: false},
  {label: 'data-output-2', dvHolderX: -100 / 3 * 2, frHolderX: 0, showReport: false},
  {label: 'scene-1', dvHolderX: -100, frHolderX: 0, showReport: false, scenePosition: 0},
  {label: 'scene-2', dvHolderX: -100, frHolderX: 0, showReport: false, scenePosition: 2.75},
  {label: 'scene-3', dvHolderX: -100, frHolderX: 0, showReport: false, scenePosition: 4.68},
  {label: 'scene-4', dvHolderX: -100, frHolderX: 0, showReport: false, scenePosition: 9.25},
  {label: 'scene-5', dvHolderX: -100, frHolderX: 0, showReport: false, scenePosition: 13},
  {label: 'scene-6', dvHolderX: -100, frHolderX: 0, showReport: false, scenePosition: 16.05},
  // Diesel
  {label: 'scene-7', dvHolderX: -100, frHolderX: 0, showReport: false, scenePosition: 18.4},
  // Training
  {label: 'scene-8', dvHolderX: -100, frHolderX: 0, showReport: false, scenePosition: 22},
  // Maintenance
  {label: 'scene-9', dvHolderX: -100, frHolderX: 0, showReport: false, scenePosition: 25.5},
  // Dashboard
  {label: 'scene-10', dvHolderX: -100, frHolderX: 0, showReport: false, scenePosition: 27.6},
  {label: 'scene-11', dvHolderX: -100, frHolderX: 0, showReport: false, scenePosition: -1},
  {label: 'fleet-report', dvHolderX: -100, frHolderX: -100, showReport: true},
  // {label: 'form', dvHolderX: -100, frHolderX: -100, showReport: true},
]

function FleetBuilderScene() {

  const {tl, holderRef, gsap, st, q, mm} = useScrollTrigger();
  const [innerRef, {width}] = useMeasure();
  const [showReport, setShowReport] = useState(false);
  const [showReportForm, setShowReportForm] = useState(false);
  // Mobile step state
  const [mStep, setMStep] = useState(0);
  const setFbScrollingForwards = useStore(state => state.setFbScrollingForwards);

  // TODO: Part of my work to implement dynamic values for positioning elements within the scene
  // const innerRef = useRef(null);
  // const [innerWidth, setInnerWidth] = useState(0);
  // const size = useWindowSize();

  // useEffect(() => {
  //   // setInnerWidth(innerRef.current.getBoundingClientRect().width);
  //   gsap.matchMediaRefresh()
  //   console.log('refreshed')
  // }, [size]);


  // Set up the main scrolling timelines
  useEffect(() => {
    if (!tl.current) {

      tl.current = mm.add(`(min-width: ${breakPoint}px)`, () => {

        // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
        gsap.registerPlugin(MorphSVGPlugin);
        st.normalizeScroll(true);
        st.config({
          ignoreMobileResize: true
        });

        st.saveStyles('.di-form-part-1, .di-form-part-2');
        gsap.set('.phone-holder', {yPercent: 100})
        gsap.set('.fleet-builder-data-holder', {xPercent: 0})
        gsap.set('.fleet-report-right', {xPercent: 100})
        gsap.set('.scroll-invitation-holder', {xPercent: 0})

        // Safari rendering bug
        // https://greensock.com/forums/topic/30156-safari-v15-rendering-bug/
        // gsap.config({ force3D: true });

        const deskTl = gsap.timeline({
          ease: 'none',
          id: "deskTl",
          scrollTrigger: {
            trigger: holderRef.current,
            start: "top top",
            end: `top -1400%`,
            pin: true,
            scrub: 0.5,
            id: 'fleet-builder-desk',
            anticipatePin: 1,
            invalidateOnRefresh: true,
            // set fbScrollingForwards to true if scrolling forwards using the onUpdate callback
            onUpdate: ({direction}) => {
              setFbScrollingForwards(direction === 1)
            },
            onRefresh: (self) => {
              // TODO: Implement this to get dynamic values for positioning elements within the scene. We will need to
              //  a dynamic time for when things hit the right of the bus. It is all to do with timing the plan bus
              //  with the pinned bus and lifting over the men in the garage. I am almost there but can't warrant the
              //  time in this push. Opted instead for some timings that "sort of work" on common screen ratios
              // console.log('refreshed')
              // const windowWidth = holderRef.current.getBoundingClientRect().width;
              // console.log('windowWidth', windowWidth);
              // const sceneWidth = innerRef.current.getBoundingClientRect().width;
              // console.log('sceneWidth', sceneWidth);
              // const lengthOfSceneMovement = sceneWidth - windowWidth;
              // console.log('lengthOfSceneMovement', lengthOfSceneMovement);
              // const percentPositionOfGraphInScene = 25;
              // console.log('percentPositionOfGraphInScene', percentPositionOfGraphInScene);
              // const numericalPositionOfGraphInScene = sceneWidth * (percentPositionOfGraphInScene / 100);
              // console.log('numericalPositionOfGraphInScene', numericalPositionOfGraphInScene);
              // const percentPositionOfGraphInSceneMovement = (numericalPositionOfGraphInScene / lengthOfSceneMovement) * 100;
              // console.log('percentPositionOfGraphInSceneMovement', percentPositionOfGraphInSceneMovement);
              // const timelineDuration = gsap.getById('deskTl').duration();
              // console.log('timelineDuration', timelineDuration);
              // const timeGraphWillBeAtWindowLeft = timelineDuration * (percentPositionOfGraphInSceneMovement / 100);
              // console.log('timeGraphWillBeAtWindowLeft', timeGraphWillBeAtWindowLeft);
            }
          }
        })
        fbDesktopTl(deskTl, gsap, q, holderRef, sceneDuration);

        return () => {
          gsap.set('.phone-holder', {yPercent: -100})
          setMStep(0)
        }
      });
    }
  }, [])

  // Set up the mobile output and the mobile scene timeline
  useEffect(() => {

    mm.add(`(max-width: ${breakPoint - 1}px)`, () => {

      // Mobile output timeline
      gsap.registerPlugin(MorphSVGPlugin);
      const mobileOutputTl = gsap.timeline({
        id: "mobileOutputTl",
      }).to(q('.data-outputs-line svg path:first-child'), {
        morphSVG: {
          shape: q('.data-outputs-line svg path:last-child'),
          rotational: true,
        },
        duration: 1,
        ease: 'none',
      }).to(q('.data-outputs-no-highland'), {
        autoAlpha: 0,
        duration: 0.1,
        delay: 0.4,
        ease: 'none',
      }, '<')
      // Pause and set playhead to 0
      mobileOutputTl.pause(0)



      // Mobile scene timeline

      gsap.set('.phone-holder', {yPercent: -100})
      const mobileSceneTl = gsap.timeline({
        ease: 'none',
        id: "mobileSceneTl",
      })
      fbMobileTl(mobileSceneTl, gsap, q, sceneDuration);
      // Pause and set playhead to 0
      mobileSceneTl.pause(0)

      return () => { // optional
        // custom cleanup code here (runs when it STOPS matching)
        gsap.set('.phone-holder', {yPercent: 100})
        gsap.set('.fleet-builder-data-holder', {xPercent: 0})
        gsap.set('.fleet-report-right', {xPercent: 100})
      };
    });

  }, [])

  // Mobile fleet report click handler
  const mFrClickHandler = (percent) => {
    gsap.to(q('.fleet-report-right'), {
      xPercent: percent,
      duration: 0.25,
    })
  }

  // Mobile data vis section click handler
  const mobileDataVisClickHandler = (percent) => {
    gsap.to(q('.fleet-builder-data-holder'), {
      xPercent: percent,
      duration: 0.25,
    })
  }

  // Mobile next and previous click handlers
  const mobileNextStep = () => {
    if (mStep < mStepData.length - 1) {
      setMStep(mStep + 1)
      // Move the data vis holder
      mobileDataVisClickHandler(mStepData[mStep + 1].dvHolderX)
      // Move the fleet report holder
      mFrClickHandler(mStepData[mStep + 1].frHolderX)
      // Play the data output timeline if needed
      if (mStepData[mStep].label === 'data-output-1') {
        // Play the timeline from the beginning
        gsap.getById('mobileOutputTl').tweenTo(1)
      }
      // Show the report if needed
      setShowReport(mStepData[mStep + 1].showReport)
      // // Show the report form if needed
      // if (mStepData[mStep].label === 'fleet-report') {
      //   setShowReportForm(true)
      // } else {
      //   setShowReportForm(false)
      // }
      // Tween to the correct scene position if needed
      if (mStepData[mStep + 1].label.includes('scene')) {
        if (mStepData[mStep + 1].scenePosition >= 0) {
          gsap.getById('mobileSceneTl').tweenTo(mStepData[mStep + 1].scenePosition)
        } else {
          gsap.getById('mobileSceneTl').tweenTo(gsap.getById('mobileSceneTl').duration())
        }
      }
    }
  }
  const mobilePrevStep = () => {
    if (mStep > 0) {
      setMStep(mStep - 1)
      // Move the data vis holder
      mobileDataVisClickHandler(mStepData[mStep - 1].dvHolderX)
      // Move the fleet report holder
      mFrClickHandler(mStepData[mStep - 1].frHolderX)
      // Play the data output timeline in reverse if needed
      if (mStepData[mStep].label === 'data-output-2') {
        // Play the timeline in reverse from the end
        gsap.getById('mobileOutputTl').tweenTo(0)
      }
      // Show the report if needed
      setShowReport(mStepData[mStep - 1].showReport)
      // // Hide the report form
      // setShowReportForm(false)
      // Tween to the correct scene position if needed
      if (mStepData[mStep - 1].label.includes('scene')) {
        if (mStepData[mStep - 1].scenePosition >= 0) {
          gsap.getById('mobileSceneTl').tweenTo(mStepData[mStep - 1].scenePosition)
        } else {
          gsap.getById('mobileSceneTl').tweenTo(gsap.getById('mobileSceneTl').duration())
        }
      }
    }
  }

  return (
    <>
      <Holder ref={holderRef}>
        <FleetBuilderData mStep={mStep} />
        <SceneMidAndBackground ref={innerRef} />

        <SceneBus />

        <SceneStationaryForeground width={width} />

        <ScenePhone />
        <ScenePhoneText dClickHandler={() => setShowReport(true)} />
        <SceneText />
        <SceneHeader />

        <SceneForeground width={width * 1.5}/>
      </Holder>

      <FleetBuilderMobNav
        prevHandler={() => mobilePrevStep()}
        nextHandler={() => mobileNextStep()}
        hideNext={mStep === mStepData.length - 1}
        hidePrev={mStep === 0} />

      <FleetReport
        show={showReport}
        showForm={showReportForm}
        hideReportHandler={() => setShowReport(false)}
        showReportFormHandler={(value) => setShowReportForm(value)} />
    </>
  )
}

export default FleetBuilderScene;