import React from 'react';
import GlobalStyle, { MainContainer } from '../../style/global/global';
import { NoticeHeader } from '../../style/notice/notice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function CommonSense() {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <NoticeHeader>
          <FontAwesomeIcon icon={faArrowLeft} className="header__icon" />
          <FontAwesomeIcon icon={faHouse} className="header__icon" />
        </NoticeHeader>
      </MainContainer>
    </>
  );
}

export default CommonSense;
