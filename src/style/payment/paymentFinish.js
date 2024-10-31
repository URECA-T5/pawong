import styled from 'styled-components';

const colors = {
  dark_grey: '#6D6E71',
  light_grey: '#B3B3B3',
  pastel_grey: '#F3F3F6',
  light_blue: '#E3ECFF',
  pastel_blue: '#5850FE',
};

export const BodyArea = styled.div`
  padding: 0.7rem;
  width: 100%;
  height: 78rem;
  caret-color: transparent;
`;

export const MessageBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  width: 100%;
  height: 100%;
  background-color: white;

  .message__profileArea {
    padding-top: 6.4rem;
  }

  .message__profileImg {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    object-fit: cover;
  }

  .text__dot {
    font-size: 2rem;
    color: ${colors.light_grey};
  }

  .text__highlight {
    color: ${colors.pastel_blue};
  }

  .message__textArea {
    padding-top: 1rem;
    font-size: 1.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .message__successImg {
    position: relative;
    margin-top: 3.1rem;
    width: 20.75rem;
    height: 20.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .button__navRecord {
    position: absolute;
    bottom: 0;
    width: 10rem;
    height: 2.8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${colors.light_blue};
    color: ${colors.pastel_blue};
    font-size: 1rem;
    border: none;
    border-radius: 1rem;
    cursor: pointer;

    &:hover,
    &:focus {
      opacity: 0.6;
    }
  }
`;

export const BottomBanner = styled.div`
  position: relative;
  margin-top: 5.56rem;
  padding: 0 0.9rem;
  width: 34.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .banner__img {
    width: 100%;
    height: 9.4rem;
    object-fit: cover;
  }

  .banner__line {
    top: 1rem;
    position: absolute;
    height: 1px;
    width: 32rem;
    background-color: ${colors.dark_grey};
  }
`;
