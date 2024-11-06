import React from 'react';
import { ProfileHeader } from '../../../style/myPage/profile';
import MyPet from '../../../asset/mypage/myPet.svg';
import { Link } from 'react-router-dom';
import serverBaseUrl from '../../../config/serverConfig';
function UserProfile({ user }) {
  console.log(user.profileImage);
  const DEFAULT_PROFILE_IMAGE = MyPet;
  const getProfileImageUrl = (profileImage) => {
    if (!profileImage) return DEFAULT_PROFILE_IMAGE;

    const isFullUrl = profileImage.startsWith('http');
    if (isFullUrl) return profileImage;
    console.log(profileImage);

    return `${serverBaseUrl}/${profileImage}`;
  };

  return (
    <ProfileHeader>
      <div className="profile__left">
        <img
          src={getProfileImageUrl(user.profileImage) || MyPet}
          alt="유저 프로필 이미지"
          className="profile__box"
        />
        <span className="user__name regular">
          {user.nickName || '사용자 이름'}
        </span>
      </div>
      <div className="profile__right">
        <Link>
          <button className="edit__btn">편집</button>
        </Link>
      </div>
    </ProfileHeader>
  );
}

export default UserProfile;
