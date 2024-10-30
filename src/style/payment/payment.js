import styled from 'styled-components';

const colors = {
  dark_gray: '#6D6E71',
  light_gray: '#B3B3B3',
  pastel_gray: '#F3F3F6',
  light_blue: '#E3ECFF',
  pastel_blue: '#5850FE',
};

export const HeaderContainer = styled.div`
  width: 100%;
  height: 3.3rem;
  padding: 1rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;

  caret-color: transparent;

  .header__icon {
    transition: color 0.3s ease;

    &:hover,
    &:focus {
      color: #5850fe;
      outline: none;
      cursor: pointer;
    }
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 1.3rem;
  caret-color: transparent;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2.1rem 1.1rem;
  margin-bottom: 0.8rem;
  border-radius: 1rem;
  width: 34.8rem;
  height: 14.2rem;
  background-color: white;
  font-size: 1.8rem;

  .profile__img {
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    object-fit: cover;
  }

  .profile__message {
    padding: 2.6rem 2.2rem;
    text-align: left;

    .message__highlight {
      color: ${colors.pastel_blue};
    }
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  width: 100%;
  padding: 1rem 1.4rem;
  background-color: white;
  font-size: 1.4rem;
`;

export const ItemInfoArea = styled.div`
  width: 100%;
  height: 9.6rem;
  padding-top: 1.5rem;
  padding-bottom: 0.9rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${colors.dark_gray};

  .item__img {
    height: 100%;
    border-radius: 16px;
  }

  .item__detailArea {
    padding-top: 0.4rem;
    padding-left: 0.8rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .item__category {
    width: 3.6rem;
    height: 1.4rem;
    border-radius: 15px;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${colors.dark_gray};
    background-color: ${colors.pastel_gray};
  }

  .item__title {
    padding: 0.2rem;
    color: ${colors.dark_gray};
  }

  .item__price {
    padding: 0.2rem;
  }
`;

export const ItemPriceArea = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  padding-top: 0.8rem;
  font-size: 1.4rem;
  border-bottom: 1px solid ${colors.dark_gray};

  .text__darkGray {
    color: ${colors.dark_gray};
  }

  .payment__divRow {
    padding-top: 1.25rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1.25rem;
  }
`;

export const ItemTotalPriceArea = styled.div`
  padding-top: 0.8rem;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;

  .text__pastelBlue {
    color: ${colors.pastel_blue};
  }

  .payment__divRow {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1.25rem;
  }

  .payment__start {
    margin-top: 6.75rem;
    width: 100%;
    height: 2.8rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    background-color: ${colors.pastel_blue};
    color: white;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;
