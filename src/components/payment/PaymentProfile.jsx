import React from 'react';
import { ProfileContainer } from '../../style/payment/payment';
import { diaryFeed } from '../../stores/diaryFeedStore';
import serverBaseUrl from '../../config/serverConfig';

const PaymentProfile = () => {
  const { data } = diaryFeed();

  return (
    <ProfileContainer>
      <img
        src={`${serverBaseUrl}/${data.profileImage}`}
        alt="no profile"
        className="profile__img"
      />
      <div className="profile__message bold">
        <span className="message__highlight bold">{data.name}</span>
        <span className="bold">에게</span>
        <p className="bold">후원할 상품을 결제할게요</p>
      </div>
    </ProfileContainer>
  );
};

export default PaymentProfile;
