import {
  faBars,
  faHouse,
  faPaw,
  faPencil,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../style/main/navbar';
import { isLogined } from '../../pages/Main';

const Nav = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };

  const navItems = [
    { path: '/', icon: faHouse, label: '홈' },
    { path: '/mypage', icon: faPaw, label: '포옹 기록' },
    { path: '/pet-upload', icon: faPencil, label: '임보동물 등록' },
    { path: '/menu', icon: faBars, label: '메뉴' },
  ];

  return (
    <>
      <Navbar>
        <div>
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() =>
                item.label !== '임보동물 등록'
                  ? handleClick(item.path)
                  : isLogined('/pet-upload')
              }
            >
              <FontAwesomeIcon icon={item.icon} />
              <span className="regular">{item.label}</span>
            </button>
          ))}
        </div>
      </Navbar>
    </>
  );
};

export default Nav;
