import React from 'react';
import GlobalStyle, { MainContainer } from '../../style/global/global';
import PaymentHeader from '../../components/payment/PaymentHeader';
import PaymentMessage from '../../components/payment/PaymentMessage';

const PaymentFinish = () => {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <PaymentHeader />
        <PaymentMessage />
      </MainContainer>
    </>
  );
};

export default PaymentFinish;
