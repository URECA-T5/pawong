import React, { useState } from 'react';
import GlobalStyle, { MainContainer } from '../../../style/global/global';
import DonationMenu from '../../../components/donation/DonationMenu';
import CareListHeader from '../../../components/care/list/CareListHeader';
import HeaderMessage from '../../../components/care/list/HeaderMessage';
import CareListBody from '../../../components/care/list/CareListBody';
import { sample_data } from '../../../components/care/list/care_list_sample_data';

const CareList = () => {
  const [category, setCategory] = useState('전체');

  return (
    <>
      <CareListHeader title={'임시 보호 동물 목록'} />
      <HeaderMessage />
      <DonationMenu category={category} setCategory={setCategory} />
      <CareListBody selected={category} data={sample_data} />
    </>
  );
};

export default CareList;
