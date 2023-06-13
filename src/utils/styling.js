export const theme = {
  colours: {
      black1: '#000000',
      black2: '#1B1818',
      black3: '#222222',
      black4: '#3D4043',
      black5: '#3C4043',
      white: '#ffffff',
      blue: '#E1F5F6',
      blue2: '#DDEFF9',
      green: '#338165',
      green2: '#F1F7EE',
      green3: '#E8F5E2',
      green4: '#D0F1DD',
      green5: '#CFE7DE',
      yellow: '#FDBD1C',
      cream: '#FFFEEA',
      cream2: '#FFF9F3',
      cream3: '#FFF1E2',
      grey1: '#A6A8AB',
      grey2: '#808184',
      grey3: '#C4C4C4',
      grey4: '#F8F9FA',
      grey5: '#B9B9B9',
      grey6: '#818181',
      // Accessibility and forms
      focus: '#338165',
      error: '#338165',
  },
  typography: {
      min: 16,
      max: 20,
      minScreen: 400,
      maxScreen: 1370,
      scale: {
          min: 1.125,
          max: 1.250,
      },
  },
  // https://www.smashingmagazine.com/2016/05/fluid-typography/
  fluidType: (exp, min = theme.typography.min, max = theme.typography.max) => {
      return `
    font-size: ${
          min * Math.pow(theme.typography.scale.min, exp)
      }px;
    @media screen and (min-width: ${theme.typography.minScreen}px ) {
      font-size: calc( ${
          min * Math.pow(theme.typography.scale.min, exp)
      }px + (${
          max * Math.pow(theme.typography.scale.max, exp)
      } - ${
          min * Math.pow(theme.typography.scale.min, exp)
      })*(100vw - ${theme.typography.minScreen}px)/(${
          theme.typography.maxScreen
      } - ${theme.typography.minScreen}) );
    }
    @media screen and (min-width: ${theme.typography.maxScreen}px ) {
      font-size: ${
          max * Math.pow(theme.typography.scale.max, exp)
      }px;
    }
    `
  },
  breakpoints: {
      sm: 'min-width: 576px',
      md: 'min-width: 768px',
      lg: 'min-width: 992px',
      xl: 'min-width: 1281px',

      // sub-pixel values allow use of min/max-width, without overlapping
      raw: {
          xs: '399.5px',
          sm: '575.5px',
          md: '767.5px',
          lg: '991.5px',
          xl: '1199.5px',
          xxl: '1379.5px',
      }
  },
}
