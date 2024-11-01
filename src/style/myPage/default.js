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

export const HistoryBody = styled.main`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .history__list img {
    width: 3rem;
  }
  .history__list span {
    cursor: pointer;
  }
  .history__list span:hover {
    color: #5850fe;
  }
  .history__list {
    display: flex;
    text-align: center;
    align-items: center;
    gap: 1rem;
  }
`;
