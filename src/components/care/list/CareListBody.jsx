import React from 'react';
import { div } from 'framer-motion/client';
import {
  ListBodySection,
  ProfileItem,
} from '../../../style/care/list/careList';

const CareListBody = ({ selected, data }) => {
  return (
    <ListBodySection>
      {(selected === '전체'
        ? data
        : data.filter((data) => data.category === selected)
      ).map((data, index) => {
        return (
          <ProfileItem key={index}>
            <img src={data.src} alt="" className="item__img" />
            <div className="item__info bold">{`${data.name} ${data.age}세 (${data.gender})`}</div>
            <p className="bold">살펴보기</p>
          </ProfileItem>
        );
      })}
    </ListBodySection>
  );
};

export default CareListBody;
