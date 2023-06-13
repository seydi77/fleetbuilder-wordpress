import React from 'react';
import styled from 'styled-components';
import {useStore} from "../../utils/store";

const TextHolder = styled.div`
  width: calc(100% - 40px);
  max-width: 400px;
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 7;
  
  @media( ${props => props.theme.breakpoints.sm} ) {
    top: 100px;
  }

  @media( ${props => props.theme.breakpoints.lg} ) {
    left: 2rem;
  }
  @media( ${props => props.theme.breakpoints.xl} ) {
    top: 140px;
  }
`;

const Text = styled.div.attrs(props => ({
  className: "scene-text",
}))`
  background-color: white;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  will-change: transform, opacity;
  width: 100%;
  &:nth-child(1) {
    opacity: 1;
  }
  p {
    font-size: 18px;
    margin: 0;
    font-weight: bold;
    @media( ${props => props.theme.breakpoints.lg} ) {
      font-size: 22px;
    }
  }
  .highlight {
    display: inline-block;
    background-color: var(--blue);
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;
    margin-top: 0.5rem;
  }
  .list {
    p {
      ${props => props.theme.fluidType(-1)};
      margin: 0.5rem 0;
      span {
        ${props => props.theme.fluidType(-2)};
        padding: 0.5rem;
        background-color: ${props => props.theme.colours.green};
        color: ${props => props.theme.colours.white};
        font-weight: normal;
        height: 1.1rem;
        width: 1.1rem;
        margin-right: 0.5rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
      }
    }
  }
`

function SceneText() {
  const fbElectricGoal = useStore((state) => state.fbElectricGoal)
  return (
    <TextHolder>
      <Text><p>Here’s what you’ll get with Highland...</p></Text>
      <Text><p>Electrifying {fbElectricGoal} buses will make a meaningful difference in the health of your
        community.</p>
        <p><span className="highlight">~{(600 * fbElectricGoal).toLocaleString('en-US')} fewer gallons of diesel.</span></p>
      </Text>
      <Text>
        <p>Highland makes it simple to upgrade your fleet. Here’s what it includes:</p>
        <div className="list">
          <p><span>1</span>Buses</p>
          <p><span>2</span>Chargers</p>
          <p><span>3</span>Electricity</p>
          <p><span>4</span>Training</p>
          <p><span>5</span>Warranty & Maintenance</p>
          <p><span>6</span>Dashboard</p>
        </div>
      </Text>
      <Text><p>Every bus is designed to your district's specifications.</p></Text>
      <Text><p>To charge your electric fleet, Highland will install charging stations at depots - at least one plug per bus</p></Text>
      <Text><p>Highland includes charge management and the cost of electricity in your contract,
        ensuring your buses are charged and route-ready for every run.</p></Text>
      <Text><p>For your {fbElectricGoal} buses, that’s equivalent to as much as ~{(600 * fbElectricGoal).toLocaleString('en-US')} gallons of diesel. </p></Text>
      <Text><p>Highland trains your drivers and mechanics so they’re up to speed on the latest
        technology. </p></Text>
      <Text><p>We also include a bumper-to-bumper warranty on every bus – beyond manufacturer
        warranties – and reimburse your district for 100% of maintenance costs that your maintenance team
        performs. </p></Text>
      <Text><p>And you get the Highland Dashboard platform, the easiest way to manage your electric
        fleet.
      </p></Text>
    </TextHolder>
  )
}

export default SceneText;