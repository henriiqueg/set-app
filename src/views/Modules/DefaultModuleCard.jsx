import React from 'react';
import arrow from '../../assets/arrow.svg';

const getModifiedOuterDivStyle = (outerDivStyle) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '90px',
  minWidth: '160px',
  borderRadius: '5px',
  marginLeft: '4px',
  marginRight: '4px',
  ...outerDivStyle,
});

const getModifiedUpperDivStyle = (upperDivStyle) => ({
  display: 'flex',
  flexDirection: 'column',
  alignColumns: 'start',
  justifyContent: 'start',
  ...upperDivStyle,
});

const getModifiedLowerDivStyle = (lowerDivStyle) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'end',
  justifyContent: 'end',
  paddingRight: '5px',
  paddingBottom: '5px',
  ...lowerDivStyle,
});

const getModifiedSpanStyle = (spanStyle) => ({
  color: 'white',
  paddingLeft: '5px',
  ...spanStyle,
});

export default ({
  outerDivStyle,
  upperDivStyle,
  lowerDivStyle,
  spanStyle,
  spanText,
}) => (
  <div style={getModifiedOuterDivStyle(outerDivStyle)}>
    <div style={getModifiedUpperDivStyle(upperDivStyle)}>
      <span style={getModifiedSpanStyle(spanStyle)}>
        {spanText}
      </span>
    </div>
    <div style={getModifiedLowerDivStyle(lowerDivStyle)}>
      <img src={arrow} alt="Ver" />
    </div>
  </div>
);
