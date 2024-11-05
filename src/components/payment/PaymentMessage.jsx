import React from 'react';
import {
  BodyArea,
  BottomBanner,
  MessageBody,
} from '../../style/payment/paymentFinish';
import { Link } from 'react-router-dom';

const PaymentMessage = () => {
  return (
    <>
      <BodyArea>
        <MessageBody>
          <div className="message__profileArea">
            <img
              src="https://img.freepik.com/free-photo/adorable-portrait-pomeranian-dog_23-2151771743.jpg"
              alt="no images"
              className="message__profileImg"
            />
          </div>
          <span className="text__dot bold">.</span>
          <span className="text__dot bold">.</span>
          <span className="text__dot bold">.</span>
          <div className="message__textArea">
            <p>
              <span className="text__highlight bold">포동이</span>
              <span className="bold">에게</span>
            </p>
            <p className="bold">후원 상품이</p>
            <p className="bold">전달되었습니다</p>

            <p className="text__highlight bold" style={{ paddingTop: '2rem' }}>
              감사합니다
            </p>
          </div>
          <div className="message__successImg">
            <img src={'/asset/payment/paymentSuccess.svg'} alt="" />
            <button className="button__navRecord regular">
              <Link to="/donation-history">내 후원 기록 보러가기</Link>
            </button>
          </div>
          <BottomBanner>
            <div className="banner__line" />
            <img
              src={'/asset/main/banner2.svg'}
              alt="Pawyong"
              className="banner__img"
            />
          </BottomBanner>
        </MessageBody>
      </BodyArea>
    </>
  );
};

export default PaymentMessage;
