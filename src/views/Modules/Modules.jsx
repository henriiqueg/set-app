import React from 'react';
import { useHistory } from 'react-router-dom';
import DefaultModuleView from './DefaultModuleView';
import DefaultClassItemList from './DefaultClassItemList';
import DefaultClassItem from './DefaultClassItem';
import DefaultClassItemListHeader from './DefaultClassItemListHeader';
import backgroundClassItemList from '../../assets/background.svg';
import ClassDescriptions from './ClassDescriptions';
import DefaultModuleCard from './DefaultModuleCard';
import purpleCurve from '../../assets/purplecurve.svg';

const classItemStyle = {
  backgroundColor: '#f2b619',
};

const defaultModuleCardStyle = {
  backgroundColor: 'purple',
  backgroundImage: `url(${purpleCurve})`,
  backgroundSize: 'cover',
};

const defaultModuleCardSpanStyle = {
  fontWeight: 'bold',
};

const getDefaultClassItemListForDescriptions = (history) => (
  ClassDescriptions.classes.map((c) => (
    <DefaultClassItem
      title={c.title}
      subtitle={c.subtitle}
      clickHandler={() => history.push(c.route)}
      outerDivStyle={classItemStyle}
      key={c.route}
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
        <DefaultModuleCard
          outerDivStyle={defaultModuleCardStyle}
          spanStyle={defaultModuleCardSpanStyle}
          spanText="Módulo principal"
        />
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
        {getDefaultClassItemListForDescriptions(history)}
      </DefaultClassItemList>
    </div>
  );
};
