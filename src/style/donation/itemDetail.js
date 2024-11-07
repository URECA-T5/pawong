import styled from 'styled-components';
import { MainContainer } from '../global/global';

const colors = {
  dark_gray: '#6D6E71',
  light_gray: '#B3B3B3',
  pastel_gray: '#F3F3F6',
  light_blue: '#E3ECFF',
  pastel_blue: '#5850FE',
};

export const ImageContainer = styled.div`
  width: 100%;
  padding: 1rem;
  caret-color: transparent;

  .image__item {
    height: 100%;
  }
`;

export const WhiteContainer = styled(MainContainer)`
  background-color: white;
`;

export const BodyContainer = styled.div`
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: normal;
  caret-color: transparent;

  .item__category {
    width: 3.3rem;
    height: 1.5rem;
    margin-bottom: 0.5rem;
    border-radius: 16px;
    background-color: ${colors.light_blue};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .item__message {
    width: 5.6rem;
    height: 1.8rem;
    margin-bottom: 0.5rem;
    border-radius: 16px;
    color: ${colors.pastel_gray};
    background-color: ${colors.pastel_blue};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .item__gap {
    padding: 0.4rem;
  }

  .item__title {
    font-size: 1.3rem;
  }

  .item__row {
    display: flex;
    flex-direction: row;
  }

  .item__price {
    font-size: 1.3rem;
    padding: 0rem 1rem;
  }

  .item__split {
    width: 100%;
    height: 0.3rem;
    margin: 0.4rem 0;
    background-color: ${colors.pastel_gray};
  }

  .item__description {
    width: 100%;
    padding: 0.5rem;
  }
`;

export const BottomContainer = styled.div`
  height: 7.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  padding: 0.3rem 1.5rem;
  gap: 1rem;
  position: sticky;
  bottom: 0px;
  background-color: white;

  .btn__share {
    width: 3.1rem;
    height: 2.8rem;
    font-size: 1.2rem;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${colors.light_blue};
    color: ${colors.pastel_blue};

    cursor: pointer;
  }

  .btn__buy {
    width: 30rem;
    height: 2.8rem;
    border: none;
    border-radius: 8px;
    background-color: ${colors.pastel_blue};
    color: ${colors.light_blue};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }
`;

export const BottomModalContainer = styled.dialog`
  position: fixed;
  border: none;
  padding: 2.2rem;
  margin: calc(100vh - 300px) auto 0 auto;
  animation: modal-show 0.5s;
  border-radius: 16px 16px 0 0;
  width: 37.5rem;
  height: 18.75rem;
  overflow: hidden;
  caret-color: transparent;
  a {
    text-decoration-line: none;
  }
  inset: 0;

  .modal__dialog::backdrop {
    background-color: #ffffff;
  }

  .modal__infoContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 16px;
    font-size: 1rem;
    width: 33.1rem;
    height: 6.3rem;
    padding: 1.6rem 1.4rem;
    margin-bottom: 1.3rem;
    background-color: ${colors.pastel_gray};
  }

  .modal__infoLeft {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .modal__infoRight {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: ${colors.dark_gray};
    font-weight: bold;
    font-size: 1rem;
    gap: 1rem;
    width: 5.2rem;
    height: 1.3rem;
  }

  .modal__title {
    color: ${colors.dark_gray};
  }

  .modal__price {
    color: ${colors.light_gray};
  }

  .modal__toggleBtn {
    width: 1.4rem;
    height: 1.4rem;
    border: none;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    background-color: ${colors.light_blue};
    color: ${colors.pastel_blue};
    cursor: pointer;
  }

  .modal__total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.2rem;
    margin-bottom: 2rem;
    font-size: 1.2rem;
  }

  .modal__totalPrice {
    color: ${colors.pastel_blue};
  }

  .modal__buyBtn {
    background-color: ${colors.pastel_blue};
    width: 100%;
    height: 2.8rem;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .modal_paymentMethodBtn {
    margin: 1rem 0 0 0.5rem;
    width: 15.5rem;
    height: 6.25rem;
    text-align: center;
    cursor: pointer;
    border: 0;
    border-radius: 1rem;
    background-color: ${colors.light_blue};
    color: ${colors.pastel_blue};
    font-size: 1.5rem;
  }
  .modal_paymentBtn {
    margin-top: 1rem;
    width: 32rem;
    height: 3.75rem;
    text-align: center;
    cursor: pointer;
    border: 0;
    border-radius: 1rem;
    background-color: ${colors.pastel_blue};
    color: white;
    font-size: 1.2rem;
  }

  @keyframes modal-show {
    from {
      opacity: 0.95;
      transform: translateY(100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ToggleBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${colors.dark_gray};
  font-weight: bold;
  font-size: 1rem;
  gap: 1rem;
  width: 5.2rem;
  height: 1.3rem;

  .modal__price {
    color: ${colors.light_gray};
  }

  .modal__toggleBtn {
    width: 1.4rem;
    height: 1.4rem;
    border: none;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    background-color: ${colors.light_blue};
    color: ${colors.pastel_blue};
    cursor: pointer;
  }
`;
