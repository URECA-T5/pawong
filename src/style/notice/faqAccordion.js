// style/notice/faqAccordion.js
import styled from 'styled-components';

export const FaqItem = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  border-radius: 16px;
  border: 1px solid ${({ isOpen }) => (isOpen ? '#5850FE' : '#b3b3b3')};
`;

export const FaqTitle = styled.div`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
    font-weight: 400;
    font-style: normal;
  }
  width: 100%;
  font-size: 1.25rem;
  padding: 1rem;
  color: black;
  cursor: pointer;
  transition: background-color 0.3s ease;
  height: 5rem;
  display: flex;
  align-items: center;
  font-family: 'Pretendard-Regular';
`;

export const FaqContent = styled.div`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
    font-weight: 400;
    font-style: normal;
  }
  border-radius: 16px;
  font-size: 1rem;
  padding: 0rem 1rem 3rem 1rem;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  color: #6d6e71;
  white-space: pre-line;
  font-family: 'Pretendard-Regular';
`;
