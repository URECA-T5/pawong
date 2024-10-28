import React from 'react';
import GlobalStyle from '../../style/global/global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHouse } from '@fortawesome/free-solid-svg-icons';
import { DonationHeader } from '../../style/donation/donation';
import ImageSlide from '../../components/donation/ImageSlide';
import { WhiteContainer } from '../../style/donation/itemDetail';
import ItemDetailBody from '../../components/donation/ItemDetailBody';
import ItemDetailBottom from '../../components/donation/ItemDetailBottom';

const DonationItemDetail = () => {
  return (
    <>
      <GlobalStyle />
      <WhiteContainer>
        <DonationHeader>
          <FontAwesomeIcon icon={faArrowLeft} className="header__icon" />
          <div className="header__title">
            <p className="extraBold">상품 상세</p>
          </div>
          <FontAwesomeIcon icon={faHouse} className="header__icon" />
        </DonationHeader>
        <ImageSlide />
        <ItemDetailBody />
        <ItemDetailBottom />
      </WhiteContainer>
    </>
  );
};

export default DonationItemDetail;
