import React from 'react';
import {
  ModalBackDrop,
  ModalContent,
  CloseButton,
} from '../../style/login/modal';
const LoginModal = ({ onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <ModalBackDrop onClick={handleOverlayClick}>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2 className="modal__title">포옹</h2>
        <div className="input__section">
          <label htmlFor="input__id" className="regular">
            🐶 아이디
          </label>
          <div className="input__container">
            <input
              type="text"
              placeholder="이메일을 입력해주세요"
              id="input__id"
              className="regular"
            />
          </div>

          <label htmlFor="input__password" className="regular">
            ⭐ 비밀번호
          </label>
          <div className="input__container">
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              id="input__password"
              className="regular"
            />
          </div>
        </div>
        <div className="btn__section">
          <button className="apply__btn">로그인</button>
        </div>
      </ModalContent>
    </ModalBackDrop>
  );
};

export default LoginModal;
