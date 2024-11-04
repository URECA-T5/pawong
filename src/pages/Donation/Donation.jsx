import React, { useState } from 'react';
import DonationMenu from '../../components/donation/DonationMenu';
import DonationList from '../../components/donation/DonationList';
import GlobalStyle, { MainContainer } from '../../style/global/global';
import { DonationHeader } from '../../style/donation/donation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHouse } from '@fortawesome/free-solid-svg-icons';

const Donation = () => {
  const [category, setCategory] = useState('all');

  return (
    <div>
      <GlobalStyle />
      <MainContainer className="bold">
        <DonationHeader>
          <FontAwesomeIcon icon={faArrowLeft} className="header__icon" />
          <div className="header__title">
            <p className="extraBold">후원하기</p>
          </div>
          <FontAwesomeIcon icon={faHouse} className="header__icon" />
        </DonationHeader>
        <DonationMenu category={category} setCategory={setCategory} />
        <DonationList />
      </MainContainer>
    </div>
  );
};

export default Donation;
