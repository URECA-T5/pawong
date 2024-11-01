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
import UserProfile from '../../components/mypage/UserProfile';
import DefaultPet from '../../components/mypage/DefaultPet';
import DefaultFav from '../../components/mypage/DefaultFav';
import UserHistory from '../../components/mypage/UserHistory';
function MyPage() {
  return (
    <>
      <MyPageHeader>
        <FontAwesomeIcon icon={faArrowLeft} className="header__icon" />
        <h2 className="regular">마이 페이지</h2>
        <FontAwesomeIcon icon={faHouse} className="header__icon" />
      </MyPageHeader>
      <MainSection>
        <ProfileSection>
          <UserProfile />
        </ProfileSection>
        <MyPetSection>
          <DefaultPet />
        </MyPetSection>
        <MyFavorites>
          <DefaultFav />
        </MyFavorites>
        <MyHistory>
          <UserHistory />
        </MyHistory>
      </MainSection>
    </>
  );
}

export default MyPage;
