import React, { useEffect, useRef } from 'react';
import ImageSlide from '../ImageSlide';
import ItemDetailBody from '../ItemDetailBody';
import ItemDetailBottom from '../ItemDetailBottom';
import { useDonation } from '../../../stores/donation/useDonation';
import { useParams } from 'react-router-dom';

const DonationItemBody = () => {
  const { detailData, loadDetailData } = useDonation();
  const params = useParams();
  const item_id = params.item_id;
  const isLoadData = useRef(true);

  useEffect(() => {
    if (isLoadData.current) {
      isLoadData.current = false;
      loadDetailData(item_id);
      console.log(detailData);
    }
  }, [detailData]);

  return (
    <div>
      {detailData && (
        <>
          <ImageSlide src_list={detailData.donationItemImages} />
          <ItemDetailBody item={detailData} />
          <ItemDetailBottom title={detailData.name} price={detailData.price} />
        </>
      )}
    </div>
  );
};

export default DonationItemBody;
