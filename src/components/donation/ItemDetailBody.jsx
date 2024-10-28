import React from 'react';
import { BodyContainer } from '../../style/donation/itemDetail';

const ItemDetailBody = () => {
  return (
    <BodyContainer>
      <div className="item__category bold">강아지</div>
      <p>PROBEST</p>
      <p className="item__title item__gap">프로베스트 독 - ROOKIE 루키</p>
      <div className="item__row item__gap">
        <p>⭐ 4.8</p>
        <p className="item__price bold">25,100원</p>
      </div>
      <div className="item__split" />
      <p className="item__gap bold">상품 상세정보</p>
      <div className="item__message item__gap bold">배송 안내</div>
      <img
        className="item__description"
        src="https://www.fordong.co.kr/_next/image?url=https%3A%2F%2Fcdn-fordong-prod.fordong.co.kr%2Fadmin%2F8dc0371d-c3fa-4946-8739-54d4ed259759&w=1080&q=75"
        alt="no description"
      />
      <img
        className="item__description"
        src="https://www.fordong.co.kr/_next/image?url=https%3A%2F%2Fcdn-fordong-prod.fordong.co.kr%2Fadmin%2F530148ef-7417-4afc-b237-f31406b10738&w=1080&q=75"
        alt="no description"
      />
    </BodyContainer>
  );
};

export default ItemDetailBody;
