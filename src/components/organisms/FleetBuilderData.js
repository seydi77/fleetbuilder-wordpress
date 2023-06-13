import React from 'react'
import styled from 'styled-components'
import DataInputs from './DataInputs'
import DataVisualisation from './DataVisualisation'
import DataOutputs from './DataOutputs'
import PropTypes from "prop-types";

const Holder = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 20;
  width: 300vw;
  display: grid;
  grid-template-columns: 100vw 100vw 100vw;
  will-change: transform;
  @media ( ${props => props.theme.breakpoints.lg} ) {
    overflow: hidden;
    width: 130vw;
    grid-template-columns: 30vw 70vw 30vw;
  }
`


function FleetBuilderData({mStep}) {
  return (
    <Holder className="fleet-builder-data-holder">
      <DataInputs mStep={mStep} />
      <DataVisualisation />
      <DataOutputs />
    </Holder>
  )
}

// Set up prop types
FleetBuilderData.propTypes = {
  mStep: PropTypes.number.isRequired,
}

export default FleetBuilderData
