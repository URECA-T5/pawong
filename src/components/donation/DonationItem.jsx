import React from 'react';
import { ItemContainer, ItemImageArea } from '../../style/donation/donation';

const DonationItem = ({ src, brand, title, price }) => {
  return (
    <ItemContainer>
      <div className="item__message">인기</div>
      <ItemImageArea src={src}></ItemImageArea>
      <div className="item__info">
        <div className="item__brand">{brand}</div>
        <div className="item__title">{title}</div>
        <div className="item__price">{price}</div>
      </div>
    </ItemContainer>
  );
};

export default DonationItem;
