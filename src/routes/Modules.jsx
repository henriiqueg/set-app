import React from 'react';
import DefaultModuleView from 'views/courseClasses/DefaultModuleView';
import DefaultClassItemList from 'views/courseClasses/DefaultClassItemList';
import DefaultClassItem from '../views/courseClasses/DefaultClassItem';
import DefaultClassItemListHeader from '../views/courseClasses/DefaultClassItemListHeader';
import backgroundClassItemList from '../assets/background.svg';
import redCurve from '../assets/redcurve.svg';
import purpleCurve from '../assets/purplecurve.svg';
import ClassDescriptions from './ClassDescriptions';
import { useHistory } from 'react-router-dom';

const classItemStyle = {
  backgroundColor: '#f2b619',
};

const getDefaultClassItemListForDescriptions = (history) => (
  ClassDescriptions.classes.map(c => (
    <DefaultClassItem
      title={c.title}
      subtitle={c.subtitle}
      clickHandler={() => history.push(c.route)}
    />
  ))
);

const outerDivStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `url(${backgroundClassItemList})`,
  backgroundPosition: 'center bottom',
  backgroundRepeat: 'no-repeat',
  backgroundColor: '#F7F7F7',
  height: '480px',
};

const cardOuterDivStyle = {
  backgroundColor: '#f77657',
  backgroundImage: `url(${redCurve})`,
};

const secondCardOuterDivStyle = {
  backgroundColor: 'purple',
  backgroundImage: `url(${purpleCurve})`,
};

const defaultClassItemListStyle = {
  maxHeight: '55%',
  marginBottom: '10px',
};

export default () => {
  const history = useHistory();

  return (
    <div style={outerDivStyle}>
      <DefaultModuleView>
      </DefaultModuleView>
      <DefaultClassItemList style={defaultClassItemListStyle}>
        <DefaultClassItemListHeader.Body>
          <DefaultClassItemListHeader.LeftComponent>
            Aulas
          </DefaultClassItemListHeader.LeftComponent>
          <DefaultClassItemListHeader.RightComponent>
            Ver todas as aulas
          </DefaultClassItemListHeader.RightComponent>
        </DefaultClassItemListHeader.Body>
        <DefaultClassItem title="Hello," subtitle="world!" outerDivStyle={classItemStyle} />
        {getDefaultClassItemListForDescriptions(history)}
      </DefaultClassItemList>
    </div>
  );
};
