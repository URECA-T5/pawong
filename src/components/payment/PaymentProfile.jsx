import React from 'react';
import { ProfileContainer } from '../../style/payment/payment';

const PaymentProfile = ({ profile }) => {
  return (
    <ProfileContainer>
      <img src={profile.src} alt="no profile" className="profile__img" />
      <div className="profile__message bold">
        <span className="message__highlight bold">{profile.name}</span>
        <span className="bold">에게</span>
        <p className="bold">후원할 상품을 결제할게요</p>
      </div>
    </ProfileContainer>
  );
};

export default PaymentProfile;
