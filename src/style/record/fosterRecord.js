import styled from 'styled-components';

const colors = {
  dark_gray: '#6D6E71',
  gray: '#CCCCCC',
  light_gray: '#E3E3E3',
  pastel_gray: '#F3F3F6',
  light_blue: '#E3ECFF',
  pastel_blue: '#5850FE',
  black: '#000000',
};

export const FRHeader = styled.header`
  width: 100%;
  height: 52px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem 20px;
  background-color: white;
  border-bottom: 1px solid ${colors.light_gray};
  font-size: 1.2rem;
  .fosterRecord__style {
    cursor: pointer;
  }
`;

export const FRNullSection = styled.section`
  margin-top: 4rem;
  text-align: center;
  font-size: 1.15rem;
  img {
    width: 100%;
    height: 190px;
    margin-bottom: 1rem;
  }
`;

export const FRSection = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 1.15rem;
  img {
    width: 20%;
  }
  .FR__div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 42px;
    border-radius: 16px;
    color: ${colors.pastel_blue};
    background-color: ${colors.light_blue};
    margin-bottom: 2rem;
  }
`;

export const FRCardDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .FR__CardSection {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  .FR__card {
    border: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.pastel_gray};
    padding: 0.7rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.01);
    }
  }
  img {
    width: 12rem;
    height: 12rem;
    margin-bottom: 0.5em;
  }
  p {
    font-size: 1.2rem;
    color: ${colors.dark_gray};
  }
`;
