import React from 'react';
import { BodyContainer } from '../../style/payment/payment';
import PaymentProfile from './PaymentProfile';
import PaymentItem from './PaymentItem';

const sample_profile = {
  src: 'https://img.freepik.com/free-photo/adorable-portrait-pomeranian-dog_23-2151771743.jpg',
  name: '포동이',
};

const PaymentBody = () => {
  return (
    <BodyContainer>
      <PaymentProfile profile={sample_profile} />
      <PaymentItem />
    </BodyContainer>
  );
};

export default PaymentBody;
