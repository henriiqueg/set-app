import React from 'react';
import ClassItem from './ClassItem';

const getClassItemOuterDivStyle = (outerDivStyle) => ({
  ...outerDivStyle,
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '98%',
});

const getClassItemImgDivStyle = (imgDivStyle) => ({
  ...imgDivStyle,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '10%',
});

const getClassItemSpanDivStyle = (titleDivStyle) => ({
  ...titleDivStyle,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  width: '85%',
});

const getClassItemTitleSpanStyle = (titleSpanStyle) => ({
  ...titleSpanStyle,
  fontWeight: 'bold',
});

const getClassItemSubtitleSpanStyle = (subtitleSpanStyle) => ({
  ...subtitleSpanStyle,
  fontSize: '8px',
});

const getClassItemArrowDivStyle = (arrowDivStyle) => ({
  ...arrowDivStyle,
  width: '5%',
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
  ...props,
});

const getModifiedPropsForClassItem = (classItem) => (
  getModifiedPropsForClassItemProps(classItem.props)
);

const getClassItemWithModifiedProps = (classItem) => (
  <ClassItem {...getModifiedPropsForClassItem(classItem)} />
);

export default ({
  style,
  children,
}) => (
  <div style={style}>
    {React.Children.map(children, getClassItemWithModifiedProps)}
  </div>
);
