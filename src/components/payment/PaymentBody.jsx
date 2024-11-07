import React from 'react';
import { BodyContainer } from '../../style/payment/payment';
import PaymentProfile from './PaymentProfile';
import PaymentItem from './PaymentItem';

const PaymentBody = () => {
  return (
    <BodyContainer>
      <PaymentProfile />
      <PaymentItem />
    </BodyContainer>
  );
};

export default PaymentBody;
