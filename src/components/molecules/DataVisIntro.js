import React from 'react';
import styled from 'styled-components';
import buses from '../../assets/fleet-builder/bus-outline.png';
import intro1 from '../../assets/fleet-builder/intro-1.png';
import intro2 from '../../assets/fleet-builder/intro-2.png';

const Holder = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--grey4);
  background-size: 1rem 1rem;
  background-image: linear-gradient(to right, #ECECEC 1px, transparent 1px),
  linear-gradient(to bottom, #ECECEC 1px, transparent 1px);
  border-bottom: 1px solid #8a8a8a;
  display: none;
  will-change: transform;
  @media ( ${props => props.theme.breakpoints.lg} ) {
    display: grid;
    grid-template-columns: 5fr 7fr;
    grid-gap: 1.5rem;
    padding: 5rem 2rem 3rem 2rem;
  }
  .item {
    border: 1px solid #C5C6C7;
    border-radius: 20px;
    position: relative;
    img {
      position: absolute;
      top: 10%;
      left: 10%;
      width: 80%;
      height: 80%;
      object-fit: contain;
    }
    &.main {
      grid-column: span 2;
    }
    &.graph {
      img {
        opacity: 0.3;
      }
    }
  }
`;

function DataVisIntro() {
  return (
    <Holder className="data-vis-intro">
      <div className="item main">
        <img src={buses} alt="bus outlines"/>
      </div>
      <div className="item graph">
        <img src={intro1} alt="graph"/>
      </div>
      <div className="item graph">
        <img src={intro2} alt="graph"/>
      </div>
    </Holder>
  )
}

export default DataVisIntro;