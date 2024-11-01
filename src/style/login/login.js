import styled from 'styled-components';

const mainPurple = '#5850fe';

export const LoginHeader = styled.header`
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;

export const LoginBody = styled.div`
  position: relative;
  .login__h4 {
    color: ${mainPurple};
    display: flex;
    justify-content: center;
    margin-top: 5rem;
  }

  .login__p {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }

  .login__h1 {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  .img__section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 220px;
  }
  .login__img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  .line__section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
  }

  .line {
    flex: 1;
    height: 1px;
    background-color: #ccc;
    margin: 0 10px;
  }

  .sns-login-text {
    color: #000000;
    font-weight: bold;
  }
  .loginBtn__section {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .pawong__loginImg {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: none;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1rem;
  }
  .pawong__loginImg:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15); /* hover 시 box-shadow 변경 */
  }
  .register__btn {
    border: none;
  }

  .register__section {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #5850fe;
    gap: 0.5rem;
  }
  .register__section button {
    width: 3rem;
    height: 3rem;
    color: ${mainPurple};
    background-color: #e3ecff;
    border: none;
    border-radius: 100%;
    cursor: pointer;
  }
  .register__section button:hover {
    border: 1px solid ${mainPurple};
  }
`;
