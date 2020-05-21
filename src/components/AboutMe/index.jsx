import React from 'react';
import Social from '../Social';
import { Avatar } from '../core';

import { AboutMeStyled as Container, Row, AboutMeTextStyled as AboutMeText } from './styled';

const AboutMe = () => {
  return (
    <Container>
      <Row>
        <Avatar />
      </Row>
      <AboutMeText>
        Hi! My name is Lucas Pelegrino, 26 years old living in Belo Horizonte - Minas Gerais, Brazil.
        Currently working as Full Stack Developer at ioasys. I have been writing code for about 4+ years,
        started out only with Back End but soon expanded my base knowledge on Front End as well, I still
        believe my expertise lies on the Back End, though. Also, I very much enjoy project management and even
        had a chance to do so in some projects I was part of at ioasys. Lately, the interest in learning Swift
        have grown quite a lot on me so I am planning to play around with it, who knows, right? Ah! I also
        love classic rock like Led Zeppelin and country folks like The White Buffalo, and last but not least
        important: I am a big fan of Harley Davidson!
      </AboutMeText>
      <Row>
        <Social />
      </Row>
    </Container>
  );
};

export default AboutMe;
