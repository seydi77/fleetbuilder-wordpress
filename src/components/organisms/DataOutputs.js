import React from 'react';
import styled from 'styled-components';
import {useStore} from "../../utils/store";
import BusPath from '../../assets/fleet-builder/data-output-path.inline.svg';

const Holder = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  background-color: #FFFEEA;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (${props => props.theme.breakpoints.sm}) {
    justify-content: start;
  }
  @media (${props => props.theme.breakpoints.lg}) {
    justify-content: space-between;
  }

  .data-outputs-inner {
    padding: 1rem;
    @media (${props => props.theme.breakpoints.sm}) {
      padding: 2rem;
    }
    @media (${props => props.theme.breakpoints.lg}) {
      padding: 2rem;
    }

    &.data-outputs-no-highland {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #E1F2EC;
      will-change: transform;
    }

    > :first-child { margin-top: 0; }

    > :last-child { margin-bottom: 0; }
  }

  .data-outputs-line {
    width: 100%;
    position: relative;
    z-index: 5;
    margin-bottom: 4rem;
    @media (${props => props.theme.breakpoints.xl}) {
      margin-bottom: 10rem;
    }

    svg {
      width: 100%;
      height: auto;
      display: block;

      path {
        will-change: transform;
        stroke-linejoin: round;
        stroke: rgba(171, 193, 185, 0.5);
      }

      path:last-child {
        opacity: 0;
      }
    }
  }
`;

const Intro = styled.div`
  min-height: 120px;
  @media ( ${props => props.theme.breakpoints.sm} ) {
    margin-bottom: 2rem;
  }
  @media (${props => props.theme.breakpoints.lg}) {
    min-height: 200px;
    margin-bottom: 0;
  }

  h3 {
    margin-top: 0;
    ${props => props.theme.fluidType(1)};
    @media ( ${props => props.theme.breakpoints.sm} ) {
      ${props => props.theme.fluidType(4)};
    }
    @media ( ${props => props.theme.breakpoints.lg} ) {
      ${props => props.theme.fluidType(1)};
    }
    @media ( ${props => props.theme.breakpoints.xl} ) {
      ${props => props.theme.fluidType(2)};
    }
  }

  p {
    ${props => props.theme.fluidType(-2)};
    @media ( ${props => props.theme.breakpoints.sm} ) {
      ${props => props.theme.fluidType(1)};
    }
    @media ( ${props => props.theme.breakpoints.lg} ) {
      ${props => props.theme.fluidType(-2)};
    }
    @media ( ${props => props.theme.breakpoints.xl} ) {
      ${props => props.theme.fluidType(0)};
    }
  }
`;

const ResourceTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .heading {
    grid-column: span 2;
  }

  h3, p {
    ${props => props.theme.fluidType(-2)};
    padding: 0.5rem 0;
    margin: 0;
    border-bottom: 1px solid #C4C4C4;
    @media ( ${props => props.theme.breakpoints.sm} ) {
      ${props => props.theme.fluidType(0)};
    }
    @media ( ${props => props.theme.breakpoints.lg} ) {
      ${props => props.theme.fluidType(-2)};
    }
    @media ( ${props => props.theme.breakpoints.xl} ) {
      ${props => props.theme.fluidType(-1)};
    }
  }

  h3, p:nth-child(even) {
    font-weight: bold;
  }
`;


function DataOutputs() {
  const fbElectricGoal = useStore((state) => state.fbElectricGoal)

  return (
    <Holder className="data-outputs-holder">

      <div className="data-outputs-inner data-outputs-highland">
        <Intro>
          <h3>Let Highland Shoulder the Load</h3>
          <p className="small">We support you by handling everything from project planning to grant applications, depot
            electrification to staff training.</p>
        </Intro>
        <ResourceTable>
          <h3 className="heading">Estimated Required Resources</h3>
          <p>{fbElectricGoal} buses</p>
          <p>At or below your diesel total cost of ownership</p>
          <p>Labor</p>
          <p>Included</p>
          <p>Planning & Implementation</p>
          <p>Included</p>
          <p>Full-Time Employees</p>
          <p>Included</p>
        </ResourceTable>
      </div>

      <div className="data-outputs-inner data-outputs-no-highland">
        <Intro>
          <h3>What it takes – on your own</h3>
          <p>Deploying {fbElectricGoal} electric buses is a great goal, but going it alone can be
            expensive and time consuming.</p>
        </Intro>
        <ResourceTable>
          <h3 className="h4 heading">Estimated Required Resources</h3>
          <p>{fbElectricGoal} buses</p>
          <p>~${(fbElectricGoal * 350000).toLocaleString("en-US")} USD</p>
          <p>Labor</p>
          <p>1000+ hours</p>
          <p>Planning &
            Implementation</p>
          <p
          >12 -18 months</p>
          <p>Dedicated resources</p>
          <p>5+ FTEs</p>
        </ResourceTable>
      </div>

      <div className="data-outputs-line">
        <BusPath />
      </div>

    </Holder>
  )
}

export default DataOutputs;