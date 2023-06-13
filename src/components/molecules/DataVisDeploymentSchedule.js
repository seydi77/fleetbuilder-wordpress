import React from 'react'
import styled from 'styled-components'
import {useStore} from '../../utils/store'

const Holder = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${props => `1fr repeat(${props.cols}, 1fr)`};
  border: 1px solid var(--grey6);
  border-top: 0;
  background-color: var(--grey4);
  border-radius: 8px;
  overflow: hidden;
  @media ( ${props => props.theme.breakpoints.sm} ) {
    grid-template-columns: ${props => `3fr repeat(${props.cols}, 1fr)`};
  }

  > :last-child {
    margin-bottom: 0.5rem;
  }

  .heading, .number {
    display: flex;
    align-items: center;
    background-color: var(--grey6);
    padding: 5px;
    margin-bottom: 0.25rem;
  }

  p.small, .heading {
    margin: 0;
    font-size: 0.5rem;
    @media ( ${props => props.theme.breakpoints.sm} ) {
      ${props => props.theme.fluidType(-2)};
    }
    @media ( ${props => props.theme.breakpoints.xl} ) {
      ${props => props.theme.fluidType(0)};
    }
  }
`

const Row = styled.div`
  grid-column: 2 / span ${props => props.cols};
  display: grid;
  grid-template-columns: ${props => `repeat(${props.cols}, 1fr)`};
  margin: 0.25rem;
  &.firstRow {
    margin-top: 0.5rem;
  }
  &:last-child {
    margin-bottom: 0.5rem;
  }
  @media( ${props => props.theme.breakpoints.sm} ) {
    margin: 0.5rem;
    &.firstRow {
      margin-top: 1rem;
    }
    &:last-child {
      margin-bottom: 1rem;
    }
  }
  @media( ${props => props.theme.breakpoints.lg} ) {
    margin: 0.25rem;
    &.firstRow {
      margin-top: 0.5rem;
    }
    &:last-child {
      margin-bottom: 0.5rem;
    }
  }

  .busBar {
    grid-column-start: ${props => props.start};
    grid-column-end: span ${props => props.span};
    background-color: var(--yellow);
    border-radius: 2rem 0 0 2rem;
    padding: 0.1rem 0.5rem;
    display: flex;
    align-items: center;
    @media ( ${props => props.theme.breakpoints.sm} ) {
      padding: 0.2rem 1rem;
    }
  }

  .renewalDeployments {
    grid-column: span ${props => props.rdSpan};
    background-color: var(--grey6);
    padding: 0.2rem 2rem 0.2rem 0.5rem;
    display: flex;
    align-items: center;
    clip-path: polygon(0 0%, 80% 0%, 100% 50%, 100% 50%, 80% 100%, 0% 100%, 0% 80%, 0% 0);

    p.small {
      ${props => props.theme.fluidType(-4)};
      @media ( ${props => props.theme.breakpoints.sm} ) {
        ${props => props.theme.fluidType(-2)};
      }
    }
  }
`

const Notes = styled.div`
  margin-top: 0.5rem;
  p.small {
    ${props => props.theme.fluidType(-4)};
    margin: 0;
    @media ( ${props => props.theme.breakpoints.sm} ) {
      ${props => props.theme.fluidType(-1)};
    }
  }
`

function DataVisDeploymentSchedule() {
  const fbElectricGoal = useStore((state) => state.fbElectricGoal)
  const fbDeployments = useStore((state) => state.fbDeployments)
  const fbServiceYears = useStore((state) => state.fbServiceYears)

  const deployments = Number(fbDeployments)
  const serviceYears = Number(fbServiceYears)
  const busesPerRow = Math.floor(Number(fbElectricGoal) / deployments)
  const remainder = Number(fbElectricGoal) % deployments
  const years = serviceYears + deployments

  const numbers = []
  for (let i = 0; i < years; i++) {
    numbers.push(<div key={i} className="heading number"><p className="small">{i + 1}</p></div>)
  }

  const rows = []
  for (let i = 0; i < deployments; i++) {
    rows.push(<Row
      key={i}
      className={i === 0 ? 'firstRow' : ''}
      span={serviceYears}
      cols={years}
      start={i + 1}
      rdSpan={years - serviceYears - i}>
      <div className="busBar"><p
        className="small">{i < deployments - remainder ? busesPerRow : busesPerRow + 1} Buses</p></div>
      <div className="renewalDeployments"><p className="small">{i === 0 ? 'R.D.**' : 'R.D.'}</p>
      </div>
    </Row>)
  }

  return (
    <div>
      <Holder cols={years}>
        <div className="heading">Year</div>
        {numbers}
        {rows}
      </Holder>
      <Notes>
        <p className="small">*Deployment schedule displayed is illustrative only.</p>
        <p className="small">**Renewal Deployments.</p>
      </Notes>
    </div>
  )
}

export default DataVisDeploymentSchedule