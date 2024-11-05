import React from 'react';
import { ProfileItem } from '../../../style/care/list/careList';

const PetProfileCard = ({ data }) => {
  return (
    <ProfileItem>
      <img
        src={data?.pet?.profileImage}
        alt="no images"
        className="item__img"
      />
      <div className="item__info bold">{`${data.name} ${data.age}세 (${data.gender})`}</div>
      <p className="bold">살펴보기</p>
    </ProfileItem>
  );
};

export default PetProfileCard;
