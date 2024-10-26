// GoogleLoginButton.js
import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import GoogleButton from '../../style/login/googleBtn';

const GoogleLoginButton = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log('Login Success:', tokenResponse);
    },
    onError: (error) => {
      console.error('Login Failed:', error);
    },
  });

  return (
    <GoogleButton onClick={() => login()}>
      <img src="/asset/login/googleLogo.svg" alt="Google Logo" />
    </GoogleButton>
  );
};

export default GoogleLoginButton;
