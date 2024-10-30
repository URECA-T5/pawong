import React from 'react';
import { ItemPriceArea, ItemTotalPriceArea } from '../../style/payment/payment';

const ItemPrice = ({ item }) => {
  return (
    <>
      <ItemPriceArea>
        <p className="bold">구매 정보</p>
        <div className="payment__divRow">
          <p className="text__darkGray regular">상품금액</p>
          <p className="bold">{item.price.toLocaleString('ko-KR')}원</p>
        </div>
        <div className="payment__divRow">
          <p className="text__darkgray regular">수량</p>
          <p className="bold">{item.cnt}개</p>
        </div>
      </ItemPriceArea>
      <ItemTotalPriceArea>
        <div className="payment__divRow">
          <p className="bold">총 결제 금액</p>
          <p className="text__pastelBlue bold">
            {(item.cnt * item.price).toLocaleString('ko-KR')}원
          </p>
        </div>
        <button className="payment__start bold">결제하기</button>
      </ItemTotalPriceArea>
    </>
  );
};

export default ItemPrice;
