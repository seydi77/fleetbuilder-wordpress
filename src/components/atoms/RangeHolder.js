import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Holder = styled.div`
  position: relative;
  overflow: hidden;
  height: 31px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 30%;
    width: 2px;
    border-radius: 1px;
    height: 40%;
    background-color: #C4C4C4;
  }

  &::before {
    left: 0;
    right: auto;
  }

  small {
    margin: 0;
    display: block;
    width: 50px;
    line-height: 25px;
    text-align: center;
    z-index: 1;
    color: ${props => props.theme.colours.white};
    position: absolute;
    top: 50%;
    left: ${props => props.pos + 'px'};
    transform: translate(-50%, -50%);
    pointer-events: none;
    will-change: transform;
    font-size: 0.7rem;
  }

  input[type=range] {
    position: relative;
    height: 31px;
    -webkit-appearance: none;
    margin: 0;
    width: 100%;
    background-color: transparent;
  }

  input[type=range]:focus {
    outline: none;
  }

  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #C4C4C4;
    border-radius: 0px;
    border: 0px solid #000000;
  }

  input[type=range]::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 0px solid #338165;
    height: 25px;
    width: 50px;
    border-radius: 24px;
    background: #338165;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -11.5px;
  }

  input[type=range]:focus::-webkit-slider-runnable-track {
    background: #C4C4C4;
  }

  input[type=range]::-moz-range-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #C4C4C4;
    border-radius: 0px;
    border: 0px solid #000000;
  }

  input[type=range]::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 0px solid #338165;
    height: 25px;
    width: 50px;
    border-radius: 24px;
    background: #338165;
    cursor: pointer;
  }

  input[type=range]::-ms-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  input[type=range]::-ms-fill-lower {
    background: #C4C4C4;
    border: 0px solid #000000;
    border-radius: 0px;
    box-shadow: 0px 0px 0px #000000;
  }

  input[type=range]::-ms-fill-upper {
    background: #C4C4C4;
    border: 0px solid #000000;
    border-radius: 0px;
    box-shadow: 0px 0px 0px #000000;
  }

  input[type=range]::-ms-thumb {
    margin-top: 1px;
    box-shadow: 0px 0px 0px #000000;
    border: 0px solid #338165;
    height: 25px;
    width: 50px;
    border-radius: 24px;
    background: #338165;
    cursor: pointer;
  }

  input[type=range]:focus::-ms-fill-lower {
    background: #C4C4C4;
  }

  input[type=range]:focus::-ms-fill-upper {
    background: #C4C4C4;
  }
`

function RangeHolder({value, min, max, children}) {
  const [pos, setPos] = useState(0)

  useEffect(() => {
    const maxPos = 155
    const minPos = 25
    const exp = ((((value - min) / (max - min)) * ((180 - 25) - 25)) + 25)
    // I think this expression could be slightly wrong somewhere as the smallest value returns NaN
    // It's really close :(
    // const left = (((value - minValue) / (valueMax - valueMin)) * ((totalInputWidth - thumbHalfWidth) - thumbHalfWidth)) + thumbHalfWidth;

    if (pos > maxPos) {
      setPos(maxPos)
    } else if (pos < minPos) {
      setPos(minPos)
    } else {
      setPos(exp)
    }
  }, [pos, value, min, max])

  return (
    <Holder pos={pos} value={value} min={min} max={max}>
      {children}
    </Holder>
  )
}

RangeHolder.propTypes = {
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
}

export default RangeHolder