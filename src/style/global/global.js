// style/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    src: url('./font/Pretendard-Regular.ttf') format('truetype'); /* Regular */
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('./font/Pretendard-Bold.ttf') format('truetype'); /* Bold */
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Tmoney';
    src: url('./font/Tmoney.ttf') format('truetype'); /* ExtraBold */
    font-weight: 800; 
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }

  h1, h2, h3, h4, h5, h6, p {
    font-family: 'Pretendard', sans-serif; 
  }

  .bold {
    font-family: 'Pretendard', sans-serif; 
    font-weight: 700;
  }

  .regular {
    font-family: 'Pretendard'; 
    font-weight: 400;
  }

  #root {
    display: flex;
    justify-content: center;
    width: 600px;
  }
`;

export const MainContainer = styled.div`
  width: 600px;
  background-color: #f3f3f6;
  min-height: 100vh;
  padding: 0 20px;
`;

export default GlobalStyle;
