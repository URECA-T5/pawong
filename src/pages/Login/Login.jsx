import React, { useState } from 'react';
import { LoginHeader, LoginBody } from '../../style/login/login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialLoginBtn from '../../components/auth/SocialLoginBtn';
import { SOCIAL_LOGIN_PROVIDER } from '../../config/socialLogin';
import {
  faHouse,
  faArrowRight,
  faPaw,
} from '@fortawesome/free-solid-svg-icons';
import mainImg from '../../asset/login/Login_Img.svg';
import { Link } from 'react-router-dom';
import LoginModal from '../../components/login/LoginModal';

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <LoginHeader>
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} />
        </Link>
      </LoginHeader>
      <LoginBody>
        <h4 className="login__h4">반려동물 1등 플랫폼</h4>
        <p className="login__p">모든 반려동물의 행복을 바라며</p>
        <h1 className="login__h1 extraBold">포옹</h1>
        <div className="img__section">
          <img src={mainImg} alt="로그인 메인이미지" className="login__img" />
        </div>
        <div className="register__section">
          <p className="bold">회원이 아니신가요? 우리 함께해요</p>
          <Link to="/register">
            <button>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </Link>
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
          <button className="pawong__loginImg" onClick={openModal}>
            <FontAwesomeIcon icon={faPaw} />
          </button>
        </div>
        {isModalOpen && <LoginModal onClose={closeModal} />}
      </LoginBody>
    </>
  );
};

export default Login;
