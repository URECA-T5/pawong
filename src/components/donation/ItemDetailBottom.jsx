import React from 'react';
import { BottomContainer } from '../../style/donation/donation-item-detail';

const ItemDetailBottom = () => {
  return (
    <BottomContainer>
      <div className="btn__share"></div>
      <div className="btn__buy bold">구매하기</div>
    </BottomContainer>
  );
};

export default ItemDetailBottom;
