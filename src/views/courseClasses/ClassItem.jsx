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
  titleDivStyle,
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
    <div style={titleDivStyle}>
      <div>
        <span style={titleSpanStyle}>
          {title}
        </span>
      </div>
      <div>
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
