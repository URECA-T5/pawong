import React from 'react';
import { ItemInfoArea } from '../../style/payment/payment';
import serverBaseUrl from '../../config/serverConfig';
import { useDonation } from '../../stores/donation/useDonation';

const ItemInfo = () => {
  const { detailData } = useDonation();

  return (
    <ItemInfoArea>
      <img
        src={`${serverBaseUrl}/${detailData.donationItemImages[0]}`}
        alt="no images"
        className="item__img"
      />
      <div className="item__detailArea">
        <div className="item__category bold">{detailData.tag}</div>
        <p className="item__title bold">{detailData.name}</p>
        <p className="item__price bold">
          {detailData.price.toLocaleString('ko-KR')}원
        </p>
      </div>
    </ItemInfoArea>
  );
};

export default ItemInfo;
