import styled from 'styled-components';

const colors = {
  dark_gray: '#6D6E71',
  gray: '#CCCCCC',
  light_gray: '#E3E3E3',
  pastel_gray: '#F3F3F6',
  light_blue: '#E3ECFF',
  pastel_blue: '#5850FE',
  black: '#000000',
  white: '#FFFFFF',
};

export const MainHeader = styled.header`
  width: 100%;
  height: 52px;
  position: sticky;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
  background-color: ${colors.white};
  font-size: 1.2rem;
  a {
    text-decoration: none;
    color: ${colors.black};
    cursor: pointer;
  }
  p {
    cursor: pointer;
  }
`;

export const MainSection = styled.section`
  margin: 1.25rem;
`;

export const MainSliderContainer = styled.section`
  width: 100%;
`;

export const MainSlideImage = styled.img`
  width: 100%;
  height: 280px;
  cursor: pointer;
`;

export const MainBtnDiv = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 120px;
  background-color: white;
  border-radius: 16px;
  margin: 1.25rem 0;
  div {
    display: flex;
    gap: 3rem;
  }
  button {
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
  button:hover {
    color: ${colors.pastel_blue};
  }
  img {
    width: 70px;
    height: 70px;
  }
`;

export const MainBadgeImg = styled.img`
  width: 100%;
  height: 100px;
  border-radius: 16px;
  margin-bottom: 1rem;
`;

export const MainSenseDiv = styled.section`
  width: 100%;
  height: ${({ height }) => height}px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  align-items: center;
  border-radius: 16px;
  transition: height 0.2s ease;
  margin-bottom: 1.25rem;
  h4 {
    text-align: left;
    margin: 1rem 0;
    width: 100%;
    margin: 1.5rem 0 1.2rem 3.5rem;
  }
  h4 > span {
    color: ${colors.pastel_blue};
  }
`;
export const MainPawongImg = styled.img`
  width: 100%;
  height: 160px;
  border-radius: 16px;
`;

export const MainDiaryDiv = styled.section`
  width: 100%;
  height: 350px;
  background-color: ${colors.white};
  border-radius: 16px;
  margin: 1.25rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
  h4 {
    align-self: flex-start;
    margin: 1.5rem 0 1rem 2rem;
  }
  a {
    text-decoration: none;
    color: ${colors.dark_gray};
    cursor: pointer;
  }
  button {
    border: 0;
    background-color: ${colors.light_blue};
    color: ${colors.pastel_blue};
    width: 80px;
    height: 25px;
    margin: 0.3rem 1.5rem 0 0;
    border-radius: 10px;
    text-align: center;
  }
  ul {
    width: 450px;
    height: 40px;
    margin: 0.2rem 0 0.1rem 3rem;
    list-style-type: none;
    border-bottom: 1px solid ${colors.pastel_gray};
    color: ${colors.dark_gray};
  }
  li {
    text-align: left;
    font-size: 0.93rem;
  }
  .main__moveDiaryBtn {
    width: 8rem;
    height: 1.4rem;
    border: 0;
    border-radius: 0;
    background-color: ${colors.pastel_gray};
    color: ${colors.dark_gray};
    bottom: 1.7rem;
    left: 35%;
    right: 35%;
    position: absolute;
    font-size: 0.7rem;
    cursor: pointer;
  }
`;

export const MainNoticeDiv = styled.section`
  width: 100%;
  height: 290px;
  background-color: ${colors.white};
  border-radius: 16px;
  margin: 1.25rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
  h4 {
    align-self: flex-start;
    margin: 1.5rem 0 1rem 2rem;
  }
  button {
    border: 0;
    background-color: ${colors.light_blue};
    color: ${colors.pastel_blue};
    width: 20px;
    height: 20px;
    margin-right: 1.5rem;
    border-radius: 5px;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: ${colors.dark_gray};
  }
  ul {
    width: 450px;
    height: 40px;
    margin-left: 3rem;
    list-style-type: none;
    border-bottom: 1px solid ${colors.pastel_gray};
    color: ${colors.dark_gray};
  }
  li {
    text-align: left;
    line-height: 0.3;
    margin-top: 0.8rem;
    font-size: 0.93rem;
  }
  img {
    width: 115px;
    height: 75px;
    right: 1rem;
    bottom: 1rem;
    position: absolute;
  }
`;
