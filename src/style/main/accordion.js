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
    width: 31.875rem;
    height: 3.438rem;
    border: 0;
    background-color: ${colors.light_blue};
    text-align: left;
    border-radius: 0.625rem;
    border-bottom-left-radius: ${({ $isActive }) => ($isActive ? '0' : '1rem')};
    border-bottom-right-radius: ${({ $isActive }) =>
      $isActive ? '0' : '1rem'};
    cursor: pointer;
  }
  span {
    margin-left: 2rem;
    color: ${colors.dark_gray};
    font-size: 1rem;
  }
  p {
    color: ${colors.dark_gray};
    word-break: keep-all;
  }
  div {
    width: 31.875rem;
    height: 10.938rem;
    padding: 0 2.5rem 1rem;
    background-color: ${colors.light_blue};
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
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
