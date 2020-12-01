/* eslint-disable no-return-assign */
import React from 'react';

import { useAuth } from 'contexts/AuthProvider';

import illustrationDashboard from 'assets/illustration-dashboard.svg';

import ModulesCards from 'components/ModulesCards';
import LessonsList from 'components/LessonsList';

import {
  Container,
  IllustrationDashboard,
  DashboardContent,
  DashboardUserName,
} from './Dashboard.style';

const Dashboard = () => {
  const user = useAuth() || {};

  return (
    <Container>
      <DashboardContent>
        <DashboardUserName>
          <span>
            Olá.
          </span>
          <p>{user.currentUser?.displayName.split(' ')[0]}</p>
        </DashboardUserName>
      </DashboardContent>

      <ModulesCards />
      <LessonsList />
      <IllustrationDashboard src={illustrationDashboard} />
    </Container>
  );
};

export default Dashboard;
