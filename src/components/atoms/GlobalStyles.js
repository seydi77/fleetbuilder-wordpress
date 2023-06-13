import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

  :root {
    --windowHeight: 100vh;
    --black: #000000;
    --black2: #1B1818;
    --black3: #222222;
    --black4: #3D4043;
    --black5: #3C4043;
    --white: #ffffff;
    --blue: #E1F5F6;
    --blue2: #DDEFF9;
    --green: #338165;
    --green2: #F1F7EE;
    --green3: #E8F5E2;
    --green4: #D0F1DD;
    --yellow: #FDBD1C;
    --cream: #FFFEEA;
    --cream2: #FFF9F3;
    --grey1: #A6A8AB;
    --grey2: #808184;
    --grey3: #C4C4C4;
    --grey4: #F8F9FA;
    --grey5: #B9B9B9;
    --grey6: #ECECEC;
    --focus: #338165;
    --error: #338165;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${props => props.theme.fluidType(0)};
    overscroll-behavior: none;

    * {
      box-sizing: border-box;
    }
  }

  body {
    margin: 0;
    font-family: "Universal Sans", Helvetica, Arial, sans-serif;
    color: ${props => props.theme.colours.black4};
    background-color: ${props => props.theme.colours.white};
    overscroll-behavior: none;
  }

  h1, h2,
  .h1, .h2 {
    line-height: 1;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  h3, h4, h5, h6,
  h3, .h4, .h5, .h6 {
    line-height: 1.1;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  p, .p,
  ol, ul, li,
  code, kbd, pre, samp {
    line-height: 1.3;
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
  }

  h1, h2, h3, h4, h5, h6,
  .h1, .h2, .h3, .h4, .h5, .h6 {
    font-weight: bold;

    a {
      text-decoration: none;
    }

    a:hover {
      text-decoration: none;
    }
  }

  h1, .h1 {
    ${props => props.theme.fluidType(6)};
  }

  h2.large, .h2-large {
    ${props => props.theme.fluidType(5)};
  }

  h2, .h2 {
    ${props => props.theme.fluidType(4)};
  }

  h3, .h3 {
    ${props => props.theme.fluidType(2)};
  }

  h4, .h4 {
    ${props => props.theme.fluidType(1)};
  }

  h5, .h5 {
    ${props => props.theme.fluidType(0)};
  }

  p, .p, li {
    ${props => props.theme.fluidType(0)};
  }

  h6, .h6 {
    ${props => props.theme.fluidType(-1)};
  }

  small, p.small, li.small {
    ${props => props.theme.fluidType(-1)};
  }

  li {
    margin-top: 0;
    margin-bottom: 0;
  }

  code, kbd, pre, samp {
    font-family: monospace;
    white-space: normal;
  }

  ul {
    padding-left: 1rem;
    list-style-type: disc;
  }

  ol {
    padding-left: 1rem;
    list-style-type: decimal;
  }

  video {
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }

  em, i {
    font-style: italic;
  }

  strong, b {
    font-weight: bold;
  }

  blockquote {
    font-weight: bold;
    padding-left: 1rem;
  }

  a {
    color: inherit;
  }

  sup, sub {
    vertical-align: baseline;
    position: relative;
    top: -0.4em;
  }

  sub {
    top: 0.4em;
  }

  label {
    ${props => props.theme.fluidType(-1)};
    line-height: 1.2;
    font-weight: normal;
    display: none;
  }

  .fieldset {
    margin-bottom: 0.5rem;
    @media ( ${props => props.theme.breakpoints.md} ) {
      margin-bottom: 1rem;
    }
  }

  .two-col-fields {
    display: grid;
    grid-template-columns: 1fr;
    @media ( ${props => props.theme.breakpoints.md} ) {
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
    }
  }

  .text-input,
  input[type="text"],
  input[type="password"],
  input[type="date"],
  input[type="datetime-local"],
  input[type="email"],
  input[type="month"],
  input[type="number"],
  input[type="search"],
  input[type="tel"],
  input[type="time"],
  input[type="url"],
  input[type="week"],
  textarea {
    color: inherit;
    display: block;
    font-family: inherit;
    ${props => props.theme.fluidType(-1)};
    padding: 0.3rem 0;
    width: 100%;
    margin: 0.25rem 0;
    border: none;
    border-bottom: 1px solid;
    border-radius: 0;
    line-height: 1.6;
    background-color: transparent;
    -webkit-appearance: none;

    &:focus {
      outline: none;
      border-color: ${props => props.theme.colours.focus};
    }
  }

  textarea {
    border: 1px solid;
    resize: none;
    padding: 0.5rem;
    margin-top: 2.5rem;
  }

  ::placeholder {
    color: ${props => props.theme.colours.grey2};
    opacity: 1;
  }

  // Select

  select {
    // A reset of styles, including removing the default dropdown arrow
    appearance: none;
    // Additional resets for further consistency
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    outline: none;
    color: ${props => props.theme.colours.black4};
  }

  select:invalid {
    color: ${props => props.theme.colours.grey2};
  }

  select::-ms-expand {
    display: none;
  }

  .fieldset.select {
    width: 100%;
    height: 2rem;
    border-bottom: 1px solid;
    border-radius: 0;
    padding: 0;
    margin: 0.25rem 0 0.75rem 0 !important;
    ${props => props.theme.fluidType(-1)};
    cursor: pointer;
    line-height: 1.1;
    background-color: transparent;
    grid-template-areas: "select";
    display: grid;
    align-items: center;
      
      &.small-select {
          height: 1.8rem;
          margin: 0 !important;
          ${props => props.theme.fluidType(-2)};
      }
      &.select-pill {
          border: 2px solid;
          border-radius: 500px;
          padding: 0 0.5rem 0 0.75rem;
      }

    &:after {
      content: "";
      width: 0.8rem;
      height: 0.8rem;
      background-color: ${props => props.theme.colours.grey2};
      clip-path: polygon(91% 39%, 100% 46%, 50% 100%, 0 48%, 9% 39%, 50% 83%);;
      justify-self: end;
    }

    select,
    &:after {
      grid-area: select;
    }
  }

  .file-input,
  input[type="file"],
  .radio-input,
  input[type="radio"],
  .checkbox-input,
  input[type="checkbox"],
  select {
    font-family: inherit;
  }

  .button,
  button,
  input[type="submit"],
  input[type="button"],
  input[type="reset"] {
    display: inline-block;
    color: ${props => props.theme.colours.black4};
    background-color: ${props => props.theme.colours.yellow};

    padding: 0 1rem;
    cursor: pointer;

    font-family: inherit;
    font-weight: bold;
    ${props => props.theme.fluidType(-1)};
    line-height: 1.7rem;
    text-decoration: none;
    white-space: nowrap;
    border: none;
    border-radius: 0.85rem;
    margin: 0;

    transition: transform 0.2s ease-in-out;

    &:hover {
      text-decoration: none;
      transform: translateY(-0.2rem);
    }

    &.green-outline {
      border: 1px solid ${props => props.theme.colours.green};
      color: ${props => props.theme.colours.green};
      background-color: transparent;
    }

    &.green {
      color: ${props => props.theme.colours.white};
      background-color: ${props => props.theme.colours.green};
    }

    &.border {
      border: 1px solid ${props => props.theme.colours.white};
    }

    &.link {
      border: none;
      padding: 0;
      background-color: transparent;
      border-radius: 0;
      line-height: inherit;
      color: inherit;
      font-weight: inherit;

      &:hover {
        transform: none;
      }
    }

    &.large {
      ${props => props.theme.fluidType(0)};
      padding: 0 1.4rem;
      line-height: 2.2rem;
      border-radius: 1.1rem;
    }

    &.textWithIcon {
      display: inline-flex;
      align-items: center;
      padding: 0 0.75rem 0 1rem;

      svg {
        height: 0.8rem;
        width: auto;
        margin-left: 0.5rem;
      }

      &.iconLeft {
        padding: 0 1rem 0 0.75rem;

        svg {
          margin-left: 0;
          margin-right: 0.5rem;
        }
      }
    }

    &.textWithIcon.large {
      padding: 0 0.5rem 0 1rem;

      svg {
        height: 1.5rem;
      }

      &.iconLeft {
        padding: 0 1rem 0 0.5rem;
      }
    }

    &.icon {
      border: none;
      padding: 0;
      background-color: transparent;
      margin: 0;
      line-height: 1;

      &:hover {
        transform: none;
      }

      svg {
        height: 1.2rem;
        width: auto;
        display: block;
      }

      &.small {
        svg {
          height: 0.8rem;
        }
      }
    }
  }

  .errorMsg {
    color: ${props => props.theme.colours.error};
    ${props => props.theme.fluidType(-3)};
    margin: 0 0.6rem;
  }

  .hide-tag {
    display: none;
  }

  img[data-shortcode] {
    height: 1.8em;
    vertical-align: middle;
  }

  @media (min-width: ${props => props.theme.breakpoints.raw.xs}) {
    .max-xs {
      display: none !important;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.raw.sm}) {
    .max-sm {
      display: none !important;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.raw.md}) {
    .max-md {
      display: none !important;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.raw.lg}) {
    .max-lg {
      display: none !important;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.raw.xl}) {
    .max-xl {
      display: none !important;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.raw.xxl}) {
    .max-xxl {
      display: none !important;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.raw.xs}) {
    .min-xs {
      display: none !important;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.raw.sm}) {
    .min-sm {
      display: none !important;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.raw.md}) {
    .min-md {
      display: none !important;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.raw.lg}) {
    .min-lg {
      display: none !important;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.raw.xl}) {
    .min-xl {
      display: none !important;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.raw.xxl}) {
    .min-xxl {
      display: none !important;
    }
  }
`

export default GlobalStyle
