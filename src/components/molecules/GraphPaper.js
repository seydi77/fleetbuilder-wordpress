import React from 'react';
import styled from 'styled-components';
import graphPaper from "../../assets/fleet-builder/graph-paper.png";
import busImg from "../../assets/fleet-builder/graph-bus.png";
import busLinesImg from "../../assets/fleet-builder/graph-bus-lines.png";
import busSquigglesImg from "../../assets/fleet-builder/graph-bus-squiggles.png";

const Holder = styled.div`
  position: absolute;
  top: 0;
  left: 30.06%;
  height: 100%;
  overflow: hidden;

  .graph-paper {
    display: block;
    width: auto;
    height: 100%;
  }

  .plan-bus {
    width: 110vh;
    position: absolute;
    bottom: -4vh;
    right: 100%;
    will-change: transform;
    .plan-bus-squiggles {
      display: block;
      width: 100%;
      height: auto;
      opacity: 0;
      will-change: transform;
    }
    .plan-bus-lines {
      position: absolute;
      top: 10%;
      left: 8%;
      width: 86.14%;
      height: auto;
      opacity: 0;
      will-change: transform;
    }
    .plan-bus-bus {
      position: absolute;
      top: 23.1%;
      left: 14.75%;
      width: 70.41%;
      height: auto;
    }
  }
  }
`;

function GraphPaper() {

  return (
    <Holder>
      <img className="graph-paper" src={graphPaper} alt="plan" />
      <div className="plan-bus">
        <img className="plan-bus-squiggles" src={busSquigglesImg} alt="Bus" />
        <img className="plan-bus-lines" src={busLinesImg} alt="Bus" />
        <img className="plan-bus-bus" src={busImg} alt="Bus" />
      </div>
    </Holder>
  )
}

export default GraphPaper;