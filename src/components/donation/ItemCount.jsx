import React from 'react';
import { ToggleBtn } from '../../style/donation/itemDetail';

const ItemCount = ({ cnt, setTotalPrice, price }) => {
  const handleCnt = (e) => {
    cnt.current += e.target.id === 'btn__plus' ? 1 : cnt.current > 0 ? -1 : 0;
    setTotalPrice(cnt.current * price);
  };
  return (
    <ToggleBtn>
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
    </ToggleBtn>
  );
};

export default ItemCount;
