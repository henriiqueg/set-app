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

const getClassItemSpanDivStyle = (titleDivStyle) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  width: '85%',
  paddingLeft: '10px',
  ...titleDivStyle,
});

const getClassItemTitleSpanStyle = (titleSpanStyle) => ({
  fontWeight: 'bold',
  fontFamily: 'Raleway',
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

const getModifiedPropsForClassItemProps = ({
  outerDivStyle,
  imgDivStyle,
  titleDivStyle,
  titleSpanStyle,
  subtitleSpanStyle,
  arrowDivStyle,
  ...props
}) => ({
  outerDivStyle: getClassItemOuterDivStyle(outerDivStyle),
  imgDivStyle: getClassItemImgDivStyle(imgDivStyle),
  titleDivStyle: getClassItemSpanDivStyle(titleDivStyle),
  titleSpanStyle: getClassItemTitleSpanStyle(titleSpanStyle),
  subtitleSpanStyle: getClassItemSubtitleSpanStyle(subtitleSpanStyle),
  arrowDivStyle: getClassItemArrowDivStyle(arrowDivStyle),
  titleImgSrc,
  arrowImgSrc,
  ...props,
});

export default (props) => (
  <ClassItem {...getModifiedPropsForClassItemProps(props)} />
);
