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

export const AccordionDiv = styled.div`
  margin-bottom: 1rem;
  button {
    width: 510px;
    height: 55px;
    border: 0;
    background-color: ${colors.light_blue};
    text-align: left;
    border-radius: 10px;
    border-bottom-left-radius: ${({ $isActive }) => ($isActive ? '0' : '16px')};
    border-bottom-right-radius: ${({ $isActive }) =>
      $isActive ? '0' : '16px'};
    cursor: pointer;
  }
  span {
    margin-left: 2rem;
    color: ${colors.dark_gray};
    font-size: 1rem;
  }
  p {
    color: ${colors.dark_gray};
  }
  div {
    width: 510px;
    height: 175px;
    padding: 0 2.5rem 1rem;
    background-color: ${colors.light_blue};
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    margin-bottom: 1rem;
    transition: max-height 0.3s ease;
    overflow: hidden;
    font-size: 0.9rem;
  }
  .ans {
    display: block;
  }
  .card-none {
    display: none;
  }
`;
