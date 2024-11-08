import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHouse } from '@fortawesome/free-solid-svg-icons';
import { DonationHeader } from '../../style/donation/donation';
import { WhiteContainer } from '../../style/donation/itemDetail';
import { useNavigate } from 'react-router-dom';
import DonationItemBody from '../../components/donation/item/DonationItemBody';

const DonationItemDetail = () => {
  const navigate = useNavigate();

  return (
    <>
      <WhiteContainer>
        <DonationHeader>
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={() => navigate(-1)}
            className="header__icon"
          />
          <div className="header__title">
            <p className="extraBold">상품 상세</p>
          </div>
          <FontAwesomeIcon
            icon={faHouse}
            className="header__icon"
            onClick={() => navigate('/')}
          />
        </DonationHeader>
        <DonationItemBody />
      </WhiteContainer>
    </>
  );
};

export default DonationItemDetail;
