import styled from 'styled-components';

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
  padding: 1rem 20px;
  background-color: white;
  font-size: 1.2rem;
  a {
    text-decoration: none;
    color: #000000;
    cursor: pointer;
  }
`;

export const MainSliderContainer = styled.section`
  width: 100%;
  overflow: hidden;
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
  margin: 1.3rem 0;
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
    color: #5850fe;
  }
  img {
    width: 70px;
    height: 70px;
  }
`;

export const MainSenseDiv = styled.section`
  width: 100%;
  height: ${({ height }) => height}px;
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  border-radius: 16px;
  transition: height 0.2s ease;
  margin-bottom: 1rem;
  h4 {
    text-align: left;
    margin: 1rem 0;
    width: 100%;
    margin: 1.5rem 0 1.2rem 3.5rem;
  }
  h4 > span {
    color: #5850fe;
  }
`;

export const MainDiaryDiv = styled.section`
  width: 100%;
  height: 350px;
  background-color: white;
  border-radius: 16px;
  margin: 1rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
  h4 {
    align-self: flex-start;
    margin: 1.5rem 0 1rem 2rem;
  }
  a {
    text-decoration: none;
    color: #6d6e71;
    cursor: pointer;
  }
  button {
    border: 0;
    background-color: #e3ecff;
    color: #5850fe;
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
    border-bottom: 1px solid #f3f3f6;
    color: #6d6e71;
  }
  li {
    text-align: left;
    font-size: 0.93rem;
  }
  .moveBtn {
    width: 8rem;
    height: 1.4rem;
    border: 0;
    border-radius: 0;
    background-color: #f3f3f6;
    color: #6d6e71;
    bottom: 1.7rem;
    left: 35%;
    right: 35%;
    position: absolute;
    font-size: 0.7rem;
  }
`;

export const MainNoticeDiv = styled.section`
  width: 100%;
  height: 290px;
  background-color: white;
  border-radius: 16px;
  margin: 1rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
  h4 {
    align-self: flex-start;
    margin: 1.5rem 0 1rem 2rem;
  }
  button {
    border: 0;
    background-color: #e3ecff;
    color: #5850fe;
    width: 20px;
    height: 20px;
    margin-right: 1.5rem;
    border-radius: 5px;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: #6d6e71;
  }
  ul {
    width: 450px;
    height: 40px;
    margin-left: 3rem;
    list-style-type: none;
    border-bottom: 1px solid #f3f3f6;
    color: #6d6e71;
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
