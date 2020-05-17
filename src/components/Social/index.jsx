import React from 'react';

import { SocialStyled as Container, TextStyled as Text, SocialLinks, LinkStyled as Link } from './styled';

import GithubIcon from '../../assets/images/icons/logo-github.svg';
import TwitterIcon from '../../assets/images/icons/logo-twitter.svg';
import LinkedinIcon from '../../assets/images/icons/logo-linkedin.svg';
import InstagramIcon from '../../assets/images/icons/logo-instagram.svg';
import EmailIcon from '../../assets/images/icons/icon-email.svg';

const Social = () => {
  return (
    <Container>
      <Text>You can find me at:</Text>
      <SocialLinks>
        <Link first={true} href="https://github.com/lucas-a-pelegrino" target="_blank">
          <img src={GithubIcon} alt="github" />
        </Link>
        <Link href="https://twitter.com/mrcrowlp" target="_blank">
          <img src={TwitterIcon} alt="twitter" />
        </Link>
        <Link href="https://www.linkedin.com/in/lucas-a-pelegrino/" target="_blank">
          <img src={LinkedinIcon} alt="linkedin" />
        </Link>
        <Link href="https://www.instagram.com/mr.crow.lp/" target="_blank">
          <img src={InstagramIcon} alt="instagram" />
        </Link>
        <Link rel="noopener" href="mailto:lucas.assuncao.p@gmail.com">
          <img src={EmailIcon} alt="email" />
        </Link>
      </SocialLinks>
    </Container>
  );
};

export default Social;
