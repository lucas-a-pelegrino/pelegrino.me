import React from 'react';

import { SocialStyled as Container, TextStyled as Text, SocialLinks } from './styled';

import GithubIcon from '../../assets/images/logo-github.svg';
import TwitterIcon from '../../assets/images/logo-twitter.svg';
import LinkedinIcon from '../../assets/images/logo-linkedin.svg';
import InstagramIcon from '../../assets/images/logo-instagram.svg';
import EmailIcon from '../../assets/images/icon-email.svg';

const Social = () => {
  return (
    <Container>
      <Text>You can find me at:</Text>
      <SocialLinks>
        <a href="https://github.com/lucas-a-pelegrino" target="_blank">
          <img src={GithubIcon} alt="github" />
        </a>
        <a href="https://twitter.com/mrcrowlp" target="_blank">
          <img src={TwitterIcon} alt="twitter" />
        </a>
        <a href="https://www.linkedin.com/in/lucas-a-pelegrino/" target="_blank">
          <img src={LinkedinIcon} alt="linkedin" />
        </a>
        <a href="https://www.instagram.com/mr.crow.lp/" target="_blank">
          <img src={InstagramIcon} alt="instagram" />
        </a>
        <a rel="noopener" href="mailto:lucas.assuncao.p@gmail.com">
          <img src={EmailIcon} alt="email" />
        </a>
      </SocialLinks>
    </Container>
  );
};

export default Social;
