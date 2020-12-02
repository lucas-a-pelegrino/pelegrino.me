import React from 'react';

import { Wrapper, Text } from './styled';

const AboutMe = () => {
  return (
    <Wrapper>
      <Text>
        Sup! My name is <b>Lucas Pelegrino</b>, a 27 years old Software Engineer. living in{' '}
        <b>Belo Horizonte - MG, Brazil</b>. With almost five years of experience with software development, I
        pride myself on all the achievements I’ve got throughout all these years. A Rails Engineer who turned
        into a Javascript Engineer, using NodeJS and ReactJS as a <b>Full Stack Engineer at ioasys</b>. Mainly
        focused on the Backend side of things, given that is where I found a passion. I love to structure
        backend projects and APIs, always working hard to deliver code with the best quality and organization
        possible, thinking about patterns, coverage, and legibility. I believe this is essential for a
        product/project to be successful, along with great teamwork and management. I also have a lot of
        interest in the DevOps side of software development, so I am currently studying for AWS DevOps and
        Solutions Architect certifications.
      </Text>
    </Wrapper>
  );
};

export default AboutMe;
