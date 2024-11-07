import { styled } from 'styled-components';

const colors = {
  dark_grey: '#6D6E71',
  light_grey: '#B3B3B3',
  pastel_grey: '#F3F3F6',
  light_blue: '#E3ECFF',
  pastel_blue: '#5850FE',
};

export const HeaderSection = styled.header`
  width: 100%;
  height: 3.25rem;
  position: sticky;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem;
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
  background-color: white;

  caret-color: transparent;
`;

export const HeaderMessageSection = styled.div`
  position: relative;
  padding-top: 5.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 9.7rem;
  background-color: white;

  .message__box {
    width: 35.6rem;
    height: 2.8rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${colors.pastel_blue};
    background-color: ${colors.light_blue};
  }

  .message__img-over {
    position: absolute;
    top: 0.9rem;
    width: 14rem;
    height: 6.4rem;
  }
`;

export const HeaderIconSection = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.$justify};
  gap: 0.8rem;

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

export const ListBodySection = styled.div`
  padding: 1rem;
  width: 100%;
  display: grid;
  justify-items: center;
  width: 100%;
  gap: 1.4rem;
  grid-template-columns: 1fr 1fr;
  a {
    text-decoration-line: none;
  }
`;

export const ProfileItem = styled.div`
  position: relative;
  padding: 0 0.75rem;
  padding-top: 1.25rem;
  gap: 0.95rem;
  width: 17.1rem;
  height: 20.4rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  color: ${colors.dark_grey};
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.12),
    0 6px 6px rgba(0, 0, 0, 0.16);

  transition: transform 0.3s ease;

  caret-color: transparent;

  &:hover {
    transform: scale(1.02);
    color: ${colors.pastel_blue};

    box-shadow:
      0 10px 20px rgba(210, 216, 255, 0.35),
      0 6px 6px rgba(210, 236, 255, 0.4);
  }

  .item__img {
    width: 15.6rem;
    height: 15.6rem;
    object-fit: cover;
  }

  .item__info {
    position: absolute;
    top: 2.2rem;
    left: 1rem;
    padding: 0.6rem;
    width: auto;
    height: 2.25rem;
    border-radius: 1rem;
    color: ${colors.pastel_blue};
    background-color: ${colors.light_blue};
    font-size: 0.95rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
