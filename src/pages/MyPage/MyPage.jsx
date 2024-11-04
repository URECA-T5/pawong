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
import UserProfile from '../../components/mypage/Login/UserProfile';
import DefaultPet from '../../components/mypage/DefaultPet';
import DefaultFav from '../../components/mypage/DefaultFav';
import UserHistory from '../../components/mypage/UserHistory';
import UserPet from '../../components/mypage/Login/UserPet';
import UserFavPet from '../../components/mypage/Login/UserFavPet';
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
          {/* <DefaultPet /> */}
          <UserPet />
        </MyPetSection>
        <MyFavorites>
          {/* <DefaultFav /> */}
          <UserFavPet />
        </MyFavorites>
        <MyHistory>
          <UserHistory />
        </MyHistory>
      </MainSection>
    </>
  );
}

export default MyPage;
