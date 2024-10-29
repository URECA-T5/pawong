import React, { useRef, useState } from 'react';
import { BottomModalContainer } from '../../style/donation/itemDetail';

const ItemCount = ({ modalRef, title, price }) => {
  const cnt = useRef(1);
  const [totalPrice, setTotalPrice] = useState(cnt.current * price);

  const handleCnt = (e) => {
    cnt.current += e.target.id === 'btn__minus' && cnt.current > 0 ? -1 : 1;
    setTotalPrice(cnt.current * price);
  };

  return (
    <BottomModalContainer
      ref={modalRef}
      onClick={(e) => {
        if (e.target === e.currentTarget) modalRef.current.close();
      }}
    >
      <div className="modal">
        <div className="modal__infoContainer">
          <div className="modal__infoLeft">
            <p className="modal__title">{title}</p>
            <p className="modal__price">{price.toLocaleString('ko-KR')}원</p>
          </div>
          <div className="modal__infoRight">
            <button
              id="btn__minus"
              className="modal__toggleBtn bold"
              onClick={handleCnt}
            >
              -
            </button>
            <p>{cnt.current}</p>
            <button
              id="btn__plus"
              className="modal__toggleBtn bold"
              onClick={handleCnt}
            >
              +
            </button>
          </div>
        </div>
        <div className="modal__total bold">
          <p className="bold">총 금액</p>
          <p className="modal__totalPrice bold">
            {totalPrice.toLocaleString('ko-KR')}원
          </p>
        </div>
        <button className="modal__buyBtn bold">구매하기</button>
      </div>
    </BottomModalContainer>
  );
};

export default ItemCount;
