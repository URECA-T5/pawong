import styled from 'styled-components';
const mainPurple = '#5850fe';
export const ModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  width: 25rem;
  height: 28.75rem;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  .modal__title {
    display: flex;
    justify-content: center;
  }
  .input__section {
    margin-top: 2rem;
  }
  label {
    font-size: 1rem;
    color: #333333;
  }

  input {
    width: 100%;
    color: #cccccc;
    font-size: 1.1rem;
    border: none;
    border-bottom: 2px solid #cccccc;
    padding: 0.5rem 0;
    outline: none;
    transition: border-color 0.3s;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  .apply__btn {
    border: none;
    color: white;
    width: 10rem;
    height: 3rem;
    border-radius: 1rem;
    background-color: #5850fe;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .apply__btn:hover {
    transform: translateY(-1px);
  }
  .btn__section {
    display: flex;
    justify-content: center;
  }
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: flex-end;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
`;
