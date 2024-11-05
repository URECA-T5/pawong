import React, { useEffect, useRef } from 'react';
import { ListBodySection } from '../../../style/care/list/careList';
import { useCareList } from '../../../stores/care/list/useCareList';
import PetProfileCard from './PetProfileCard';

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
        return <PetProfileCard data={data} key={index} />;
      })}
    </ListBodySection>
  );
};

export default CareListBody;
