import React from 'react';
import DonationItem from './DonationItem';
import { dummy_data } from './dummy_data';
import { ListContainer } from '../../style/donation/donation';

const DonationList = () => {
  return (
    <ListContainer>
      {dummy_data.map((data, index) => {
        return (
          <div key={data.title + index}>
            <DonationItem {...data} />
          </div>
        );
      })}
    </ListContainer>
  );
};

export default DonationList;
