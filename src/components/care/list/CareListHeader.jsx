import React from 'react';
import { faAngleLeft, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import {
  HeaderIconSection,
  HeaderSection,
} from '../../../style/care/list/careList';

const Header = ({ title }) => {
  const navigate = useNavigate();

  return (
    <HeaderSection>
      <HeaderIconSection $justify="flex-start">
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="header__icon"
          onClick={() => navigate(-1)}
        />
      </HeaderIconSection>
      <p className="extraBold">{title}</p>
      <HeaderIconSection $justify="flex-end">
        <FontAwesomeIcon
          icon={faHouse}
          className="header__icon"
          onClick={() => navigate('/')}
        />
      </HeaderIconSection>
    </HeaderSection>
  );
};

export default Header;
