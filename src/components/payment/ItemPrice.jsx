import React, { useRef } from 'react';
import { ItemPriceArea, ItemTotalPriceArea } from '../../style/payment/payment';
import { Link } from 'react-router-dom';
import { Toss } from './Toss';

const ItemPrice = ({ item }) => {
  const isVisible = useRef();
  const handleShowModal = () => isVisible.current.showModal();

  return (
    <>
      <ItemPriceArea>
        <p className="bold">구매 정보</p>
        <div className="payment__divRow">
          <p className="text__darkGrey regular">상품금액</p>
          <p className="bold">{item.price.toLocaleString('ko-KR')}원</p>
        </div>
        <div className="payment__divRow">
          <p className="text__darkGrey regular">수량</p>
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
        <div>
          <button className="payment__start bold" onClick={handleShowModal}>
            결제하기
          </button>
          <Toss modalRef={isVisible} title={item.title} price={item.price} />
        </div>
      </ItemTotalPriceArea>
    </>
  );
};

export default ItemPrice;
