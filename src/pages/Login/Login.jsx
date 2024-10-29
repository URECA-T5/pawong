import React from 'react';
<<<<<<< HEAD:src/pages/Login.jsx
import { LoginHeader, LoginBody } from '../style/login/login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import SocialLoginBtn from '../components/auth/SocialLoginBtn';
import { SOCIAL_LOGIN_PROVIDER } from '../config/socialLogin';
import mainImg from '../asset/login/Login_Img.svg';
=======
import GlobalStyle, { MainContainer } from '../../style/global/global';
import { LoginHeader, LoginBody } from '../../style/login/login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import GoogleLoginButton from '../../components/common/GoogleLoginButton';
import { GoogleOAuthProvider } from '@react-oauth/google';
>>>>>>> ac6203aa335e8b2cf97e4628937f57a34786ccc6:src/pages/Login/Login.jsx

const Login = () => {
  return (
    <>
      <LoginHeader>
        <FontAwesomeIcon icon={faHouse} />
      </LoginHeader>
      <LoginBody>
        <h4 className="login__h4">반려동물 1등 플랫폼</h4>
        <p className="login__p">모든 반려동물의 행복을 바라며</p>
        <h1 className="login__h1 extraBold">포옹</h1>
        <div className="img__section">
          <img src={mainImg} alt="로그인 메인이미지" className="login__img" />
        </div>

        <div className="line__section">
          <hr className="line" />
          <span className="sns-login-text">SNS 로그인</span>
          <hr className="line" />
        </div>

        <div className="loginBtn__section">
          {Object.entries(SOCIAL_LOGIN_PROVIDER).map(
            ([key, { img, url, css }]) => (
              <SocialLoginBtn
                key={key}
                provider={key}
                img={img}
                url={url}
                css={css}
              />
            ),
          )}
        </div>
      </LoginBody>
    </>
  );
};

export default Login;
