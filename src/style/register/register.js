import styled from 'styled-components';
const mainPurple = '#5850fe';
export const RegisterBody = styled.div`
  padding: 1.5rem;
  .img__section {
    margin-top: 4rem;
    display: flex;
    justify-content: center;
  }
  .profile__section {
    height: 100%;
    padding: 3rem;
    background-color: white;
    border-radius: 1rem;
  }
  .input__profile {
    display: flex;
    justify-content: center;
    margin: 3rem 3rem 0 3rem;
  }
  .input__profile input {
    display: none;
  }
  .input__profile img {
    cursor: pointer;
  }
  .description__profile {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    color: #6d6e71;
  }
  .btn__section {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .btn__section button {
    width: 10rem;
    height: 3rem;
    border-radius: 1rem;
    cursor: pointer;
    border: none;
  }
  .regist__btn {
    background-color: ${mainPurple};
    color: white;
  }
  .cancle__btn {
    background-color: #e3ecff;
    color: ${mainPurple};
  }
`;

export const InputSection = styled.div`
  .input__p {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${mainPurple};
    text-align: center;
    width: 5rem;
    height: 2rem;
    font-size: 1rem;
    margin-top: 6rem;
    border-radius: 1rem;
    background-color: #f3f3f3;
  }
  .input__items {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    margin-top: 2rem;
  }

  .input__container {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }

  label {
    font-size: 1rem;
    color: #333333;
  }

  input {
    flex: 1 1 80%;
    color: #cccccc;
    font-size: 1.1rem;
    border: none;
    border-bottom: 2px solid #cccccc;
    padding: 0.5rem 0;
    outline: none;
    transition: border-color 0.3s;
    margin-bottom: 2rem;
  }

  input:focus {
    border-bottom-color: ${mainPurple};
    color: black;
  }

  .dupCheck__btn {
    flex: 1 1 20%;
    height: 2rem;
    border: 1px solid rgba(88, 80, 254, 0.5);
    border-radius: 1rem;
    color: ${mainPurple};
    cursor: pointer;
  }
`;

export const RegisterHeader = styled.header`
  width: 100%;
  height: 3.25rem;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  display: flex;

  .header__left,
  .header__center,
  .header__right {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .header__center {
    justify-content: center;
  }

  .header__left {
    justify-content: flex-start;
  }

  .header__right {
    justify-content: flex-end;
  }
`;
