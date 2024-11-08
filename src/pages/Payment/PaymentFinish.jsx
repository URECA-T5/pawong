import React, { useEffect } from 'react';
import GlobalStyle, { MainContainer } from '../../style/global/global';
import PaymentHeader from '../../components/payment/PaymentHeader';
import PaymentMessage from '../../components/payment/PaymentMessage';
import { useLocation } from 'react-router-dom';
import { registerDonation } from '../../api/donation/donation';

const PaymentFinish = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const orderId = params.get('orderId');
  const paymentKey = params.get('paymentKey');
  const petId = params.get('petId');
  const donationItemId = params.get('donationItemId');
  const quantity = params.get('quantity');

  useEffect(() => {
    if (orderId && paymentKey && petId && donationItemId && quantity) {
      registerDonation(petId, donationItemId, { quantity });
    }
  }, [orderId, paymentKey, petId, donationItemId, quantity]);

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
