import React from 'react';
import styled from 'styled-components';
import garageDoor from "../../assets/fleet-builder/garage-door.png";
import mechanic from "../../assets/fleet-builder/mechanic.png";
import GraphPaper from "./GraphPaper";
import PropTypes from "prop-types";

const Holder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${props => props.width}px;
  z-index: 6;
  will-change: transform;

  .garage-door {
    position: absolute;
    top: 0;
    width: auto;
    height: 100%;
    left: 67.5%;

    &.out {
      left: 87.54%;
    }
  }
  .mechanic {
    position: absolute;
    top: 50%;
    width: auto;
    height: 40%;
    left: 97.5%;
  }
`;

function SceneStationaryForeground({width}) {
  return (
    <Holder className="scene-stationary-foreground" width={width}>
      <img className="garage-door" src={garageDoor} alt="garage door" />
      <img className="garage-door out" src={garageDoor} alt="garage door" />
      <img className="mechanic" src={mechanic} alt="garage door" />
      <GraphPaper/>
    </Holder>
  )
}

// Set up prop types
SceneStationaryForeground.propTypes = {
  width: PropTypes.number.isRequired
}

export default SceneStationaryForeground;