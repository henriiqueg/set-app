import React from 'react';

const scrollableCardsDivStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'left',
  overflowX: 'scroll',
  overflowY: 'hidden',
  paddingBottom: '10px',
  marginTop: '20px',
};

const moduleDivStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'end',
  justifyContent: 'space-between',
  paddingRight: '20px',
  paddingLeft: '20px',
};

const outerDivStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '320px',
  height: '250px',
};

const helloDivStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  paddingLeft: '20px',
};

export default ({
  children,
  allModulesClickHandler,
  allModulesTabIndex,
}) => (
  <div style={outerDivStyle}>
    <div style={helloDivStyle}>
      <div>
        <span>Olá!</span>
      </div>
    </div>
    <div style={moduleDivStyle}>
      <div>
        <span style={{ fontSize: '17px', fontWeight: 'bold' }}>
          Módulos
        </span>
      </div>
      <div>
        <span
          style={{ fontSize: '10px' }}
          onClick={allModulesClickHandler}
          tabIndex={allModulesTabIndex}
          onKeyDown={() => {}}
          role="link"
        >
          Ver todos os módulos
        </span>
      </div>
    </div>
    <div style={scrollableCardsDivStyle}>
      {children}
    </div>
  </div>
);
