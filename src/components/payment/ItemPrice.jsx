import React from 'react';
import { ItemPriceArea, ItemTotalPriceArea } from '../../style/payment/payment';
import { Link } from 'react-router-dom';
import { useDonation } from '../../stores/donation/useDonation';

const ItemPrice = () => {
  const { detailData, itemCnt } = useDonation();

  return (
    <>
      <ItemPriceArea>
        <p className="bold">구매 정보</p>
        <div className="payment__divRow">
          <p className="text__darkGrey regular">상품금액</p>
          <p className="bold">{detailData.price.toLocaleString('ko-KR')}원</p>
        </div>
        <div className="payment__divRow">
          <p className="text__darkGrey regular">수량</p>
          <p className="bold">{itemCnt - 0}개</p>
        </div>
      </ItemPriceArea>
      <ItemTotalPriceArea>
        <div className="payment__divRow">
          <p className="bold">총 결제 금액</p>
          <p className="text__pastelBlue bold">
            {(itemCnt * detailData.price).toLocaleString('ko-KR')}원
          </p>
        </div>
        <Link to="/payment-finish">
          <button className="payment__start bold">결제하기</button>
        </Link>
      </ItemTotalPriceArea>
    </>
  );
};

export default ItemPrice;
