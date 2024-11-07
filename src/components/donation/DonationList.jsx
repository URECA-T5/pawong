import React, { useEffect, useRef } from 'react';
import DonationItem from './DonationItem';
import { ListContainer } from '../../style/donation/donation';
import { useDonation } from '../../stores/donation/useDonation';

const DonationList = ({ selected }) => {
  const { data, loadAllData } = useDonation();
  const isLoadData = useRef(true);

  useEffect(() => {
    if (isLoadData.current) {
      isLoadData.current = false;
      loadAllData();
      console.log(data);
    }
  }, [data]);

  return (
    <ListContainer>
      {data &&
        (selected === '전체'
          ? data
          : data.filter((data) => data?.tag === selected)
        ).map((data, index) => {
          return <DonationItem {...data} key={data?.name + index} />;
        })}
    </ListContainer>
  );
};

export default DonationList;
