import React from 'react';
import {
  ModalBackDrop,
  ModalContent,
  CloseButton,
} from '../../style/login/modal';
import { useLogin } from '../../stores/auth/useLogin';
import { useNavigate } from 'react-router-dom';
const LoginModal = ({ onClose }) => {
  const navigate = useNavigate();
  const { error, message, login, setEmail, setPassword } = useLogin();

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email: e.target.input__id.value,
      password: e.target.input__password.value,
    };
    await login(formData).then(() => {
      alert('반갑습니다!');
      navigate('/');
    });
  };

  return (
    <ModalBackDrop onClick={handleOverlayClick}>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2 className="modal__title">포옹</h2>
        <form onSubmit={handleSubmit}>
          <div className="input__section">
            <label htmlFor="input__id" className="regular">
              🐶 아이디
            </label>
            <div className="input__container">
              <input
                type="email"
                placeholder="이메일을 입력해주세요"
                id="input__id"
                className="regular"
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="btn__section">
            <button type="submit" className="apply__btn">
              로그인
            </button>
          </div>
        </form>
        {error && <p className="error">{error}</p>}
        {message && <p className="success">{message}</p>}
      </ModalContent>
    </ModalBackDrop>
  );
};

export default LoginModal;
