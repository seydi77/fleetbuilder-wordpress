import React from 'react';
import styled from 'styled-components';
import Icon from '../../assets/svg/icon.inline.svg';
import SceneNavigation from "./SceneNavigation";

const Holder = styled.div`
  display: none;
  @media ( ${props => props.theme.breakpoints.sm} ) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 90px;
  }

  svg {
    position: relative;
    z-index: 5;
    width: auto;
    height: 30px;

    path {
      fill: #3D4043;
    }
  }
`;

function SceneHeader() {
  return (
    <Holder className="scene-header">
      <a href="https://highlandfleets.com/"><Icon /></a>
      <SceneNavigation />
    </Holder>
  )
}

export default SceneHeader;