import React from 'react'
import styled from 'styled-components'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import * as Yup from 'yup'
import {useStore} from '../../utils/store'
import RangeHolder from '../atoms/RangeHolder'
import {usStatesMap} from '../../utils/helpers'
import useScrollTrigger from "../../hooks/useScrollTrigger";

const validationSchema = Yup.object().shape({
  fleetsize: Yup.number(),
  electricGoal: Yup.number(),
  deployments: Yup.number(),
  serviceYears: Yup.number(),
  state: Yup.string(),
})

const Holder = styled.div`

  .form {
    position: relative;
    padding-bottom: 2rem;

    .di-form-part-1,
    .di-form-part-2 {
      will-change: transform;
      @media ( ${props => props.theme.breakpoints.lg} ) {
        opacity: 0;
      }
    }

    .form-heading {
      border-top: 1px solid #C4C4C4;
      border-bottom: 1px solid #C4C4C4;
      padding: 0.8rem 0;
      ${props => props.theme.fluidType(-2)};
      margin-top: 2rem;
      @media ( ${props => props.theme.breakpoints.sm} ) {
        ${props => props.theme.fluidType(1)};
      }
      @media ( ${props => props.theme.breakpoints.lg} ) {
        margin-top: 0.8rem;
        padding: 0.5rem 0;
        ${props => props.theme.fluidType(-2)};
      }
      @media ( ${props => props.theme.breakpoints.xl} ) {
        margin-top: 2rem;
        padding: 0.8rem 0;
        ${props => props.theme.fluidType(-1)};
      }
      font-weight: bold;
    }
  }
`

const InputHolder = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 180px;
  column-gap: 1rem;
  position: relative;
  margin: 0.25rem 0;
  @media( ${props => props.theme.breakpoints.sm} ) {
    margin: 1rem 0;
  }
  @media( ${props => props.theme.breakpoints.lg} ) {
    margin: 0.75rem 0;
  }
  @media( ${props => props.theme.breakpoints.xl} ) {
    margin: 1rem 0;
  }

  label {
    display: block;
    font-weight: bold;
    ${props => props.theme.fluidType(-2)};
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

  .fieldset.select {
    color: #C4C4C4;
    border-bottom: 2px solid;
    &:after {
      background-color: #C4C4C4;
    }
  }
`

// safari has issues with hidden options in <selects> (eslint override: currently doesn't recognise globalThis)
// eslint-disable-next-line no-undef
const isSafari = /^((?!chrome|android).)*safari/i.test(globalThis.navigator?.userAgent)
const maxFleetSize = 400

function DataInputForm() {
  const setFbFleetsize = useStore((state) => state.setFbFleetsize)
  const setFbElectricGoal = useStore((state) => state.setFbElectricGoal)
  const setFbDeployments = useStore((state) => state.setFbDeployments)
  const setFbServiceYears = useStore((state) => state.setFbServiceYears)
  const setFbState = useStore((state) => state.setFbState)
  const fbFleetsize = useStore((state) => state.fbFleetsize)
  const fbElectricGoal = useStore((state) => state.fbElectricGoal)
  const fbDeployments = useStore((state) => state.fbDeployments)
  const fbServiceYears = useStore((state) => state.fbServiceYears)

  const {gsap} = useScrollTrigger();

  return (
    <Holder>
      <Formik
        initialValues={{
          fleetsize: fbFleetsize,
          electricGoal: fbElectricGoal,
          state: 'title',
          deployments: fbDeployments,
          serviceYears: fbServiceYears,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, {setSubmitting}) => {
          console.log(values)
          setSubmitting(false)
        }}
      >
        {({isSubmitting, values}) => (
          <Form
            className="form"
            method="post"
            name="fleet-builder-data-inputs-form"
            onChange={event => {
              // console.log(
              //   "name",
              //   event.target.name,
              //   " | value",
              //   event.target.value
              // );
              if (event.target.name === 'fleetsize') {
                setFbFleetsize(event.target.value)
              } else if (event.target.name === 'electricGoal') {
                setFbElectricGoal(event.target.value)
              } else if (event.target.name === 'deployments') {
                setFbDeployments(event.target.value)
              } else if (event.target.name === 'serviceYears') {
                setFbServiceYears(event.target.value)
              } else if (event.target.name === 'state') {
                setFbState(event.target.value)
              }
              // We need to reset the bus in lot motion path tween values everytime
              // we change this as it relates to the size of the lot (which changes
              // as we change these values)
              // console.log(gsap.getById('busInLotTween'))
              if(gsap.getById('busInLotTween')) {
                gsap.getById('busInLotTween').invalidate()
              }
            }}
          >
            <div className="di-form-part-1">
              <p className="form-heading">Tell Us About Your Fleet</p>
              <InputHolder>
                <label htmlFor="fleetsize" className="label">
                  Total Fleet Size
                </label>
                <RangeHolder value={values.fleetsize} min={5} max={maxFleetSize}>
                  <small className="small">{values.fleetsize}{values.fleetsize === maxFleetSize && '+'}</small>
                  <Field
                    className="input"
                    type="range"
                    min="5"
                    max={maxFleetSize}
                    step="5"
                    name="fleetsize" />
                </RangeHolder>
                <ErrorMessage
                  className="errorMsg"
                  name="fleetsize"
                  component="small"
                />
              </InputHolder>
              <InputHolder>
                <label htmlFor="electricGoal" className="label">
                  Total Electric Bus Goal
                </label>
                <RangeHolder value={values.electricGoal < values.fleetsize ? values.electricGoal : values.fleetsize} min={5} max={values.fleetsize}>
                  <small className="small">{values.electricGoal}</small>
                  <Field
                    className="input"
                    type="range"
                    min="5"
                    max={values.fleetsize}
                    step="1"
                    name="electricGoal" />
                </RangeHolder>
                <ErrorMessage
                  className="errorMsg"
                  name="electricGoal"
                  component="small"
                />
              </InputHolder>
              <InputHolder>
                <label htmlFor="state" className="label">State/Province</label>
                <div className="fieldset select small-select select-pill">
                  <Field as="select" name="state" required>
                    <option value="title" disabled hidden>State/Province</option>
                    {!isSafari && Object.entries(usStatesMap).map(([usCode, usState], i) => <option
                      key={i} value={usState}
                      hidden>{usCode}</option>)}
                    {Object.entries(usStatesMap).map(([usCode, usState], i) => <option key={i}
                                                                                       value={usState}>{usState}</option>)}
                  </Field>
                </div>
                <ErrorMessage
                  className="errorMsg"
                  name="state"
                  component="small"
                />
              </InputHolder>
            </div>

            <div className="di-form-part-2">
              <p className="form-heading">Customize this
                deployment
                schedule to match your
                replacement rate.</p>
              <InputHolder>
                <label htmlFor="deployments" className="label">
                  Number of Deployment
                </label>
                <RangeHolder value={values.deployments} min={1} max={5}>
                  <small className="small">{values.deployments}</small>
                  <Field
                    className="input"
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    name="deployments" />
                </RangeHolder>
                <ErrorMessage
                  className="errorMsg"
                  name="deployments"
                  component="small"
                />
              </InputHolder>
              <InputHolder>
                <label htmlFor="serviceYears" className="label">
                  Years of Service
                </label>
                <RangeHolder value={values.serviceYears} min={1} max={15}>
                  <small className="small">{values.serviceYears}</small>
                  <Field
                    className="input"
                    type="range"
                    min="1"
                    max="15"
                    step="1"
                    name="serviceYears" />
                </RangeHolder>
                <ErrorMessage
                  className="errorMsg"
                  name="serviceYears"
                  component="small"
                />
              </InputHolder>
            </div>

          </Form>
        )}
      </Formik>
    </Holder>
  )
}

export default DataInputForm