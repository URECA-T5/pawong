import React, { useEffect, useRef } from 'react';
import {
  ListBodySection,
  ProfileItem,
} from '../../../style/care/list/careList';
import { useCareList } from '../../../stores/care/list/useCareList';

const CareListBody = ({ selected }) => {
  const { data, loadData } = useCareList();
  const isLoadData = useRef(true);

  useEffect(() => {
    if (isLoadData.current) {
      isLoadData.current = false;
      loadData();
      console.log(data);
    }
  }, [data]);

  return (
    <ListBodySection>
      {(selected === '전체'
        ? data
        : data.filter((data) => data.species === selected)
      ).map((data, index) => {
        return (
          <ProfileItem key={index}>
            <img
              src={data.profileImage}
              alt="no images"
              className="item__img"
            />
            <div className="item__info bold">{`${data.name} ${data.age}세 (${data.gender})`}</div>
            <p className="bold">살펴보기</p>
          </ProfileItem>
        );
      })}
    </ListBodySection>
  );
};

export default CareListBody;
