import React from 'react';

const defaultOuterDivStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  width: '100%',
};

const Body = ({
  outerDivStyle,
  children,
}) => (
  <div style={{ ...defaultOuterDivStyle, ...outerDivStyle }}>
    {children}
  </div>
);

const defaultLeftComponentOuterDivStyle = {
  paddingLeft: '20px',
};

const defaultLeftComponentSpanStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  fontFamily: 'Raleway',
};

const LeftComponent = ({
  outerDivStyle,
  spanStyle,
  children,
}) => (
  <div style={{ ...defaultLeftComponentOuterDivStyle, ...outerDivStyle }}>
    <span style={{ ...defaultLeftComponentSpanStyle, ...spanStyle }}>
      {children}
    </span>
  </div>
);

const defaultRightComponentOuterDivStyle = {
  paddingRight: '20px',
};

const defaultRightComponentSpanStyle = {
  fontSize: '10px',
  fontFamily: 'Raleway',
};

const RightComponent = ({
  outerDivStyle,
  spanStyle,
  clickHandler,
  children,
  tabIndex,
}) => (
  <div style={{ ...defaultRightComponentOuterDivStyle, ...outerDivStyle }}>
    <span
      style={{ ...defaultRightComponentSpanStyle, ...spanStyle }}
      onClick={clickHandler}
      onKeyDown={() => {}}
      role="link"
      tabIndex={tabIndex}
    >
      {children}
    </span>
  </div>
);

export default {
  Body,
  LeftComponent,
  RightComponent,
};
