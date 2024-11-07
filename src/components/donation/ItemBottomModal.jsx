import React, { useRef, useState } from 'react';
import { BottomModalContainer } from '../../style/donation/itemDetail';
import ItemCount from './ItemCount';
import { Link, useParams } from 'react-router-dom';
import { useDonation } from '../../stores/donation/useDonation';

const ItemBottomModal = ({ modalRef, title, price }) => {
  const params = useParams();
  const item_id = params.item_id;
  const cnt = useRef(1);
  const [totalPrice, setTotalPrice] = useState(cnt.current * price);
  const { setItemCnt } = useDonation();

  const handleSave = () => {
    setItemCnt(cnt.current);
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
        <Link to={`/payment`}>
          <button className="modal__buyBtn bold" onClick={handleSave}>
            구매하기
          </button>
        </Link>
      </div>
    </BottomModalContainer>
  );
};

export default ItemBottomModal;
