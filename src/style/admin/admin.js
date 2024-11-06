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

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: ${({ $isSelected }) =>
      $isSelected ? colors.point : 'transparent'};
    position: relative;
    bottom: -4px;
    left: 0;
    transition: background-color 0.3s ease;
  }

  &:hover:after {
    background: ${({ $isSelected }) =>
      $isSelected ? colors.point : colors.darkGray};
  }
`;

export const ProductSection = styled.section`
  margin: 1.25rem;
  padding: 1.25rem;
  background-color: white;
  border: 1px white;
  border-radius: 1rem;
  gap: 0.625rem;

  .product__tagBtn {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
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
    flex-direction: column;
    align-items: center;
  }

  .form__imgtext {
    border-radius: 1rem;
    width: 7.8rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    background-color: ${colors.skyBackground};
  }

  .form__img--label {
    color: ${colors.darkGray};
    cursor: pointer;
  }

  .button__container {
    display: flex;
    justify-content: center;
    margin-top: 1.25rem;
  }

  .form__imgPerview {
    display: flex;
    gap: 0.625rem;
    justify-content: center;
    border: 1px solid ${colors.placeholder};
    padding: 0.625rem;
    border-radius: 1rem;
  }

  .preview__image {
    width: 5rem;
    height: 5rem;
    border: 1px solid #ccc;
    cursor: pointer;
  }
  .preview__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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

  .input__content button {
    width: 6rem;
    height: 6rem;
    padding: 0.5rem;
    border: 1px solid ${colors.placeholder};
    border-radius: 1rem;
    outline-color: ${colors.point};
    margin-top: 0.625rem;
    background-color: white;
    text-align: start;
    color: ${colors.darkGray};
    cursor: pointer;
    text-align: center;
  }

  input {
    height: 2.82rem;
    width: 31.25rem;
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

export const ListSection = styled.div`
  margin: 1.25rem 0;

  .list__search {
    height: 2.82rem;
    width: 32.25rem;
    border: 1px solid ${colors.placeholder};
    border-radius: 1rem;
    outline-color: ${colors.point};
    margin: 1rem 0;
    padding: 0.5rem;
  }
  .List__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.625rem 0.625rem;
    border: 1px solid;
    border: none;
    border-top: 1px solid ${colors.placeholder};
    background-color: white;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${colors.skyBackground};
    }
  }

  .List__container--content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 0.4rem 0 0;
  }

  .List__container--content p {
    margin: 0.2rem 0.6rem 0 0;
    color: ${colors.darkGray};
  }

  .List__container--img {
    margin-right: 1rem;
  }

  .List__container--info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .List__container--info p {
    color: ${colors.darkGray};
  }

  .button__container--edit {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button__container {
    margin-top: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const EditButton = styled.button`
  font-family: 'Pretendard-Bold', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  border: none;
  border-radius: 1rem;
  width: 4rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.$selected ? colors.point : colors.darkGray)};
  background-color: ${(props) =>
    props.$selected ? colors.skyBackground : colors.defaultBackground};
  cursor: pointer;
`;
