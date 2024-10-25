import React from 'react';
import GoogleButton from '../../style/login/googleBtn';

const GoogleLoginButton = () => {
  const handleGoogleLogin = () =>
    (window.location.href = 'http://localhost:8080/auth/google');

  return (
    <GoogleButton onClick={() => handleGoogleLogin()}>
      <img src="/asset/login/googleLogo.svg" alt="Google Logo" />
    </GoogleButton>
  );
};

export default GoogleLoginButton;
