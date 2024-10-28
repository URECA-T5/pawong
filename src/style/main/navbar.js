import styled from 'styled-components';

export const Navbar = styled.section`
  width: 100%;
  height: 53px;
  position: fixed;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  background-color: white;
  div {
    display: flex;
    gap: 4.5rem;
    align-items: center;
    height: 100%;
    padding: 1rem 1rem;
  }
  FontAwesomeIcon {
    font-size: 1.3rem;
  }
  button {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 84px;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
  button:hover {
    color: #5850fe;
  }
  button > span {
    font-size: 0.8rem;
    margin-top: 5px;
  }
  button > svg {
    font-size: 1.4rem;
  }
`;