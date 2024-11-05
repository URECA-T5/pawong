import React from 'react';
import GlobalStyle, { MainContainer } from '../../style/global/global';
import { NoticeHeader, NoticeBody } from '../../style/notice/notice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Notice = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <NoticeHeader>
          <FontAwesomeIcon
            onClick={handleClick}
            icon={faArrowLeft}
            className="header__icon"
          />
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} className="header__icon" />
          </Link>
        </NoticeHeader>
        <NoticeBody>
          <div className="notice__title">
            <h1 className="extraBold">포옹</h1>
          </div>

          <div className="notice__section">
            <h2>공지사항</h2>
            <div className="notice__list">
              <p className="bold">🦴 자주 묻는 질문</p>
              <p className="bold">🦴 포옹 서비스 점검안내</p>
              <p className="bold">🦴 포옹 배송 안내</p>
            </div>
            <img
              src="../asset/notice/dogIcon.png"
              alt="로그인 메인이미지"
              className="notice__img"
            />
          </div>

          <div className="notice__changes">
            <h2>변경사항</h2>
            <div className="notice__list">
              <p className="bold">
                🍪 (`24.10.25`) 포옹 개인정보 처리방침 변경 안내
              </p>
              <p className="bold">
                🍪 (`24.10.01`) 포옹 개인정보 처리방침 변경 안내
              </p>
            </div>
          </div>
        </NoticeBody>
      </MainContainer>
    </>
  );
};

export default Notice;
