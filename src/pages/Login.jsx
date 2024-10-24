// Home.js
import React from 'react';
import GlobalStyle, { MainContainer } from '../style/global/global';
import { LoginHeader, LoginBody } from '../style/login/login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import GoogleLoginButton from '../components/common/GoogleLoginButton';
import { GoogleOAuthProvider } from '@react-oauth/google';

const Login = () => {
  const CLIENT_ID = process.env.REACT_APP_GOOGLE_API_KEY;
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <LoginHeader>
          <FontAwesomeIcon icon={faHouse} />
        </LoginHeader>
        <LoginBody>
          <h4 className="login__h4">반려동물 1등 플랫폼</h4>
          <p className="login__p">모든 반려동물의 행복을 바라며</p>
          <h1 className="login__h1">포옹</h1>
          <div className="img__section">
            <img
              src="/asset/login/Login_Img.svg"
              alt="로그인 메인이미지"
              className="login__img"
            />
          </div>

          <div className="line__section">
            <hr className="line" />
            <span className="sns-login-text">SNS 로그인</span>
            <hr className="line" />
          </div>

          <div className="loginBtn__section">
            <GoogleOAuthProvider clientId={CLIENT_ID}>
              {' '}
              {}
              <GoogleLoginButton />
            </GoogleOAuthProvider>
          </div>

          <footer></footer>
        </LoginBody>
      </MainContainer>
    </>
  );
};

export default Login;
