import React from 'react';
import { ProfileHeader } from '../../../style/myPage/profile';
import MyPet from '../../../asset/mypage/myPet.svg';

function UserProfile() {
  return (
    <>
      <ProfileHeader>
        <div className="profile__left">
          <img src={MyPet} alt="유저 프로필 이미지" className="profile__box" />
          <span className="user__name regular">구름이형</span>
        </div>
        <div className="profile__right">
          <button className="edit__btn">편집</button>
        </div>
      </ProfileHeader>
    </>
  );
}

export default UserProfile;
