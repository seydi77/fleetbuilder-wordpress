import React from 'react';
import styled from 'styled-components';

const Holder = styled.div`
  display: none;
  @media ( ${props => props.theme.breakpoints.lg} ) {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 5;
    opacity: 0;
  }

  p {
    margin: 0;
  }
`;

const Pill = styled.div`
  background-color: #F0F0F0;
  border-radius: 500px;
  width: 5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &.active-pill {
    color: #fff;
    background-color: #338165;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  p {
    text-align: center;
    margin: 0;
    font-size: 12px;
    line-height: 1;
    font-weight: bold;
  }
`;

const PillHolder = styled.div`
  position: relative;
  margin-left: 2rem;

  &:nth-child(5) {
  ${Pill} {
    p {
      font-size: 10px;
    }
  }
  }
`;

const LineHolder = styled.div`
  position: absolute;
  top: 50%;
  left: -2rem;
  width: 2rem;
`;
const Line = styled.div`
  position: absolute;
  top: -1px;
  left: 0;
  background-color: #338165;
  width: 100%;
  height: 2px;
`;
const Dots = styled.div`
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  border-bottom: 2px dotted #F0F0F0;
`;

const items = [
  { text: 'Buses', className: 'buses'},
  { text: 'Chargers', className: 'chargers'},
  { text: 'Electricity', className: 'electricity'},
  { text: 'Training', className: 'training'},
  { text: 'Warranty & Maintenance', className: 'warranty'},
  { text: 'Dashboard', className: 'dashboard'},
]

function SceneNavigation() {

  return (
    <Holder className="scene-navigation">
      {items.map((item, i) =>
        <PillHolder key={i} className={`pill-holder pill-holder-${item.className}`}>
          {i !== 0 && <LineHolder>
            <Dots />
            <Line className="pill-holder-line" />
          </LineHolder>}
          <Pill className="inactive-pill">
            <p>{item.text}</p>
          </Pill>
          <Pill className="active-pill">
            <p>{item.text}</p>
          </Pill>
        </PillHolder>
      )}
    </Holder>
  )
}

export default SceneNavigation;