import {fbScene, features, graphPaper, sceneText, smallActions} from "./fleetBuilderScenes";

export const fbMobileTl = (tl, gsap, q, sceneDuration) => {
  return (
    tl.add(fbScene(gsap, q, sceneDuration, true))
      .add(sceneText(gsap, q, sceneDuration), 0)
      .add(graphPaper(gsap, q), 7.5)
      .add(features(gsap, q, true))
      .add(smallActions(gsap, q, true), 0)
  )
}