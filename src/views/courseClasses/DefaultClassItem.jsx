import React from 'react';
import ClassItem from './ClassItem';
import titleImgSrc from '../../assets/aula.svg';
import arrowImgSrc from '../../assets/arrow.svg';

const getClassItemOuterDivStyle = (outerDivStyle) => ({
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '96%',
  flexBasis: '40px',
  hover: 'pointer',
  marginTop: '2px',
  marginBottom: '2px',
  cursor: 'pointer',
  ...outerDivStyle,
});

const getClassItemImgDivStyle = (imgDivStyle) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '10%',
  color: 'white',
  ...imgDivStyle,
});

const getClassItemSpanDivStyle = (middleDivStyle) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  width: '85%',
  height: '50%',
  paddingLeft: '10px',
  ...middleDivStyle,
});

const getClassItemTitleSpanStyle = (titleSpanStyle) => ({
  fontWeight: 'bold',
  fontSize: '12px',
  ...titleSpanStyle,
});

const getClassItemSubtitleSpanStyle = (subtitleSpanStyle) => ({
  fontSize: '8px',
  fontFamily: 'Raleway',
  ...subtitleSpanStyle,
});

const getClassItemArrowDivStyle = (arrowDivStyle) => ({
  width: '5%',
  color: 'white',
  ...arrowDivStyle,
});

const getClassItemTitleDivStyle = (titleDivStyle) => titleDivStyle;

const getClassItemSubtitleDivStyle = (subtitleDivStyle) => ({
  marginTop: '-10px',
  ...subtitleDivStyle,
});

const getModifiedPropsForClassItemProps = ({
  outerDivStyle,
  imgDivStyle,
  middleDivStyle,
  titleSpanStyle,
  subtitleSpanStyle,
  arrowDivStyle,
  titleDivStyle,
  subtitleDivStyle,
  ...props
}) => ({
  outerDivStyle: getClassItemOuterDivStyle(outerDivStyle),
  imgDivStyle: getClassItemImgDivStyle(imgDivStyle),
  middleDivStyle: getClassItemSpanDivStyle(middleDivStyle),
  titleSpanStyle: getClassItemTitleSpanStyle(titleSpanStyle),
  subtitleSpanStyle: getClassItemSubtitleSpanStyle(subtitleSpanStyle),
  arrowDivStyle: getClassItemArrowDivStyle(arrowDivStyle),
  titleDivStyle: getClassItemTitleDivStyle(titleDivStyle),
  subtitleDivStyle: getClassItemSubtitleDivStyle(subtitleDivStyle),
  titleImgSrc,
  arrowImgSrc,
  ...props,
});

export default (props) => (
  <ClassItem {...getModifiedPropsForClassItemProps(props)} />
);
