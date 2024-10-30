import styled from 'styled-components';

const colors = {
  placeholder: '#cccccc',
  point: '#5850fe',
  skyBackground: '#e3ecff',
  lightBackground: '#f3f3f6',
  darkGray: '#6d6e71',
};

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const DialogContainer = styled.div`
  background: white;
  padding: 1.25rem;
  border-radius: 0.32rem;
  width: 31.3rem;
  border-radius: 1rem;
  text-align: center;
  display: flex;

  .button__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .button__container--submit {
    justify-content: center;
    align-items: center;
  }
`;

export const DialogTitle = styled.p`
  font-family: 'Pretendard-Bold', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 1rem;
`;

export const TagButton = styled.button`
  font-family: 'Pretendard-Bold', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  border: none;
  border-radius: 1rem;
  width: 11.8rem;
  margin: 0.625rem;
  height: 3.12rem;
  cursor: pointer;
  flex: 0 0 15%;
  color: ${(props) => (props.$isSelected ? colors.point : colors.darkGray)};
  background-color: ${(props) =>
    props.$isSelected ? colors.skyBackground : colors.lightBackground};
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
  color: white;
  background-color: ${colors.point};
  cursor: pointer;
`;
