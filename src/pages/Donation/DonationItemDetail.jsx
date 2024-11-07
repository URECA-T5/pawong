import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHouse } from '@fortawesome/free-solid-svg-icons';
import { DonationHeader } from '../../style/donation/donation';
import { WhiteContainer } from '../../style/donation/itemDetail';
import { useNavigate } from 'react-router-dom';
import { useDonation } from '../../stores/donation/useDonation';
import DonationItemBody from '../../components/donation/item/DonationItemBody';

const data = {
  category: '강아지',
  id: 1,
  src_list: [
    'https://sitem.ssgcdn.com/15/52/01/item/1000030015215_i2_1200.jpg',
    'https://sitem.ssgcdn.com/15/52/01/item/1000030015215_i3_1200.jpg',
    'https://sitem.ssgcdn.com/15/52/01/item/1000030015215_i4_1200.jpg',
  ],
  brand: 'PROBEST',
  title: '프로베스트 독 - ROOKIE 루키',
  price: 25000,
  review: 4.8,
  desc_list: [
    'https://www.fordong.co.kr/_next/image?url=https%3A%2F%2Fcdn-fordong-prod.fordong.co.kr%2Fadmin%2F8dc0371d-c3fa-4946-8739-54d4ed259759&w=1080&q=75',
    'https://www.fordong.co.kr/_next/image?url=https%3A%2F%2Fcdn-fordong-prod.fordong.co.kr%2Fadmin%2F530148ef-7417-4afc-b237-f31406b10738&w=1080&q=75',
  ],
};

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
