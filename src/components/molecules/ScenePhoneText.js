import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const PhoneTextHolder = styled.div`
  width: 100vw;
  position: fixed;
  top: 50%;
  right: 0;
  bottom: 0;
  z-index: 15;
  padding: 0.5rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  font-weight: bold;
  will-change: transform;
  @media( ${props => props.theme.breakpoints.sm} ) {
    top: 65%;
  }
  @media( ${props => props.theme.breakpoints.lg} ) {
    width: 50vw;
    top: 0;
    padding: 5rem;
    align-items: flex-start;
    justify-content: center;
  }
  button {
    display: none;
    will-change: transform;
    @media( ${props => props.theme.breakpoints.lg} ) {
      display: block;
      margin-top: 1rem;
    }
  }

  p {
    ${props => props.theme.fluidType(-1)};
    text-align: center;

    &.feature {
      ${props => props.theme.fluidType(1)};
      will-change: transform;
    }
    @media( ${props => props.theme.breakpoints.lg} ) {
      ${props => props.theme.fluidType(0)};
      margin: 1.5rem 0;
      text-align: left;

      &.feature {
        ${props => props.theme.fluidType(2)};
        margin: 0.75rem 0;
      }
    }
  }
`;

function ScenePhoneText(props) {
  return (
    <PhoneTextHolder className="phone-text">
      <div>
        <p>With Dashboard, Your Team Can</p>
        <p className="feature">Track Bus Locations</p>
        <p className="feature">See Every Bus’ State of Charge</p>
        <p className="feature">View Vehicle Route History</p>
      </div>
      <button onClick={() => props.dClickHandler()}>Download Full Fleet Report</button>
    </PhoneTextHolder>
  )
}

ScenePhoneText.propTypes = {
  dClickHandler: PropTypes.func.isRequired,
};

export default ScenePhoneText;