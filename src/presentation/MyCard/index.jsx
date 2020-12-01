import React from 'react';

import { Avatar, AboutMe, Social } from '../../components';

import { Card } from './styled';

const MyCard = ({ location, children }) => {
  return (
    <Card>
      <Avatar />
      {/* <AboutMe /> */}
      {/* <Social /> */}
    </Card>
  );
};

export default MyCard;
