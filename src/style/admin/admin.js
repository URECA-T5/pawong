import styled from 'styled-components';

const colors = {
  placeholder: '#cccccc',
  point: '#5850fe',
  skyBackground: '#e3ecff',
  darkGray: '#6d6e71',
  defaultBackground: '#f3f3f6',
};

export const AdminHeader = styled.div`
  width: 100%;
  height: 3.25rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1.25rem;
  background-color: white;
  font-size: 1.2rem;

  .extraBold {
    flex: 0.55;
  }

  .header__icon {
    &:hover,
    &:focus {
      color: ${colors.point};
      outline: none;
      cursor: pointer;
    }
  }
`;

export const DonationUploadTabBtn = styled.button`
  margin: 1rem 0 1.5rem 0;
  width: 48%;
  font-size: 1rem;
  position: relative;
  cursor: pointer;
  border: none;
  background: none;
  color: ${({ $isSelected }) =>
    $isSelected ? `${colors.point}` : `${colors.darkGray}`};
`;

export const ProductSection = styled.section`
  margin: 1.25rem;
  padding: 1.25rem;
  background-color: white;
  border: 1px white;
  border-radius: 1rem;
  gap: 0.625rem;
`;

export const TagButton = styled.button`
  font-family: 'Pretendard-Bold', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  border-radius: 1rem;
  width: 3.5rem;
  height: 1.7rem;
  margin: 0 0.625rem 0 0;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.$selected ? colors.point : colors.darkGray)};
  background-color: ${(props) =>
    props.$selected ? colors.skyBackground : colors.defaultBackground};
  cursor: pointer;
`;

export const FormSection = styled.div`
  display: flex;
  justify-content: center;

  .form__imgContainer {
    display: flex;
    justify-content: center;
    margin: 1.5rem 0;
  }

  .form__imgtext {
    border: 1px solid ${colors.placeholder};
    border-radius: 1rem;
    width: 7.8rem;
    height: 7.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .form__img--upload {
    color: ${colors.darkGray};
  }

  .form__img--label {
    color: ${colors.darkGray};
    cursor: pointer;
  }

  .button__container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.625rem;
  }
`;

export const InputSection = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  .input__title {
    display: flex;
    align-items: center;
    margin: 0.625rem 0;
  }
  .input__tagBtn {
    margin-bottom: 1rem;
  }

  .input__content {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 0.1rem;
    padding: 0.5rem;
  }

  input {
    height: 2.82rem;
    width: 500px;
    padding: 0.5rem;
    border: 1px solid ${colors.placeholder};
    border-radius: 1rem;
    outline-color: ${colors.point};
    margin-top: 0.625rem;
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
  cursor: pointer;
  color: ${(props) => (props.$cancel ? colors.point : 'white')};
  background-color: ${(props) =>
    props.$cancel ? colors.skyBackground : colors.point};
`;
