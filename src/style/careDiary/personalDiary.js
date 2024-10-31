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
  justify-content: space-between;
  padding: 1.25rem;
  background-color: white;
  font-size: 1.2rem;

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
  width: 37.5rem;
  padding: 1.25rem;
  background-color: white;
  margin-bottom: 1.5rem;

  .board__title {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .board__profile {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 0.625rem;
  }

  p {
    margin: 0.2rem;
    color: ${colors.darkGray};
  }

  .board__profile--user {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
  }

  img {
    margin-right: 0.625rem;
  }

  .board__img {
    margin: 1rem 0;
    width: 35rem;
  }

  .board_text {
    padding: 0 1.25rem;
  }
  .board_text > p {
    font-family: 'Pretendard-Bold', sans-serif;
    font-weight: 700;
    margin-bottom: 1.25rem;
  }

  .board_button {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .bold > span {
    color: ${colors.point};
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
  color: ${colors.point};
  background-color: ${colors.skyBackground};
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: ${colors.darkGray};
  cursor: pointer;
  margin-left: 1rem;
`;

export const OtherBoard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .otherBoard__content {
    margin: 2rem;
  }

  .otherBoard__content--img {
    margin-bottom: 1rem;
    cursor: pointer;
    &:hover {
      border: 3px solid ${colors.point};
      border-radius: 1.1rem;
    }
  }

  p {
    margin-top: 0.8rem;
  }
`;
