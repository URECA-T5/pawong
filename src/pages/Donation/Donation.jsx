import React, { useState } from 'react';
import DonationMenu from '../../components/donation/DonationMenu';
import DonationList from '../../components/donation/DonationList';
import { MainContainer } from '../../style/global/global';
import { DonationHeader } from '../../style/donation/donation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Donation = () => {
  const [category, setCategory] = useState('전체');
  const navigate = useNavigate();

  return (
    <div>
      <MainContainer className="bold">
        <DonationHeader>
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={() => navigate(-1)}
            className="header__icon"
          />
          <div className="header__title">
            <p className="extraBold">후원하기</p>
          </div>
          <FontAwesomeIcon
            icon={faHouse}
            onClick={() => navigate('/')}
            className="header__icon"
          />
        </DonationHeader>
        <DonationMenu category={category} setCategory={setCategory} />
        <DonationList selected={category} />
      </MainContainer>
    </div>
  );
};

export default Donation;
