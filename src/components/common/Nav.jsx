import {
  faBars,
  faHome,
  faPaw,
  faPencil,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../style/main/navbar';

const Nav = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <Navbar>
        <div>
          <button onClick={() => handleClick('/')}>
            <FontAwesomeIcon icon={faHome} />
            <span className="regular">홈</span>
          </button>
          <button onClick={() => handleClick('/pawong')}>
            <FontAwesomeIcon icon={faPaw} />
            <span className="regular">포옹 기록</span>
          </button>
          <button onClick={() => handleClick('/dog/upload')}>
            <FontAwesomeIcon icon={faPencil} />
            <span className="regular">임보동물 등록</span>
          </button>
          <button onClick={() => handleClick('/menu')}>
            <FontAwesomeIcon icon={faBars} />
            <span className="regular">메뉴</span>
          </button>
        </div>
      </Navbar>
    </>
  );
};

export default Nav;
