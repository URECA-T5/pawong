import React from 'react';
import GlobalStyle, { MainContainer } from '../../style/global/global';
import { NoticeHeader } from '../../style/notice/notice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { RegisterBody } from '../../style/register/register';

function Register() {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <NoticeHeader>
          <Link to="/login">
            <FontAwesomeIcon icon={faArrowLeft} className="header__icon" />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} className="header__icon home" />
          </Link>
        </NoticeHeader>
        <RegisterBody>
          <div className="img__section">
            <img src="/asset/notice/senseImg.svg" alt="회원가입 이미지"></img>
          </div>
        </RegisterBody>
      </MainContainer>
    </>
  );
}

export default Register;
