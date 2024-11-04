import styled from 'styled-components';

const colors = {
  dark_gray: '#6D6E71',
  gray: '#CCCCCC',
  light_gray: '#E3E3E3',
  pastel_gray: '#F3F3F6',
  light_blue: '#E3ECFF',
  pastel_blue: '#5850FE',
  black: '#000000',
  white: '#ffffff',
};

export const FHHeader = styled.header`
  width: 100%;
  height: 3.25rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
  background-color: ${colors.white};
  font-size: 1.2rem;
  border-bottom: 0.063rem solid ${colors.light_gray};
  .fosterHistory__style {
    cursor: pointer;
  }
`;

export const FHNullSection = styled.section`
  margin-top: 4rem;
  text-align: center;
  font-size: 1.15rem;
  img {
    width: 100%;
    height: 11.875rem;
    margin-bottom: 1rem;
  }
`;

export const FHSection = styled.section`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 1.15rem;
  img {
    width: 20%;
  }
  .fosterHistory__div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 2.625rem;
    border-radius: 1rem;
    color: ${colors.pastel_blue};
    background-color: ${colors.light_blue};
    margin-bottom: 2rem;
  }
`;

export const FHCardDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  .fosterHistory__CardSection {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  .fosterHistory__card {
    border: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.pastel_gray};
    padding: 0.7rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.4);
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
