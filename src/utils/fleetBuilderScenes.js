const lift = (gsap, q, duration) => {
  let tl = gsap.timeline()
  tl.set(q('.lift'), { autoAlpha: 1 }).fromTo(q('.lift-verticals'), {
    scaleY: 0,
  },{
    scaleY: 1,
    transformOrigin: 'bottom center',
    duration: duration,
  }, 0).fromTo(q('.lift-top'), {
    yPercent: 1100,
  },{
    yPercent: 0,
    transformOrigin: 'bottom center',
    duration: duration,
  }, 0).fromTo(q('.lift-cross-1'), {
    yPercent: 0,
    rotation: 0,
  }, {
    yPercent: -900,
    rotation: 35,
    transformOrigin: 'center center',
    duration: duration,
  }, 0).fromTo(q('.lift-cross-2'), {
    yPercent: 0,
    rotation: 0,
  },{
    yPercent: -900,
    rotation: -35,
    transformOrigin: 'center center',
    duration: duration,
  }, 0).fromTo(q('.lift-cross-3'), {
    yPercent: 0,
    rotation: 0,
  },{
    yPercent: -635,
    rotation: 35,
    transformOrigin: 'center center',
    duration: duration,
  }, 0).fromTo(q('.lift-cross-4'), {
    yPercent: 0,
    rotation: 0,
  },{
    yPercent: -635,
    rotation: -35,
    transformOrigin: 'center center',
    duration: duration,
  }, 0).fromTo(q('.lift-cross-5'), {
    yPercent: 0,
    rotation: 0,
  },{
    yPercent: -365,
    rotation: 35,
    transformOrigin: 'center center',
    duration: duration,
  }, 0).fromTo(q('.lift-cross-6'), {
    yPercent: 0,
    rotation: 0,
  },{
    yPercent: -365,
    rotation: -35,
    transformOrigin: 'center center',
    duration: duration,
  }, 0).fromTo(q('.lift-cross-7'), {
    yPercent: 0,
    rotation: 0,
  },{
    yPercent: -100,
    rotation: 35,
    transformOrigin: 'center center',
    duration: duration,
  }, 0).fromTo(q('.lift-cross-8'), {
    yPercent: 0,
    rotation: 0,
  },{
    yPercent: -100,
    rotation: -35,
    transformOrigin: 'center center',
    duration: duration,
  }, 0)
  return tl;
}
const liftBackwards = (gsap, q, duration) => {
  let tl = gsap.timeline()
  tl.fromTo(q('.lift-verticals'), {
    scaleY: 1,
  },{
    scaleY: 0,
    transformOrigin: 'bottom center',
    duration: duration,
    ease: 'power1.in',
  }, 0).fromTo(q('.lift-top'), {
    yPercent: 0,
  },{
    yPercent: 1100,
    transformOrigin: 'bottom center',
    duration: duration,
    ease: 'power1.in',
  }, 0).fromTo(q('.lift-cross-1'), {
    yPercent: -900,
    rotation: 35,
  }, {
    yPercent: 0,
    rotation: 0,
    transformOrigin: 'center center',
    duration: duration,
    ease: 'power1.in',
  }, 0).fromTo(q('.lift-cross-2'), {
    yPercent: -900,
    rotation: -35,
  },{
    yPercent: 0,
    rotation: 0,
    transformOrigin: 'center center',
    duration: duration,
    ease: 'power1.in',
  }, 0).fromTo(q('.lift-cross-3'), {
    yPercent: -635,
    rotation: 35,
  },{
    yPercent: 0,
    rotation: 0,
    transformOrigin: 'center center',
    duration: duration,
    ease: 'power1.in',
  }, 0).fromTo(q('.lift-cross-4'), {
    yPercent: -635,
    rotation: -35,
  },{
    yPercent: 0,
    rotation: 0,
    transformOrigin: 'center center',
    duration: duration,
    ease: 'power1.in',
  }, 0).fromTo(q('.lift-cross-5'), {
    yPercent: -365,
    rotation: 35,
  },{
    yPercent: 0,
    rotation: 0,
    transformOrigin: 'center center',
    duration: duration,
    ease: 'power1.in',
  }, 0).fromTo(q('.lift-cross-6'), {
    yPercent: -365,
    rotation: -35,
  },{
    yPercent: 0,
    rotation: 0,
    transformOrigin: 'center center',
    duration: duration,
    ease: 'power1.in',
  }, 0).fromTo(q('.lift-cross-7'), {
    yPercent: -100,
    rotation: 35,
  },{
    yPercent: 0,
    rotation: 0,
    transformOrigin: 'center center',
    duration: duration,
    ease: 'power1.in',
  }, 0).fromTo(q('.lift-cross-8'), {
    yPercent: -100,
    rotation: -35,
  },{
    yPercent: 0,
    rotation: 0,
    transformOrigin: 'center center',
    duration: duration,
    ease: 'power1.in',
  }, 0).set(q('.lift'), { autoAlpha: 0 })
  return tl;
}
export const fbScene = (gsap, q, sceneDuration, mobile = false) => {

  // Bus lift vars
  const busUpTime = mobile ? 0.75 : 0.778;
  const busDownTime = mobile ? 0.8 : 0.9;
  const busIsUpDuration = busDownTime - busUpTime;
  const busLiftDuration = busIsUpDuration * sceneDuration / 4;
  const busPauseUpDuration = busIsUpDuration * sceneDuration / 2;
  const sceneEndingDuration = 1 - busDownTime;

  const busUpTimeTl = lift(gsap, q, busLiftDuration)
  const busDownTimeTl = liftBackwards(gsap, q, busLiftDuration)

  let tl = gsap.timeline()
  tl.to(q('.scene-inner, .scene-stationary-foreground'), {
    x: `${100 * busUpTime}vw`,
    xPercent: -100 * busUpTime,
    duration: sceneDuration * busUpTime,
    ease: 'none',
  }).to(q('.scene-background'), {
    xPercent: 100 * busUpTime,
    duration: sceneDuration * busUpTime,
    ease: 'none',
  }, 0).to(q('.scene-foreground-holder'), {
    x: `${100 * busUpTime}vw`,
    xPercent: -100 * busUpTime,
    duration: sceneDuration * busUpTime,
    ease: 'none',
  }, 0).to(q('.bus'), {
    yPercent: -160,
    duration: busLiftDuration,
  }).add(busUpTimeTl, '<').to(q('.bus'), {
    yPercent: 0,
    duration: busLiftDuration,
    delay: busPauseUpDuration,
    ease: 'power1.in',
  }).add(busDownTimeTl, `-=${busLiftDuration}`).to(q('.scene-inner, .scene-stationary-foreground'), {
    x: `100vw`,
    xPercent: -100,
    duration: sceneDuration * sceneEndingDuration,
    ease: 'none',
  }).to(q('.scene-background'), {
    xPercent: 100,
    duration: sceneDuration * sceneEndingDuration,
    ease: 'none',
  }, '<').to(q('.scene-foreground-holder'), {
    x: `100vw`,
    xPercent: -100,
    duration: sceneDuration * sceneEndingDuration,
    ease: 'none',
  }, '<').to(q('.scene-inner, .scene-stationary-foreground'), {
    scale: 3,
    transformOrigin: '98% 60%',
    duration: 2,
    ease: 'power1.in',
  }).to(q('.busHolder'), {
    autoAlpha: 0,
    duration: 0.1,
  }, '<')
  return tl;
}

export const graphPaper = (gsap, q) => {
  let tl = gsap.timeline()
  tl.to(q('.plan-bus'), {
    x: '290vh',
    duration: 5,
    ease: 'none',
  }).to(q('.plan-bus-lines'), {
    autoAlpha: 1,
    duration: 0.001,
    ease: 'none',
  }, 1).to(q('.plan-bus-squiggles'), {
    autoAlpha: 1,
    duration: 0.001,
    ease: 'none',
  }, 1.5)
  return tl;
}


export const smallActions = (gsap, q, mobile = false) => {
  let tl = gsap.timeline()
  tl.to(q('.boy-at-bus-stop, .boy-at-bus-stop-arm'), {
    autoAlpha: 0,
    duration: 0.001,
    ease: 'none',
  }, mobile ? 3 : 1).to(q('.boy-on-bus'), {
    autoAlpha: 1,
    duration: 0.001,
    ease: 'none',
  }, '<').to(q('.dog-walker-1'), {
    xPercent: 200,
    duration: 4,
    ease: 'none',
  }, 0).fromTo(q('.dog-walker-2'), {
    xPercent: -50,
  }, {
    xPercent: 0,
    duration: 1,
    ease: 'none',
  }, 2).fromTo(q('.man-standing'), {
    xPercent: 50,
  }, {
    xPercent: 0,
    duration: 1,
    ease: 'none',
  }, 2).to(q('.dog-walker-3'), {
    xPercent: 200,
    duration: 4,
    ease: 'none',
  }, 10)
  return tl;
}


export const features = (gsap, q, mobile = false) => {
  let tl = gsap.timeline()
  tl.to(q('.phone-holder'), {
    yPercent: 0,
    duration: 1,
  }).to(q('.scene-inner, .scene-stationary-foreground'), {
    autoAlpha: 0,
    duration: 0.5,
  }, 0).fromTo(q('.phone-text'), {
    autoAlpha: 0,
  },{
    autoAlpha: 1,
    duration: 1,
  }).fromTo(q('.phone-text .feature, .phone-text button'), {
    autoAlpha: 0,
    y: 40,
  }, {
    autoAlpha: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.5
  }).fromTo(q('.dashboard-2'), {
    autoAlpha: 0,
  }, {
    autoAlpha: 1,
    duration: 0.001,
    ease: 'none',
  }, 3).fromTo(q('.dashboard-3'), {
    autoAlpha: 0,
  }, {
    autoAlpha: 1,
    duration: 0.001,
    ease: 'none',
  }, 3.5)
  return tl;
}


export const sceneText = (gsap, q) => {
  const keyframes = {
    "0%": {y: 50, autoAlpha: 0},
    "25%": {y: 0, autoAlpha: 1},
    "75%": {y: 0, autoAlpha: 1},
    "100%": {y: -50, autoAlpha: 0},
  }

  let tl = gsap.timeline()
  tl.to(q('.scene-text:nth-child(1)'), {
    keyframes: {
      "0%": {y: 0, autoAlpha: 1},
      "75%": {y: 0, autoAlpha: 1},
      "100%": {y: -50, autoAlpha: 0},
    },
    duration: 1.5,
  }).to(q('.scene-text:nth-child(2)'), {
    keyframes: keyframes,
    duration: 2.5,
  }, 1.5).to(q('.scene-text:nth-child(3)'), {
    keyframes: keyframes,
    duration: 2.5,
  }, 4).to(q('.scene-text:nth-child(4)'), {
    keyframes: keyframes,
    duration: 3.5,
  }, 8).to(q('.scene-text:nth-child(5)'), {
    keyframes: keyframes,
    duration: 3.5,
  }, 12).to(q('.scene-text:nth-child(6)'), {
    keyframes: keyframes,
    duration: 2.5,
  }, 15.5).to(q('.scene-text:nth-child(7)'), {
    keyframes: keyframes,
    duration: 2.5,
  }, 18).to(q('.scene-text:nth-child(8)'), {
    keyframes: keyframes,
    duration: 4,
  }, 20.5).to(q('.scene-text:nth-child(9)'), {
    keyframes: keyframes,
    duration: 3,
  }, 24.5).to(q('.scene-text:nth-child(10)'), {
    keyframes: keyframes,
    duration: 2,
  }, 28)
  return tl;
}