import React from 'react';
import { BodyContainer } from '../../style/donation/itemDetail';
import serverBaseUrl from '../../config/serverConfig';

const ItemDetailBody = ({ item }) => {
  return (
    <BodyContainer>
      <div className="item__category bold">{item.tag}</div>
      <p className="bold">{item.brand}</p>
      <p className="item__title item__gap">{item.name}</p>
      <div className="item__row item__gap">
        <p>⭐ item.review</p>
        <p className="item__price bold">
          {item.price.toLocaleString('ko-KR')}원
        </p>
      </div>
      <div className="item__split" />
      <p className="item__gap bold">상품 상세정보</p>
      <div className="item__message item__gap bold">배송 안내</div>
      {item.donationItemDetailImages.map((src, index) => {
        return (
          <div key={index}>
            <img
              className="item__description"
              src={`${serverBaseUrl}/${src}`}
              alt="no description"
            />
          </div>
        );
      })}
    </BodyContainer>
  );
};

export default ItemDetailBody;
