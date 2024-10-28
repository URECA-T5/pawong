import styled from 'styled-components';

const colors = {
  placeholder: '#cccccc',
};

export const Header = styled.header`
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1.25rem;
  background-color: white;

  .extraBold {
    font-size: 1rem;
    flex: 0.5;
  }

  .icon {
    margin-left: 0.625rem;
  }
`;

export const Section = styled.section`
  margin: 1.25rem;
  padding: 1.25rem;
  background-color: white;
  border: 1px white;
  border-radius: 1rem;
  gap: 0.625rem;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 340px;
  border: 1px solid ${colors.placeholder};
  border-radius: 1rem;
  margin-bottom: 1.25rem;
`;

export const InputContainer = styled.div`
  margin-top: 1rem;
  padding: 0.625rem;
  justify-content: center;

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 0.625rem;
  }

  input {
    height: 45px;
    padding: 0.5rem;
    border: 1px solid ${colors.placeholder};
    border-radius: 1rem;
  }

  .input_Content {
    margin: 0.25rem;
  }

  textarea {
    border: 1px solid ${colors.placeholder};
    border-radius: 1rem;
    height: 160px;
    padding: 0.5rem;
    resize: none;
  }
`;
