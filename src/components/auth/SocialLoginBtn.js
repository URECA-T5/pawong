import React from 'react';
import SocialBtn from '../../style/login/socialBtn';
import { SOCIAL_LOGIN_PROVIDER } from '../../config/socialLogin';

const SocialLoginBtn = ({ provider }) => {
  const { img, url, css } = SOCIAL_LOGIN_PROVIDER[provider];
  const handleSocialLogin = () => (window.location.href = url);

  return (
    <SocialBtn onClick={() => handleSocialLogin()} css={css}>
      <img src={img} alt={`${provider} Logo`} />
    </SocialBtn>
  );
};

export default SocialLoginBtn;
