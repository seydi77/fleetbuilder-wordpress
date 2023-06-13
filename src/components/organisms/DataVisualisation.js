import React from 'react'
import styled from 'styled-components'
import DataVisBusGrid from '../molecules/DataVisBusGrid'
import DataVisDeploymentSchedule from '../molecules/DataVisDeploymentSchedule'
import DataVisIntro from "../molecules/DataVisIntro";

const Holder = styled.div`
  height: var(--windowHeight);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  position: relative;
  z-index: 2;
  background-color: var(--grey4);
  background-size: 1rem 1rem;
  background-image: linear-gradient(to right, #ECECEC 1px, transparent 1px),
  linear-gradient(to bottom, #ECECEC 1px, transparent 1px);
  @media (${props => props.theme.breakpoints.lg}) {
    grid-template-rows: 2fr 1fr;
  }
`

const BusHolder = styled.div`
  position: relative;
  height: 100%;
  padding: 1rem;
  @media ( ${props => props.theme.breakpoints.sm} ) {
    padding: 2rem;
  }
`

const DeploymentHolder = styled.div`
  padding: 1rem;
  background-color: var(--grey4);
  @media ( ${props => props.theme.breakpoints.sm} ) {
    padding: 2rem;
  }
  h2 {
    width: 100%;
    text-align: center;
    margin-top: 0;
    ${props => props.theme.fluidType(0)};
    @media ( ${props => props.theme.breakpoints.sm} ) {
      ${props => props.theme.fluidType(1)};
    }
    @media ( ${props => props.theme.breakpoints.lg} ) {
      ${props => props.theme.fluidType(1)};
    }
  }
`

function DataVisualisation() {

  return (
    <Holder>
      <BusHolder>
        <DataVisBusGrid />
      </BusHolder>
      <DeploymentHolder>
        <h2>Your Sample Deployment Schedule*</h2>
        <DataVisDeploymentSchedule />
      </DeploymentHolder>
      <DataVisIntro />
    </Holder>
  )
}

export default DataVisualisation