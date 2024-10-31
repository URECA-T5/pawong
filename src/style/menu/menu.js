import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  background-color: white;

  .extraBold {
    font-size: 20px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: black;
  }
`;

export const Section = styled.section`
  margin: 1.25rem;
  padding: 1.25rem;
  background-color: white;
  border: 1px white;
  border-radius: 16px;
  gap: 10px;

  p {
    margin-left: 0.625rem;
    font-size: 20px;
  }
`;

export const Login_Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: white;
  justify-content: space-between;
  padding: 0.625rem 1.25rem;
  .text_color {
    color: #5850fe;
  }
`;

export const Profile_User = styled.p`
  display: block;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 0 1.5rem;
  letter-spacing: 1px;
  color: #6d6e71;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #000000;
  }
`;

export const Profile_Img = styled.img`
  width: 55px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Menu_list_row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Menu_List = styled.div`
  width: 160px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem 0.5rem 0.5rem 0.5rem;

  .img_box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    margin-left: 0.625rem;
    font-size: 15px;
    &:hover {
      color: #5850fe;
    }
    font-family: 'Pretendard-Regular';
  }
`;

export const Menu_Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const Footer = styled.div`
  width: 600px;
  height: 52px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
  position: fixed;
  bottom: 0;

  div {
    display: flex;
    justify-content: center;
  }
`;
