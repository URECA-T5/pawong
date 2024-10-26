import styled from 'styled-components';

const boxShadow = `
  rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, 
  rgba(255, 255, 255, 0.8) -6px -2px 16px 0px
`;

export const NoticeHeader = styled.header`
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #ccc;

  .header__icon {
    transition: color 0.3s ease;

    &:hover,
    &:focus {
      color: #5850fe;
      outline: none;
      cursor: pointer;
    }
  }
`;

export const NoticeBody = styled.div`
  flex: 1;
  .notice__title {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  }

  .notice__section {
    margin: 2rem;
    background-color: #ffffff;
    padding: 3rem;
    border-radius: 16px;
    box-shadow: ${boxShadow};
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }
  .notice__section img {
    display: flex;
    margin-left: 20rem;
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
    color: #5850fe;
    outline: none;
    cursor: pointer;
  }

  .notice__changes {
    margin: 2rem;
    background-color: #ffffff;
    padding: 3rem;
    border-radius: 16px;
    box-shadow: ${boxShadow};
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }
`;
