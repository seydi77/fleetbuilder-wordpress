import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Holder = styled.div`
  padding: 1.5rem;
  will-change: transform;
  @media ( ${props => props.theme.breakpoints.sm} ) {
    padding: 2rem;
  }

  .border-bottom-black {
    border-bottom: 1px solid var(--grey1);
  }
`

const GreenNumber = styled.span`
  ${props => props.theme.fluidType(-2)};
  padding: 0.5rem;
  background-color: ${props => props.theme.colours.green};
  color: ${props => props.theme.colours.white};
  font-weight: normal;
  height: 1.2rem;
  width: 1.2rem;
  margin-right: 0.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  @media ( ${props => props.theme.breakpoints.sm} ) {
    ${props => props.theme.fluidType(1)};
    height: 2rem;
    width: 2rem;
  }
  @media ( ${props => props.theme.breakpoints.lg} ) {
    ${props => props.theme.fluidType(-2)};
    height: 1.2rem;
    width: 1.2rem;
  }
`;

const TitleHolder = styled.div`
  margin-bottom: 2rem;
  
  @media ( ${props => props.theme.breakpoints.sm} ) {
    display: flex;
    justify-content: space-between;
  }

  h2, p {
    margin: 0;
  }

  h2 {
    ${props => props.theme.fluidType(2)};
    margin-bottom: 1rem;
    @media ( ${props => props.theme.breakpoints.sm} ) {
      ${props => props.theme.fluidType(4)};
    }
    @media ( ${props => props.theme.breakpoints.lg} ) {
      ${props => props.theme.fluidType(2)};
    }
    @media ( ${props => props.theme.breakpoints.xl} ) {
      margin-bottom: 0;
    }
  }
  p {
    display: none;
    @media ( ${props => props.theme.breakpoints.sm} ) {
      display: block;
    }
  }
`

const Section = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;
  margin-bottom: 2rem;
  @media ( ${props => props.theme.breakpoints.sm} ) {
    grid-gap: 1rem;
  }

  h3 {
    margin: 0;
    padding: 0 0 0.25rem 0;
    line-height: 1.2rem;
    border-bottom: 1px solid;
    ${props => props.theme.fluidType(-1)};
    @media ( ${props => props.theme.breakpoints.sm} ) {
      ${props => props.theme.fluidType(1)};
      padding: 0 0 1rem 0;
    }
    @media ( ${props => props.theme.breakpoints.lg} ) {
      ${props => props.theme.fluidType(-1)};
      padding: 0 0 0.25rem 0;
    }
  }

  p {
    margin: 0;
    ${props => props.theme.fluidType(-2)};
  }
`

function FleetReportData(props) {

  return (
    <Holder className="fleet-report-data">

      <TitleHolder>

        <h2>Your Highland Fleet Report</h2>

      </TitleHolder>

      <Section className="section-1">
        <div>
          <h3>
            <GreenNumber>1</GreenNumber> Fleet Details
          </h3>
        </div>
      </Section>

      <Section>
      <h3><GreenNumber>2</GreenNumber> Deployment timeline</h3>
      </Section>

      <Section>
      <h3><GreenNumber>3</GreenNumber> Included services</h3>
      </Section>
      <p>
        <button className="green" onClick={() => props.showReportFormHandler()}>Download
          your report
        </button>
      </p>
    </Holder>
  )
}

FleetReportData.propTypes = {
  showReportFormHandler: PropTypes.func.isRequired,
}

export default FleetReportData