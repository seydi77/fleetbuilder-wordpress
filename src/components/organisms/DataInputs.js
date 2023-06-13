import React from "react";
import styled from "styled-components";
import DataInputForm from "../molecules/DataInputForm";
import PropTypes from "prop-types";
import {ReactComponent as Logo} from "../../assets/svg/logo.inline.svg";
import ScrollInvitation from "../molecules/ScrollInvitation";

const Holder = styled.div`
  background-color: var(--blue);
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 5;

  .di-step-1-info,
  .di-step-2-info {
    will-change: transform;
  }

  &.step0active {
    .di-step-2-info,
    .di-form-part-1,
    .di-form-part-2 {
      display: none;
      @media (${(props) => props.theme.breakpoints.lg}) {
        display: block;
      }
    }
  }
  &.step1active {
    .di-step-1-info,
    .di-form-part-1 {
      display: block;
    }
    .di-step-2-info,
    .di-form-part-2 {
      display: none;
      @media (${(props) => props.theme.breakpoints.lg}) {
        display: block;
      }
    }
  }
  &.step2active {
    .di-step-1-info {
      opacity: 0;
      @media (${(props) => props.theme.breakpoints.lg}) {
        opacity: 1;
        display: block;
      }
    }
    .di-form-part-1 {
      display: none;
      @media (${(props) => props.theme.breakpoints.lg}) {
        display: block;
      }
    }
    .di-step-2-info,
    .di-form-part-2 {
      display: block;
    }
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 0 1rem 3.5rem 1rem;
  @media (${(props) => props.theme.breakpoints.sm}) {
    padding: 0 2rem 2rem 2rem;
    justify-content: ${(props) =>
      props.alignStart ? "start" : "space-between"};
  }
  @media (${(props) => props.theme.breakpoints.lg}) {
    padding: 0 1rem 1rem 1rem;
    justify-content: space-between;
  }
  @media (${(props) => props.theme.breakpoints.xl}) {
    padding: 0 2rem 2rem 2rem;
  }
`;

const InfoHolder = styled.div`
  position: relative;

  .di-step-2-info {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    @media (${(props) => props.theme.breakpoints.lg}) {
      opacity: 0;
    }
  }

  h1 {
    margin-top: 0;
    ${(props) => props.theme.fluidType(2)};
    @media (${(props) => props.theme.breakpoints.sm}) {
      ${(props) => props.theme.fluidType(4)};
    }
    @media (${(props) => props.theme.breakpoints.lg}) {
      ${(props) => props.theme.fluidType(2)};
    }
  }

  p {
    ${(props) => props.theme.fluidType(-2)};
    @media (${(props) => props.theme.breakpoints.sm}) {
      ${(props) => props.theme.fluidType(1)};
    }
    @media (${(props) => props.theme.breakpoints.lg}) {
      ${(props) => props.theme.fluidType(-2)};
    }
    @media (${(props) => props.theme.breakpoints.xl}) {
      ${(props) => props.theme.fluidType(0)};
    }
  }
`;

const LogoHolder = styled.div`
  border-bottom: 1px solid #c4c4c4;
  margin: 1rem 1rem 0.8rem 1rem;
  padding-bottom: 0.8rem;
  @media (${(props) => props.theme.breakpoints.sm}) {
    margin: 2rem 2rem 2rem 2rem;
    padding-bottom: 1rem;
  }
  @media (${(props) => props.theme.breakpoints.lg}) {
    margin: 1rem;
    padding-bottom: 0.8rem;
  }
  @media (${(props) => props.theme.breakpoints.xl}) {
    margin: 2rem 2rem 1rem 2rem;
  }

  svg {
    max-width: 130px;
    @media (${(props) => props.theme.breakpoints.sm}) {
      max-width: 150px;
    }
    @media (${(props) => props.theme.breakpoints.lg}) {
      max-width: 130px;
    }

    path,
    rect {
      fill: ${(props) => props.theme.colours.black4};
    }
  }
`;

const FormHolder = styled.div`
  position: relative;
`;

function DataInputs(props) {
  return (
    <Holder className={`step${props.mStep}active`}>
      <LogoHolder>
        <a href="https://highlandfleets.com/" target="_blank" rel="noreferrer">
          <Logo />
        </a>
      </LogoHolder>

      <Inner alignStart={props.mStep !== 0}>
        <InfoHolder>
          <div className="di-step-1-info">
            <h1 className="h3">Welcome to Fleet Builder</h1>
            <p className="small">
              Answer a few quick questions and we’ll show you what your
              district’s electric fleet looks like when you upgrade with
              Highland.
            </p>
          </div>
          <div className="di-step-2-info">
            <h1 className="h3">Your Electric Fleet</h1>
            <p className="small">
              Electrifying your fleet doesn’t have to happen all at once. For
              instance, we can electrify 50 buses, 10 buses per year, over 5
              years—or at a pace that matches your diesel replacement rate.
            </p>
          </div>
        </InfoHolder>
        <FormHolder>
          {props.mStep === 0 && <ScrollInvitation />}
          <DataInputForm />
        </FormHolder>
      </Inner>
    </Holder>
  );
}

DataInputs.propTypes = {
  mStep: PropTypes.number.isRequired,
};

export default DataInputs;
