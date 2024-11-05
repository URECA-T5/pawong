import React from 'react';
import { faAngleLeft, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
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
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} className="header__icon" />
        </Link>
      </HeaderIconSection>
    </HeaderSection>
  );
};

export default Header;
