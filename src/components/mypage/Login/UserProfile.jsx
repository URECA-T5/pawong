import React from 'react';
import { ProfileHeader } from '../../../style/myPage/profile';
import MyPet from '../../../asset/mypage/myPet.svg';
import { Link } from 'react-router-dom';

function UserProfile() {
  return (
    <>
      <ProfileHeader>
        <div className="profile__left">
          <img src={MyPet} alt="유저 프로필 이미지" className="profile__box" />
          <span className="user__name regular">구름이형</span>
        </div>
        <div className="profile__right">
          <Link>
            <button className="edit__btn">편집</button>
          </Link>
        </div>
      </ProfileHeader>
    </>
  );
}

export default UserProfile;
