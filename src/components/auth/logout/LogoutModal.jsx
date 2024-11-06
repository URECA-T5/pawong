// LogoutModal.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useUserProfile from '../../../stores/auth/useUserProfile';

const ModalWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 3.5rem;
  width: 12rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
  z-index: 50;
`;

const MenuItem = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const Icon = styled.span`
  font-size: 1.1rem;
`;

const LogoutModal = ({ onClose }) => {
  const { clearUser } = useUserProfile();
  const navigate = useNavigate();

  const handleLogout = () => {
    clearUser();
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    alert('로그아웃 되었습니다.');
    navigate('/');
  };

  return (
    <ModalWrapper onMouseLeave={onClose}>
      <MenuItem onClick={handleLogout}>
        <Icon>😿</Icon>
        <span>로그아웃</span>
      </MenuItem>
    </ModalWrapper>
  );
};

LogoutModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default LogoutModal;
