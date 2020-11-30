import React from 'react';

const defaultClickHandler = () => {
  console.log('ClassItem default click handler.');
};

const handleKeyDown = () => {

};

export default ({
  title,
  clickHandler = defaultClickHandler,
  tabIndex,
  outerDivStyle,
  imgDivStyle,
  titleImgSrc,
  middleDivStyle,
  titleDivStyle,
  subtitleDivStyle,
  titleSpanStyle,
  subtitle,
  subtitleSpanStyle,
  arrowDivStyle,
  arrowImgSrc,
}) => (
  <div
    style={outerDivStyle}
    onClick={clickHandler}
    onKeyDown={handleKeyDown}
    role="button"
    tabIndex={tabIndex}
  >
    <div style={imgDivStyle}>
      <img src={titleImgSrc} alt="Aula" />
    </div>
    <div style={middleDivStyle}>
      <div style={titleDivStyle}>
        <span style={titleSpanStyle}>
          {title}
        </span>
      </div>
      <div style={subtitleDivStyle}>
        <span style={subtitleSpanStyle}>
          {subtitle}
        </span>
      </div>
    </div>
    <div style={arrowDivStyle}>
      <img src={arrowImgSrc} alt="Acesso" />
    </div>
  </div>
);
