import React from 'react';
import GlobalStyle, { MainContainer } from '../../style/global/global';
import PaymentBody from '../../components/payment/PaymentBody';
import PaymentHeader from '../../components/payment/PaymentHeader';

const Payment = () => {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <PaymentHeader />
        <PaymentBody />
      </MainContainer>
    </>
  );
};

export default Payment;
