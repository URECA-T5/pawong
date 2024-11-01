import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

@font-face {
  font-family: "Pretendard-Bold";
  src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff")
    format("woff");
  font-weight: 700;
  font-style: normal;
}

  @font-face {
    font-family: 'TmoneyRoundWindExtraBold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindExtraBold.woff') format('woff');
    font-weight: normal;
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
    overflow-y: scroll;
  }

  h1, h2, h3, h4, h5, h6, p {
    font-family: 'Pretendard-Regular', sans-serif; 
  }

  .bold {
    font-family: 'Pretendard-Bold', sans-serif; 
    font-weight: 700;
  }

  .regular {
    font-family: 'Pretendard-Regular', sans-serif; 
    font-weight: 400;
  }

  .extraBold {
  font-family: 'TmoneyRoundWindExtraBold';
  font-weight: 800;
  }

  #root {
    display: flex;
    justify-content: center; 
    width: 100%; 
    min-height: 100vh; 
    margin: 0; 
    padding: 0; 
  }
`;

export const MainContainer = styled.div`
  width: 600px;
  background-color: #f3f3f6;
  min-height: 100vh;
  position: relative;
`;
export const Content = styled.div`
  padding: 0 20px;
`;

export default GlobalStyle;
