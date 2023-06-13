import React from 'react'
import styled from 'styled-components'
// import Image from '../atoms/Image'
import FleetReportForm from '../molecules/FleetReportForm'
import PropTypes from 'prop-types'
import {CSSTransition} from "react-transition-group";
import mural from "../../assets/images/Mural-new.png"

const Holder = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: var(--windowHeight);
  z-index: 99;
  display: grid;
  grid-template-columns: 1fr;
  @media ( ${props => props.theme.breakpoints.lg} ) {
    grid-template-columns: 1fr 1fr;
  }
  &.fleet-report-appear,
  &.fleet-report-enter {
    .fleet-report-left {
      transform: translateX(-100%);
    }
    .fleet-report-right {
      transform: translateX(100%);
    }
  }
  &.fleet-report-appear-active,
  &.fleet-report-appear-done,
  &.fleet-report-enter-active,
  &.fleet-report-enter-done {
    .fleet-report-left {
      transform: translateX(0);
      transition: transform 500ms;
    }
    .fleet-report-right {
      transform: translateX(0);
      transition: transform 500ms;
    }
  }
  &.fleet-report-exit {
    .fleet-report-left {
      transform: translateX(0);
    }
    .fleet-report-right {
      transform: translateX(0);
    }
  }
  &.fleet-report-exit-active {
    .fleet-report-left {
      transform: translateX(-100%);
      transition: transform 500ms;
    }
    .fleet-report-right {
      transform: translateX(100%);
      transition: transform 500ms;
    }
  }
`

const Left = styled.div`
  display: none;
  @media ( ${props => props.theme.breakpoints.lg} ) {
    width: 100%;
    height: 100%;
    background-color: var(--blue);
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const ImageHolder = styled.div`
  width: 100%;
  margin-bottom: 4rem;
`

const Right = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: var(--grey4);
`

const FormHolder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--grey4);
  padding: 1.5rem;
  @media ( ${props => props.theme.breakpoints.sm} ) {
    padding: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`

function FleetReport({show, hideReportHandler}) {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      appear
      in={show}
      timeout={500}
      classNames="fleet-report"
    >
    <Holder className="fleet-report">
      <Left className="fleet-report-left">
        <ImageHolder>
          <img src={mural} alt="Highland" />
        </ImageHolder>
        <button onClick={() => hideReportHandler()}>Back to your fleet builder</button>
      </Left>
      <Right className="fleet-report-right">
        <FormHolder>
          <FleetReportForm />
        </FormHolder>
      </Right>
    </Holder>
    </CSSTransition>
  )
}

FleetReport.propTypes = {
  show: PropTypes.bool,
  showForm: PropTypes.bool,
  hideReportHandler: PropTypes.func,
  showFormHandler: PropTypes.func,
}

FleetReport.defaultProps = {
  show: false,
}

export default FleetReport