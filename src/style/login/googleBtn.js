import styled from 'styled-components';

const GoogleButton = styled.button`
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

  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export default GoogleButton;
