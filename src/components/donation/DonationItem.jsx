import React from 'react';
import { ItemContainer, ItemImageArea } from '../../style/donation/donation';
import { Link } from 'react-router-dom';
import serverBaseUrl from '../../config/serverConfig';

const DonationItem = ({ donationItemImages, id, brand, name, price }) => {
  return (
    <ItemContainer>
      <Link to={`/donation-item/${id}`}>
        <div className="item__message">인기</div>
        <ItemImageArea
          src={`${serverBaseUrl}/${donationItemImages}`}
        ></ItemImageArea>
        <div className="item__info">
          <div className="item__brand">{brand}</div>
          <div className="item__title">{name}</div>
          <div className="item__price">{price.toLocaleString('ko-KR')}원</div>
        </div>
      </Link>
    </ItemContainer>
  );
};

export default DonationItem;
