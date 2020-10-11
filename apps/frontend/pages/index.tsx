import React from 'react';
import styled from 'styled-components';

import DroneState from '../components/DroneState';
import Commands from '../components/Commands';
import Stream from '../components/Stream';

const Header = styled.h2`
  text-align: center;
`;

export const Index = () => {
  return (
    <>
      <Header>Tello Drone</Header>
      <Commands />
      <DroneState />
      <Stream />
    </>
  );
};

export default Index;
