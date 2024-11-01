import styled from 'styled-components';

export const PetHeader = styled.header`
  .pet__header {
    display: flex;
    justify-content: flex-start;
  }
`;
export const PetBody = styled.main`
  display: flex;
  flex-direction: row;
  .body__left {
    width: 50%;
    margin-top: 1rem;
  }
  .body__right {
    margin-top: 1rem;
    margin-left: 7rem;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
  .body__right p {
    font-size: 1.1rem;
    color: #6d6e71;
  }

  .right__plus {
    width: 1rem;
    height: 1rem;
    color: #6d6e71;
    cursor: pointer;
  }
  .right__plus:hover {
    color: #5850fe;
  }
`;
