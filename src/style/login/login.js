import styled from 'styled-components';

export const LoginHeader = styled.header`
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;

export const LoginBody = styled.div`
  /* LoginBody 내부의 h4 태그에 대한 스타일 */
  .login__h4 {
    color: #5850fe;
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
  }
`;
