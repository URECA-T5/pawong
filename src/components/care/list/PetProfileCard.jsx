import React from 'react';
import { ProfileItem } from '../../../style/care/list/careList';
import serverBaseUrl from '../../../config/serverConfig';
import { Link } from 'react-router-dom';

const PetProfileCard = ({ data }) => {
  return (
    <Link to={`/diary-feed/${data.id}`}>
      <ProfileItem>
        <img
          src={`${serverBaseUrl}/${data.profileImage}`}
          alt="no images"
          className="item__img"
        />
        <div className="item__info bold">{`${data.name} ${data.age}세 (${data.gender})`}</div>
        <p className="bold">살펴보기</p>
      </ProfileItem>
    </Link>
  );
};

export default PetProfileCard;
