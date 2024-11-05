import React from 'react';
import { HeaderContainer } from '../../style/payment/payment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const PaymentHeader = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <FontAwesomeIcon
        icon={faArrowLeft}
        onClick={() => navigate(-1)}
        className="header__icon"
      />
      <div className="header__title">
        <p className="extraBold">후원결제</p>
      </div>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} className="header__icon" />
      </Link>
    </HeaderContainer>
  );
};

export default PaymentHeader;
