import React from 'react';
import styled from 'styled-components';
import tree1 from "../../assets/fleet-builder/fg-tree-1.png";
import tree2 from "../../assets/fleet-builder/fg-tree-2.png";
import tree3 from "../../assets/fleet-builder/fg-tree-3.png";
import tree4 from "../../assets/fleet-builder/fg-tree-4.png";
import PropTypes from "prop-types";

const Holder = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 30%;
  width: ${props => props.width}px;
  z-index: 10;
  will-change: transform;

  img {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 100%;
    width: auto;
    &:nth-child(1) { left: 4%; }
    &:nth-child(2) { left: 20%; }
    &:nth-child(3) { left: 25%; }
    &:nth-child(4) { left: 40%; }
    &:nth-child(5) { left: 42%; }
    &:nth-child(6) { left: 50%; }
    &:nth-child(7) { left: 53%; }
    &:nth-child(8) { left: 60%; }
    &:nth-child(9) { left: 62%; }
    &:nth-child(10) { left: 65%; }
    &:nth-child(11) { left: 91%; }
  }
`;

function SceneForeground({width}) {
  return (
    <Holder className="scene-foreground-holder" width={width}>
      <img src={tree1} alt="tree" />
      <img src={tree2} alt="tree" />
      <img src={tree3} alt="tree" />
      <img src={tree4} alt="tree" />
      <img src={tree1} alt="tree" />
      <img src={tree2} alt="tree" />
      <img src={tree3} alt="tree" />
      <img src={tree1} alt="tree" />
      <img src={tree2} alt="tree" />
      <img src={tree3} alt="tree" />
      <img src={tree4} alt="tree" />
    </Holder>
  )
}

SceneForeground.propTypes = {
  width: PropTypes.number.isRequired
}

export default SceneForeground;