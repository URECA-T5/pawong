import React from 'react';
import { ItemContainer } from '../../style/payment/payment';
import ItemInfo from './ItemInfo';
import ItemPrice from './ItemPrice';

const sample_item = {
  src: 'https://sitem.ssgcdn.com/15/52/01/item/1000030015215_i2_1200.jpg',
  category: '강아지',
  title: 'PROBEST 5kg',
  price: 20000,
  cnt: 1,
};

const PaymentItem = () => {
  return (
    <ItemContainer>
      <p className="bold">후원 상품</p>
      <ItemInfo item={sample_item} />
      <ItemPrice item={sample_item} />
    </ItemContainer>
  );
};

export default PaymentItem;
