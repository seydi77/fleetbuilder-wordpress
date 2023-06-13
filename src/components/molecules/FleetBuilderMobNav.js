import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import BtnSvg from '../../assets/svg/mob-nav-button.inline.svg';

const Holder = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    margin: 0;
    transition: opacity 0.5s ease;
    &.hide {
      opacity: 0;
    }
    &.next {
      transform: rotate(180deg);
    }
    svg {
      height: 2rem;
      overflow: visible;
      @media ( ${props => props.theme.breakpoints.sm} ) {
        height: 3rem;
      }
      path {
        stroke: ${props => props.theme.colours.white};
      }
    }
  }
  @media ( ${props => props.theme.breakpoints.sm} ) {
    padding: 2rem;
  }
  @media ( ${props => props.theme.breakpoints.lg} ) {
    padding: 1rem;
    display: none;
  }
`;

function FleetBuilderMobNav({nextHandler, prevHandler, hidePrev, hideNext}) {

  const nextClasses = `icon next ${hideNext ? 'hide' : ''}`;
  const prevClasses = `icon prev ${hidePrev ? 'hide' : ''}`;
  return (
    <Holder>

      {prevHandler &&
        <button className={prevClasses} onClick={() => prevHandler()}><BtnSvg/></button>}

      {nextHandler &&
        <button className={nextClasses} onClick={() => nextHandler()}><BtnSvg/></button>}

    </Holder>
  )
}

FleetBuilderMobNav.propTypes = {
  nextHandler: PropTypes.func,
  prevHandler: PropTypes.func,
  hidePrev: PropTypes.bool,
  hideNext: PropTypes.bool,
}

export default FleetBuilderMobNav;