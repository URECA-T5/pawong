import styled from 'styled-components';

const colors = {
  dark_gray: '#6D6E71',
  gray: '#CCCCCC',
  light_gray: '#E3E3E3',
  pastel_gray: '#F3F3F6',
  light_blue: '#E3ECFF',
  pastel_blue: '#5850FE',
  black: '#000000',
  white: '#ffffff',
};

export const DeliveryHeader = styled.header`
  width: 100%;
  height: 3.25rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
  background-color: ${colors.white};
  font-size: 1.2rem;
  .Delivery__pointer {
    cursor: pointer;
  }
`;

export const DeliveryMsgDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2rem;
  width: 33.75rem;
  border-radius: 1rem;
  width: 34.8rem;
  height: 14.2rem;
  font-size: 1.3rem;
  text-align: left;
  img {
    border-radius: 50%;
    width: 9rem;
    height: 9rem;
    object-fit: cover;
    margin: 0 3rem;
  }
  .delivery__pointColor {
    color: ${colors.pastel_blue};
  }
`;
export const DeliveryItemSection = styled.div`
  width: 32.5rem;
  height: 37.5rem;
  margin: 0 auto;
  border-radius: 1rem;
  background-color: ${colors.white};
  font-size: 1.25rem;
  margin-bottom: 5%;
  .delivery__Title {
    padding-top: 2rem;
    margin-left: 3.3rem;
  }
  .delivery__Line {
    border-top: 0.063rem solid #444444;
    margin: 1.56rem auto;
    width: 26rem;
  }
`;

export const DeliveryItemInfo = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 1rem;
  width: 32.5rem;
  padding: 1rem 1.4rem;
  background-color: ${colors.white};
  font-size: 1.25rem;
  button {
    width: 2.5rem;
    height: 1rem;
    font-size: 0.8rem;
    border: 0;
    margin-top: 0.9rem;
  }
  img {
    width: 7rem;
    height: 7rem;
    object-fit: cover;
    margin: 0.5rem 1.6rem 0 1rem;
  }
  button {
    color: ${colors.dark_gray};
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
  }
  .delivery__pointColor {
    color: ${colors.dark_gray};
    font-size: 1rem;
    margin-bottom: 0.4rem;
  }
  .delivery__colorSize {
    color: ${colors.black};
    font-size: 1.2rem;
    margin-bottom: 0.4rem;
  }
`;

export const DeliveryForm = styled.form`
  margin-left: 3.3rem;
  p {
    font-size: 1rem;
  }
  input {
    height: 2.375rem;
    margin-top: 0.5rem;
    border-radius: 0.625rem;
    border: 0.063rem solid ${colors.gray};
    padding: 0.6rem;
    outline: none;
  }
  input::placeholder {
    color: ${colors.gray};
  }
  input:focus {
    border-color: ${colors.pastel_blue};
    border-width: 2px;
  }
  .delivery__inputTitle {
    margin-top: 1.5rem;
  }
  .delivery__inputPhone {
    width: 65%;
  }
  .delivery__inputPost {
    width: 30%;
    margin-right: 0.5rem;
  }
  .delivery__inputAddress {
    width: 25rem;
  }
  .delivery__search {
    margin-top: 0.5rem;
    width: 4.375rem;
    height: 2.375rem;
    border: 0;
    border-radius: 0.5rem;
    background-color: ${colors.light_blue};
    color: ${colors.pastel_blue};
    cursor: pointer;
  }
  .delivery__submit {
    margin-top: 1.3rem;
    width: 25rem;
    height: 2.188rem;
    border: 0;
    border-radius: 0.5rem;
    background-color: ${colors.pastel_blue};
    color: ${colors.white};
    cursor: pointer;
  }
  .delivery__phoneError {
    font-size: 0.8rem;
    color: ${colors.pastel_blue};
  }
`;
