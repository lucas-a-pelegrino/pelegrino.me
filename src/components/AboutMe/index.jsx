import React from 'react';

import { Wrapper, Text } from './styled';

const AboutMe = () => {
  return (
    <Wrapper>
      <Text>
        Sup! My name is <b>Lucas Pelegrino</b>, a 27 years old Software Engineer. living in{' '}
        <b>Belo Horizonte - MG, Brazil</b>. With around five years of experience with software development, I
        pride myself on all the achievements I've got throughout all these years. At first, I started as a PHP
        Developer but migrated to Ruby (Rails) and went on with Ruby for almost two years. To which I decided
        to focus on Javascript, using NodeJS and ReactJS as a <b>full-stack Engineer (backend focused)</b> at
        ioasys. I am passionate about writing well structured, highly scalable code, thinking of the best
        solutions and patterns to keep things organized. I believe this is essential for a project to be
        successful, combined with great teamwork and management. I also have a lot of interest in{' '}
        <b>DevOps</b> and have been improving my skills in that area.
      </Text>
    </Wrapper>
  );
};

export default AboutMe;
