import React from 'react';

const defaultClassItemListStyle = {
  width: '86%',
  maxWidth: '320px',
  backgroundColor: '#f4ca28',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  flexDirection: 'column',
  paddingTop: '6px',
  paddingBottom: '12px',
  overflowY: 'scroll',
  overflowX: 'hidden',
};

export default ({ style, children }) => (
  <div style={{ ...defaultClassItemListStyle, ...style }}>
    {children}
  </div>
);
