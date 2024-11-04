import styled from 'styled-components';

const colors = {
  placeholder: '#cccccc',
  point: '#5850fe',
  skyBackground: '#e3ecff',
  darkGray: '#6d6e71',
  defaultBackground: '#f3f3f6',
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  width: 35rem;
  height: 10rem;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ModalButton = styled.button`
  background-color: ${colors.point};
`;

const Modal = ({ onClose, modalType }) => {
  const handleOverlayClick = () => {
    onClose();
  };

  const message = modalType === 'delete' ? '삭제했어요' : '저장했어요';

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <h2>{message}</h2>
        <img src="asset/admin/dogBowl.svg" alt="icon" />
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
