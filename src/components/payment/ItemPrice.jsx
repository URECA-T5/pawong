import React, { useRef } from 'react';
import { ItemPriceArea, ItemTotalPriceArea } from '../../style/payment/payment';
import { useDonation } from '../../stores/donation/useDonation';
import { Toss } from './Toss';

const ItemPrice = () => {
  const { detailData, itemCnt } = useDonation();
  const isVisible = useRef();
  const handleShowModal = () => isVisible.current.showModal();

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
        <div>
          <button className="payment__start bold" onClick={handleShowModal}>
            결제하기
          </button>
          <Toss
            modalRef={isVisible}
            name={detailData.name}
            price={itemCnt * detailData.price}
            detailData={detailData}
          />
        </div>
      </ItemTotalPriceArea>
    </>
  );
};

export default ItemPrice;
