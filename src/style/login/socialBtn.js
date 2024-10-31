import styled from 'styled-components';

const SocialBtn = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: none;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 15px;

  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 20px;
    height: 20px;
  }

  background-color: ${({ css }) => {
    switch (css) {
      case 'naver':
        return '#19ce60';
      case 'kakao':
        return '#fae100';
      case 'apple':
        return '#000';
      case 'google':
      default:
        return '#fff';
    }
  }};
`;

export default SocialBtn;
