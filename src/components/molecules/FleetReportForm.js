import React, {useState} from 'react'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import * as Yup from 'yup'
import {PDFDownloadLink} from '@react-pdf/renderer'
import PdfDocument from '../../organisms/fleet-builder/PdfDocument'
import styled from 'styled-components'
import fleetReportImg from '../../../assets/fleet-builder/fleet-report-illustration.png'
import {useStore} from "../../../utils/store";

const Holder = styled.div`
  .form {
    border-top: 1px solid #818181;
    @media (${props => props.theme.breakpoints.sm}) {
      width: 70%;
      margin: 0 auto;
    }
    @media (${props => props.theme.breakpoints.lg}) {
      width: 100%;
    }
    @media (${props => props.theme.breakpoints.xl}) {
      width: 70%;
      margin: 0 auto;
    }
  }
  
  h3 {
    margin-bottom: 1.5rem;
    ${props => props.theme.fluidType(1)};
    text-align: center;
    @media (${props => props.theme.breakpoints.sm}) {
      width: 70%;
      margin: 0.5rem auto 1.5rem;
    }
  }
  
  .submit-message {
    text-align: center;
    @media (${props => props.theme.breakpoints.xl}) {
      width: 70%;
      margin: 0 auto;
    }
  }

  .fieldset {
    margin-bottom: 0;

    .fieldset-inner {
      display: grid;
      grid-template-columns: 2fr 3fr;
      align-items: center;

      label {
        display: block;
        padding: 0.5rem 0;
        width: 100%;
        height: 100%;
        margin: 0;
        border-bottom: 1px solid #818181;
        line-height: 1.6;
        font-weight: bold;
        @media (${props => props.theme.breakpoints.lg}) {
          padding: 0.75rem 0.5rem 0.75rem 0;
        }
      }

      .input {
        height: 100%;
        margin: 0;
        padding: 0.5rem 0;
        border-bottom: 1px solid #818181;
        @media (${props => props.theme.breakpoints.lg}) {
          padding: 0.75rem 0;
        }

        &::placeholder {
          color: #DBDBDB;
        }
      }
    }
  }

  .button-holder {
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    @media (${props => props.theme.breakpoints.lg}) {
      margin-top: 2rem;
    }

    input[type="submit"], .button {
      display: inline-block;
    }
  }

`

const ImageHolder = styled.div`
  width: 12rem;
  margin: 0 auto;
  @media (${props => props.theme.breakpoints.lg}) {
    width: 50%;
  }

  img {
    width: 100%;
    height: auto;
  }
`

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('* First name is Required.'),
  email: Yup.string()
    .email('* Enter a Valid Email.')
    .required('* Email is Required.'),
  phone: Yup.string()
    .required('* Phone is Required.'),
  schoolDistrict: Yup.string()
    .required('* School district is Required.'),
})

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

function FleetReportForm() {
  const [submitMsg, setSubmitMsg] = useState(null)
  const fbFleetsize = useStore((state) => state.fbFleetsize)
  const fbElectricGoal = useStore((state) => state.fbElectricGoal)
  const fbDeployments = useStore((state) => state.fbDeployments)
  const fbServiceYears = useStore((state) => state.fbServiceYears)


  if (submitMsg) return (
    <Holder>
      <ImageHolder>
        <img src={fleetReportImg} alt="Fleet Report" />
      </ImageHolder>
      <h3 className="h3">Thank you</h3>
      <p className="submit-message">{submitMsg}</p>
      <div className="button-holder">
        <PDFDownloadLink className="button" document={<PdfDocument />} fileName="highland-fleet-report.pdf">
          {({blob, url, loading, error}) =>
            loading ? 'Generating your report...' : 'Download Your Fleet Report'
          }
        </PDFDownloadLink>
      </div>
    </Holder>)

  return (
    <Holder>
      <ImageHolder>
        <img src={fleetReportImg} alt="Fleet Report" />
      </ImageHolder>
      <h3 className="h3">Leave us your info, and download your full fleet report.</h3>
      <Formik
        initialValues={{fullName: '', email: '', phone: '', schoolDistrict: ''}}
        validationSchema={validationSchema}
        onSubmit={(values, {setSubmitting}) => {
          console.log(values)
          fetch('/', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: encode({
              'form-name': 'fleet-builder-form',
              'fleetsize': fbFleetsize,
              'electricGoal': fbElectricGoal,
              'deployments': fbDeployments,
              'serviceYears': fbServiceYears,
              ...values,
            }),
          })
            .then(({ok, statusText}) => {
              if (!ok) {
                throw new Error(statusText)
              }
              setSubmitMsg('Thank you, you can download your custom report on the link below.')
              setSubmitting(false)
            })
            .catch((error) => {
              setSubmitMsg('But we\'re afraid something went wrong with your form, please email us directly. In the meantime you can still download you custom report below.')
              setSubmitting(false)
            })
        }}
      >
        {({isSubmitting}) => (
          <Form
            className="form"
            method="post"
            name="fleet-builder-form"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <div className="fieldset">
              <div className="fieldset-inner">
                <label htmlFor="fullName" className="label">
                  Name
                </label>
                <Field className="input" type="text" name="fullName" placeholder="Full Name" />
              </div>
              <ErrorMessage
                className="errorMsg"
                name="name"
                component="small"
              />
            </div>

            <div className="fieldset">
              <div className="fieldset-inner">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <Field className="input" type="text" name="email" placeholder="john.smith@gmail.com" />
              </div>
              <ErrorMessage
                className="errorMsg"
                name="email"
                component="small"
              />
            </div>
            <div className="fieldset">
              <div className="fieldset-inner">
                <label htmlFor="phone" className="label">
                  Phone Number
                </label>
                <Field className="input" type="text" name="phone" placeholder="(123) 456-7890" />
              </div>
              <ErrorMessage
                className="errorMsg"
                name="phone"
                component="small"
              />
            </div>

            <div className="fieldset">
              <div className="fieldset-inner">
                <label htmlFor="schoolDistrict" className="label">
                  School District
                </label>
                <Field className="input" type="text" name="schoolDistrict"
                       placeholder="Granite School District" />
              </div>
              <ErrorMessage
                className="errorMsg"
                name="schoolDistrict"
                component="small"
              />
            </div>
            <div className="button-holder">
              <input
                name="submit"
                type="submit"
                disabled={isSubmitting}
                value="Download Fleet Report"
                className="button green"
              />
            </div>
          </Form>
        )}

      </Formik>
    </Holder>
  )
}

export default FleetReportForm
