import React, { useRef, useState } from 'react';
import { BottomModalContainer } from '../../style/donation/itemDetail';
import ItemCount from './ItemCount';

const ItemBottomModal = ({ modalRef, title, price }) => {
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
          <ItemCount cnt={cnt} setTotalPrice={setTotalPrice} price={price} />
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

export default ItemBottomModal;
