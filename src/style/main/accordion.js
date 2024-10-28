import styled from 'styled-components';

export const AccordionDiv = styled.div`
  margin-bottom: 1rem;
  button {
    width: 510px;
    height: 55px;
    border: 0;
    background-color: #e3ecff;
    text-align: left;
    border-radius: 10px;
    border-bottom-left-radius: ${({ $isActive }) => ($isActive ? '0' : '16px')};
    border-bottom-right-radius: ${({ $isActive }) =>
      $isActive ? '0' : '16px'};
    cursor: pointer;
  }
  span {
    margin-left: 2rem;
    color: #6d6e71;
    font-size: 1rem;
  }
  p {
    color: #6d6e71;
  }
  div {
    width: 510px;
    height: 175px;
    padding: 0 2.5rem 1rem;
    background-color: #e3ecff;
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
