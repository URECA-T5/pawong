import React from 'react';
import { HeaderContainer } from '../../style/payment/payment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const PaymentHeader = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <FontAwesomeIcon icon={faArrowLeft} className="header__icon" />
      <div className="header__title">
        <p className="extraBold">후원결제</p>
      </div>
      <FontAwesomeIcon
        onClick={() => navigate('/')}
        icon={faHouse}
        className="header__icon"
      />
    </HeaderContainer>
  );
};

export default PaymentHeader;
