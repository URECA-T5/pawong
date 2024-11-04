import React from 'react';
import Header from '../../../components/care/list/CareListHeader';
import UploadBody from '../../../components/care/upload/UploadBody';

const PetUpload = () => {
  return (
    <>
      <Header title={'임시보호 동물 등록'} />
      <UploadBody />
    </>
  );
};

export default PetUpload;
