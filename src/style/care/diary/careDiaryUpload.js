import styled from 'styled-components';

const colors = {
  placeholder: '#cccccc',
  point: '#5850fe',
  skyBackground: '#e3ecff',
  darkGray: '#6d6e71',
  defaultBackground: '#f3f3f6',
};

export const Header = styled.header`
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

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 22rem;
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
    outline-color: ${colors.point};
  }

  input::placeholder,
  textarea::placeholder {
    font-family: 'Pretendard-Regular', sans-serif;
    font-weight: 400;
    color: ${colors.darkGray};
  }

  .input__title {
    margin: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  textarea {
    border: 1px solid ${colors.placeholder};
    border-radius: 1rem;
    height: 10rem;
    padding: 0.5rem;
    resize: none;
    outline-color: ${colors.point};
  }

  .tag__container {
    margin-bottom: 0.625rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
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

export const TagButton = styled.button`
  font-family: 'Pretendard-Bold', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  border-radius: 1rem;
  width: 3.5rem;
  height: 1.7rem;
  margin: 0 0.3rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props) => (props.$selected ? colors.point : colors.darkGray)};
  background-color: ${(props) =>
    props.$selected ? colors.skyBackground : colors.defaultBackground};
`;

export const RequiredStar = styled.span`
  color: ${colors.point};
  margin-left: 0.2rem;
  font-size: 1.2rem;
`;
