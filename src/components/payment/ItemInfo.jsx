import React from 'react';
import { ItemInfoArea } from '../../style/payment/payment';

const ItemInfo = ({ item }) => {
  return (
    <ItemInfoArea>
      <img src={item.src} alt="no images" className="item__img" />
      <div className="item__detailArea">
        <div className="item__category bold">{item.category}</div>
        <p className="item__title bold">{item.title}</p>
        <p className="item__price bold">
          {(item.price * item.cnt).toLocaleString('ko-KR')}원
        </p>
      </div>
    </ItemInfoArea>
  );
};

export default ItemInfo;
