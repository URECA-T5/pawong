import React from 'react';
import {
  MyPageHeader,
  ProfileSection,
  MainSection,
  MyPetSection,
  MyFavorites,
  MyHistory,
} from '../../style/myPage/mypage';
import { faHouse, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MyPage() {
  return (
    <>
      <MyPageHeader>
        <FontAwesomeIcon icon={faArrowLeft} className="header__icon" />
        <h2 className="regular">마이 페이지</h2>
        <FontAwesomeIcon icon={faHouse} className="header__icon" />
      </MyPageHeader>
      <MainSection>
        <ProfileSection>{/* profile 컴포넌트 */}</ProfileSection>
        <MyPetSection>{/* MyPet컴포넌트 */}</MyPetSection>
        <MyFavorites>{/* 즐겨찾기 컴포넌트 */}</MyFavorites>
        <MyHistory></MyHistory>
      </MainSection>
    </>
  );
}

export default MyPage;
