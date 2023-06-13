import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useStore} from '../../utils/store'

const Holder = styled.div`
  width: 100%;
  //max-width: ${props => props.cols < 8 ? `${props.cols}00px` : '800px'};
  display: grid;
  grid-template-columns: ${props => `repeat(${props.cols}, 1fr)`};
  justify-content: space-between;
  grid-gap: ${props => `${props.gap/2}px`};
  @media( ${props => props.theme.breakpoints.lg} ) {
    grid-gap: ${props => `${props.gap}px`};
  }

  .first-bus-in-lot {
    will-change: transform;
  }

  .bus-in-lot {
    width: 80%;
    height: 0;
    padding-bottom: 35%;
    border-radius: 2.8px;
    background-color: var(--grey5);
    transform-origin: center center;
    position: relative;

    :before,
    :after {
      content: '';
      position: absolute;
      background-color: var(--grey5);
      width: 8%;
      height: 0;
      padding-bottom: 10%;
      border-radius: 100px;
    }

    :before {
      top: 0;
      transform: translateY(-50%);
    }

    :after {
      bottom: 0;
      transform: translateY(50%);
    }
  }

  .bus-in-lot:nth-child(-n+${props => props.coloured}) {
    background-color: var(--yellow);

    :before,
    :after {
      background-color: var(--yellow);
    }
  }

  .bus-in-lot:nth-child(even) {
    margin-right: 20%;
    transform: rotate(15deg);
  }
  
  .first-bus-in-lot,
  .bus-in-lot:nth-child(even) {

    :before {
      right: 10%;
      left: auto !important;
    }

    :after {
      right: 10%;
      left: auto !important;
    }
  }

  .bus-in-lot:nth-child(odd) {
    margin-left: 20%;
    transform: rotate(-15deg);

    :before {
      left: 10%;
    }

    :after {
      left: 10%;
    }
  }
}
`

function DataVisBusGrid() {
  const fbFleetsize = useStore((state) => state.fbFleetsize)
  const fbElectricGoal = useStore((state) => state.fbElectricGoal)
  const [columns, setColumns] = useState(6)
  const [gap, setGap] = useState(20)

  const gridRestrictions = [
    {fleetSize: 10, cols: 6, gap: 30},
    {fleetSize: 20, cols: 8, gap: 20},
    {fleetSize: 40, cols: 10, gap: 20},
    {fleetSize: 80, cols: 14, gap: 20},
    {fleetSize: 160, cols: 14, gap: 20},
    {fleetSize: 200, cols: 16, gap: 20},
    {fleetSize: 240, cols: 18, gap: 10},
    {fleetSize: 320, cols: 20, gap: 10},
    {fleetSize: 400, cols: 22, gap: 10},
  ]

  useEffect(() => {
    for (let i = 0; i < gridRestrictions.length; i++) {
      if (fbFleetsize < gridRestrictions[i].fleetSize) {
        setColumns(gridRestrictions[i].cols)
        setGap(gridRestrictions[i].gap)
        break
      }
    }
  }, [fbFleetsize, gridRestrictions])

  const buses = []
  for (let i = 0; i < fbFleetsize - 1; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    buses.push(<div key={i} className={`bus-in-lot`} />)
  }

  return (
    <Holder className="data-vis-bug-grid" cols={columns} gap={gap} coloured={fbElectricGoal}>
      <div className={`bus-in-lot first-bus-in-lot`} />
      {buses}
    </Holder>
  )
}

export default DataVisBusGrid