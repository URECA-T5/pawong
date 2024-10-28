import React from 'react';
import GlobalStyle, { MainContainer } from '../../style/global/global';
import { NoticeHeader } from '../../style/notice/notice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { SenseBody } from '../../style/notice/commonSense';
import Content from '../../components/notice/Content';
function CommonSense() {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <NoticeHeader>
          <FontAwesomeIcon icon={faArrowLeft} className="header__icon" />
          <FontAwesomeIcon icon={faHouse} className="header__icon" />
        </NoticeHeader>
        <SenseBody>
          <div className="img__section">
            <img src="../asset/notice/senseImg.svg" alt="메인 이미지" />
          </div>
          <div className="title__section">
            <h2 className="bold">임시보호에 관해 궁금한 것들을</h2>
            <h2 className="bold">한 곳에 모았어요.</h2>
          </div>
          <Content />
        </SenseBody>
      </MainContainer>
    </>
  );
}

export default CommonSense;
