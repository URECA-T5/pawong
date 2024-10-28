import styled from 'styled-components';

export const ContentSection = styled.div`
  margin-top: 1rem;
  width: 100%;
  .faq__section {
    margin-top: 2rem;
  }
`;

export const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  border: 1px solid #b3b3b3;
  border-radius: 10px;
  overflow: hidden;
`;

export const Button = styled.button`
  background-color: ${({ isSelected }) => (isSelected ? '#6c63ff' : 'white')};
  color: ${({ isSelected }) => (isSelected ? 'white' : '#6D6E71')};
  border: none;
  padding: 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:not(:last-child) {
    border-right: 1px solid #b3b3b3;
  }

  &:focus {
    outline: none;
  }
`;
