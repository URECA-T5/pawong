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
  height: 3.25rem;
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
  padding: 1rem;
`;

export const MainSliderContainer = styled.section`
  width: 37.438rem;
  box-sizing: border-box;
`;

export const MainSlideImage = styled.img`
  width: 37.438rem;
  height: 17.5rem;
  box-sizing: border-box;
  cursor: pointer;
`;

export const MainBtnDiv = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 7.5rem;
  background-color: white;
  border-radius: 1rem;
  margin-bottom: 1.25rem;
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
    width: 4.375rem;
    height: 4.375rem;
  }
`;

export const MainBadgeImg = styled.img`
  width: 100%;
  height: 6.25rem;
  border-radius: 1rem;
  margin-bottom: 1.25rem;
`;

export const MainSenseDiv = styled.section`
  width: 100%;
  height: ${({ height }) => height}rem;
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  align-items: center;
  border-radius: 1rem;
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
  height: 10rem;
  border-radius: 1rem;
`;

export const MainDiaryDiv = styled.section`
  width: 100%;
  height: 21.875rem;
  background-color: ${colors.white};
  border-radius: 1rem;
  margin: 1.4rem 0;
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
    width: 5rem;
    height: 1.563rem;
    margin: 0.3rem 1.5rem 0 0;
    border-radius: 0.625rem;
    text-align: center;
  }
  ul {
    width: 28.125rem;
    height: 2.5rem;
    margin: 0.2rem 0 0.1rem 3rem;
    list-style-type: none;
    border-bottom: 0.063rem solid ${colors.pastel_gray};
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
  height: 18.125rem;
  background-color: ${colors.white};
  border-radius: 1rem;
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
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 1.5rem;
    border-radius: 0.313rem;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: ${colors.dark_gray};
  }
  ul {
    width: 28.125rem;
    height: 2.5rem;
    margin-left: 3rem;
    list-style-type: none;
    border-bottom: 0.063rem solid ${colors.pastel_gray};
    color: ${colors.dark_gray};
  }
  li {
    text-align: left;
    line-height: 0.3;
    margin-top: 0.8rem;
    font-size: 0.93rem;
  }
  img {
    width: 7.188rem;
    height: 4.688rem;
    right: 1rem;
    bottom: 1rem;
    position: absolute;
  }
`;
