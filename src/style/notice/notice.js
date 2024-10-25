import styled from 'styled-components';

export const NoticeHeader = styled.header`
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  .header__icon {
    transition: color 0.3s ease;

    &:hover,
    &:focus {
      color: #007bff;
      outline: none;
      cursor: pointer;
    }
  }
`;

export const NoticeBody = styled.div`
  .notice__title {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  }
  .notice__section {
    padding: 3rem 3rem;
  }
  .notice__list {
    padding: 2rem 1rem;
  }
  .notice__list p {
    margin-bottom: 1rem;
    transition:
      color 0.3s ease,
      background-color 0.3s ease;
  }
  .notice__list p:hover,
  .notice__list p:focus {
    color: #007bff;
    outline: none;
    cursor: pointer;
  }
  .notice__changes {
    padding: 3rem 3rem;
  }
`;
