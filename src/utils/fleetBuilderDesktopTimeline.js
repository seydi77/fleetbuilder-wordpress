import {fbScene, features, graphPaper, sceneText, smallActions} from "./fleetBuilderScenes";

export const fbDesktopTl = (tl, gsap, q, holderRef, sceneDuration) => {

  const intro = () => {
    let tl = gsap.timeline();
    tl.to(q('.scroll-invitation-holder svg'), {
      autoAlpha: 0,
      scale: 0,
      transformOrigin: 'bottom 30%',
      duration: 0.5,
      delay: 2,
    }).to(q('.scroll-invitation-holder'), {
      xPercent: -150,
      duration: 0.5,
    })
    return tl;
  }
  const dataInputs = () => {
    let tl = gsap.timeline()
    tl.to(q('.di-form-part-1'), {
      autoAlpha: 1,
      duration: 0.5,
    }).to(q('.di-step-1-info'), {
      autoAlpha: 0,
      duration: 0.5,
      delay: 4,
    }).to(q('.di-step-2-info'), {
      autoAlpha: 1,
      duration: 0.5,
    }).to(q('.di-form-part-2'), {
      autoAlpha: 1,
      duration: 0.5,
    }, '<').to(q('.data-vis-intro'), {
      yPercent: -100,
      duration: 2,
    }, '<')
    return tl;
  }
  const dataVisualisation = () => {
    let tl = gsap.timeline()
    tl.to(q('.fleet-builder-data-holder'), {
      xPercent: -23.1,
      duration: 1,
      delay: 1,
    }).to(q('.first-bus-in-lot'), {
      motionPath: {
        path: () => {
          const bus = q('.first-bus-in-lot')[0].getBoundingClientRect()
          const grid = q('.data-vis-bug-grid')[0].getBoundingClientRect()
          const line = q('.data-outputs-line')[0].getBoundingClientRect()
          return [
            {x: -30, y: 10},
            {x: -30, y: grid.height + 50},
            {x: grid.width, y: grid.height + 50},
            {x: grid.width, y: line.y - bus.y + bus.height / 2},
            {x: Math.max(line.x - bus.x, grid.width), y: line.y - bus.y + bus.height},
            {x: Math.max(line.x - bus.x, grid.width) + line.width, y: line.y - bus.y + bus.height},
          ]
        },
        curviness: 0.25,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      id: 'busInLotTween',
      duration: 4,
      ease: 'none',
    }).to(q('.data-outputs-line svg path:first-child'), {
      morphSVG: {
        shape: q('.data-outputs-line svg path:last-child'),
        rotational: true,
      },
      duration: 1,
    }, '-=1.5').to(q('.data-outputs-no-highland'), {
      autoAlpha: 0,
      duration: 0.1,
      delay: 0.4,
    }, '<').to(q('.fleet-builder-data-holder'), {
      xPercent: -100,
      duration: 4,
      delay: 2,
    })
    return tl;
  }
  const header = (gsap, q) => {
    let tl = gsap.timeline()
    tl.to(q('.scene-navigation'), {
      autoAlpha: 1,
      duration: 0.5,
    }).to(q('.pill-holder-buses .active-pill'), {
      autoAlpha: 1,
      duration: 0.25,
      delay: 3,
    }).fromTo(q('.pill-holder-chargers .pill-holder-line'), {
      scaleX: 0,
    }, {
      scaleX: 1,
      transformOrigin: '0% 50%',
      duration: 3.5,
    }).to(q('.pill-holder-chargers .active-pill'), {
      autoAlpha: 1,
      duration: 0.25,
    }).fromTo(q('.pill-holder-electricity .pill-holder-line'), {
      scaleX: 0,
    }, {
      scaleX: 1,
      transformOrigin: '0% 50%',
      duration: 3.5,
    }).to(q('.pill-holder-electricity .active-pill'), {
      autoAlpha: 1,
      duration: 0.25,
    }).fromTo(q('.pill-holder-training .pill-holder-line'), {
      scaleX: 0,
    }, {
      scaleX: 1,
      transformOrigin: '0% 50%',
      duration: 5.25,
    }).to(q('.pill-holder-training .active-pill'), {
      autoAlpha: 1,
      duration: 0.25,
    }).fromTo(q('.pill-holder-warranty .pill-holder-line'), {
      scaleX: 0,
    }, {
      scaleX: 1,
      transformOrigin: '0% 50%',
      duration: 3,
    }).to(q('.pill-holder-warranty .active-pill'), {
      autoAlpha: 1,
      duration: 0.25,
    }).fromTo(q('.pill-holder-dashboard .pill-holder-line'), {
      scaleX: 0,
    }, {
      scaleX: 1,
      transformOrigin: '0% 50%',
      duration: 2.5,
    }).to(q('.pill-holder-dashboard .active-pill'), {
      autoAlpha: 1,
      duration: 0.25,
    })
    return tl;
  }

  return (
    tl.add(intro())
      .add(dataInputs())
      .add(dataVisualisation())
      .addLabel('start-scene')
      .add(fbScene(gsap, q, sceneDuration))
      .add(sceneText(gsap, q, sceneDuration), 'start-scene')
      .add(header(gsap, q), 'start-scene+=5')
      .add(graphPaper(gsap, q), 'start-scene+=7.5')
      .add(features(gsap, q))
      .add(smallActions(gsap, q), "start-scene")
  )
}