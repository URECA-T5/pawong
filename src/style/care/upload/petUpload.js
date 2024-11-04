import { styled } from 'styled-components';
import { InputContainer } from '../../careDiary/careDiary';
import { BottomModalContainer } from '../../donation/itemDetail';

const colors = {
  dark_grey: '#6D6E71',
  light_grey: '#B3B3B3',
  pastel_grey: '#F3F3F6',
  light_blue: '#E3ECFF',
  pastel_blue: '#5850FE',
};

export const BodySection = styled(InputContainer)`
  padding: 1.25rem;
  font-size: 1.4rem;
  margin: 0;
  caret-color: transparent;

  .body__main {
    padding: 1.25rem 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    border-radius: 1rem;
    width: 100%;
  }

  .body__message {
    margin-bottom: 2.2rem;
  }

  .section__submit {
    gap: 0.8rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  padding: 1rem;

  .img__input {
    display: none;
  }

  .img__upload img {
    object-fit: ${(props) => (props.$isSelected ? 'cover' : 'contain')};
    width: 5.6rem;
    height: 5.6rem;
  }

  .button__upload {
    border: none;
    border-radius: 1rem;
    color: ${colors.dark_grey};
    cursor: pointer;
    justify-content: center;
    background-color: ${colors.light_blue};
    font-size: 0.6rem;
    padding: 0.5rem;
  }
`;

export const SelectedImage = styled.img`
  object-fit: ${(props) => (props.$isSelected ? 'cover' : 'contain')};
  border-radius: ${(props) => props.$isSelected && '50%'};
  width: 6.5rem;
  height: 6.5rem;
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${colors.light_grey};
  font-size: 1.25rem;
  padding: 0 0.8rem;
  gap: 1.9rem;

  .text__title {
    color: ${colors.dark_grey};
    margin-bottom: 0.2rem;
  }

  .text__sub-title {
    font-size: 0.8rem;
    color: ${colors.light_grey};
  }

  .text__comment {
    font-size: 0.8rem;
    color: ${colors.dark_grey};
  }

  .div__row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    gap: 0.6rem;
  }

  .section__input-field {
    height: 2.92rem;
    padding: 0.5rem;
    border: 1px solid ${colors.light_grey};
    border-radius: 1rem;
    font-size: 1.1rem;

    &:hover,
    &:focus {
      border-color: ${colors.pastel_blue};
    }
  }

  .section__buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    cursor: pointer;
  }
`;

export const ButtonSubmit = styled.div`
  border: none;
  border-radius: 1rem;
  width: 13.3rem;
  height: 3.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$fontColor};
  cursor: pointer;
`;

export const ButtonChoice = styled.button`
  width: 12.8rem;
  height: 2.95rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  border: 1px solid ${colors.light_grey};
  color: ${(props) =>
    props.$isClicked === true ? colors.pastel_blue : colors.light_grey};
  font-size: 1.1rem;
  background-color: white;

  transition: transform 0.3s ease;

  caret-color: transparent;

  &:hover {
    transform: scale(1.02);
    color: ${colors.pastel_blue};

    box-shadow:
      0 10px 20px rgba(210, 216, 255, 0.35),
      0 6px 6px rgba(210, 236, 255, 0.4);
  }
`;

export const TagButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 1rem;
  padding: 0.3rem;
  font-size: 1rem;
  color: ${(props) =>
    props.$isClicked ? colors.pastel_blue : colors.dark_grey};
  background-color: ${(props) =>
    props.$isClicked ? colors.light_blue : colors.pastel_grey};

  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${colors.pastel_blue};

    box-shadow:
      0 10px 20px rgba(210, 216, 255, 0.35),
      0 6px 6px rgba(210, 236, 255, 0.4);
  }
`;

export const ModalContainer = styled(BottomModalContainer)`
  .modal__title {
    font-size: 1.5rem;
  }
`;
