// Home.js
import React from 'react';
import GlobalStyle, { MainContainer } from '../style/global/global';
import { LoginHeader } from '../style/login/login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <LoginHeader>
          <FontAwesomeIcon icon={faHouse} />
        </LoginHeader>
        <h4
          style={{
            color: '#5850FE',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '5rem',
          }}
        >
          반려동물 1등 플랫폼
        </h4>
        <p style={{ display: 'flex', justifyContent: 'center' }}>
          모든 반려동물의 행복을 바라며
        </p>
        <h2
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '2rem',
          }}
        >
          포옹
        </h2>
        <footer></footer>
      </MainContainer>
    </>
  );
};

export default Login;
