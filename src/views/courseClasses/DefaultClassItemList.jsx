import React from 'react';

const defaultClassItemListStyle = {
  width: '98%',
  backgroundColor: '#f4ca28',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  paddingTop: '6px',
  paddingBottom: '22px',
};

export default ({ style, children }) => (
  <div style={{ ...defaultClassItemListStyle, ...style }}>
    {children}
  </div>
);
