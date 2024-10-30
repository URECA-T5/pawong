import styled from 'styled-components';

const colors = {
  placeholder: '#cccccc',
  point: '#5850fe',
  skyBackground: '#e3ecff',
  darkGray: '#6d6e71',
};

export const Header = styled.header`
  width: 100%;
  height: 3.25rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1.25rem;
  background-color: white;

  .extraBold {
    font-size: 1rem;
    flex: 0.5;
  }

  .header__icon {
    margin-left: 0.625rem;
    cursor: pointer;
  }
`;

export const Section = styled.section`
  margin: 1.25rem;
  padding: 1.25rem;
  background-color: white;
  border: 1px white;
  border-radius: 1rem;
  gap: 0.625rem;

  .button__container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 340px;
  border: 1px solid ${colors.placeholder};
  border-radius: 1rem;
  margin-bottom: 1.25rem;
  padding: 1rem;

  .img__input {
    display: none;
  }

  .img__upload img {
    object-fit: contain;
    max-width: 31.25rem;
    max-height: 18.75rem;
  }

  .button__upload {
    border: none;
    border-radius: 1rem;
    color: ${colors.darkGray};
    cursor: pointer;
    justify-content: center;
    background-color: ${colors.skyBackground};
    font-size: 0.6rem;
    padding: 0.5rem;
  }
`;

export const InputContainer = styled.div`
  margin-top: 1rem;
  padding: 0.625rem;
  justify-content: center;

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 0.625rem;
  }

  input {
    height: 2.82rem;
    padding: 0.5rem;
    border: 1px solid ${colors.placeholder};
    border-radius: 1rem;
  }

  .input__title {
    margin: 0.25rem;
  }

  input:invalid:required {
    background-image: linear-gradient(to right, white, #e3ecff);
  }

  textarea {
    border: 1px solid ${colors.placeholder};
    border-radius: 1rem;
    height: 10rem;
    padding: 0.5rem;
    resize: none;
  }

  .tag__container {
    margin-bottom: 0.625rem;
    font-family: 'Pretendard-Regular', sans-serif;
    font-weight: 400;
  }

  .modal__button {
    font-family: 'Pretendard-Regular', sans-serif;
    font-weight: 400;
    height: 2.82rem;
    padding: 0.5rem;
    margin: 0.25rem;
    border: 1px solid ${colors.placeholder};
    border-radius: 1rem;
    text-align: start;
    color: ${colors.darkGray};
    background-color: white;
  }
`;

export const Button = styled.button`
  width: 13.4rem;
  height: 3.25rem;
  padding: 0.625rem;
  font-size: 1.25rem;
  margin: 0.625rem;
  border: none;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(props) => (props.$cancel ? colors.point : 'white')};
  background-color: ${(props) =>
    props.$cancel ? colors.skyBackground : colors.point};
`;
