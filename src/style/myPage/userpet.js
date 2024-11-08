import styled from 'styled-components';

export const UserPetBody = styled.main`
  margin-top: 0.8rem;
  max-height: 15rem;
  overflow-y: auto;
`;

export const PetContainer = styled.div`
  border: none;
  padding: 1rem;
  display: flex;
  align-items: center;
`;

export const PetImage = styled.img`
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  opacity: 100%;
  border-radius: 1rem;
  cursor: pointer;
`;

export const PetInfo = styled.div`
  display: flex;
  flex-direction: column;

  .pet__type {
    font-size: 0.8rem;
    color: #b3b3b3;
    cursor: pointer;
  }
`;
