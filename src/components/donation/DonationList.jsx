import React from 'react';
import DonationItem from './DonationItem';
import { dummy_data } from './dummy_data';
import { ListContainer } from '../../style/donation/donation';
import { useNavigate } from 'react-router-dom';

const DonationList = ({ selected }) => {
  return (
    <ListContainer>
      {(selected === '전체'
        ? dummy_data
        : dummy_data.filter((data) => data.species === selected)
      ).map((data, index) => {
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
