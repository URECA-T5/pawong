import styled from 'styled-components';

const colors = {
  dark_gray: '#6D6E71',
  gray: '#CCCCCC',
  light_gray: '#E3E3E3',
  pastel_gray: '#F3F3F6',
  light_blue: '#E3ECFF',
  pastel_blue: '#5850FE',
  black: '#000000',
};

export const DonationReceivedDiv = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
  img {
    width: 15%;
    margin-bottom: 0.5rem;
  }
  .donationReceived__span {
    color: ${colors.pastel_blue};
  }
`;

export const DonationReceivedSection = styled.section`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: row;
  justify-content: center;
  gap: 4rem;
  margin-bottom: 3.5rem;
  img {
    width: 8.75rem;
    height: 8.75rem;
    border-radius: 1rem;
    object-fit: cover;
  }
  img:hover {
    border: 0.156rem solid ${colors.pastel_blue};
    object-fit: cover;
  }
  .donationReceived__btn {
    width: 8.75rem;
    height: 8.75rem;
    border: 0;
    border-radius: 1rem;
    cursor: pointer;
  }
`;

export const DonationReceivedInfo = styled.div`
  width: 70%;
  margin: 0 auto;
  border-top: 0.063rem solid ${colors.gray};
  text-align: left;
  font-size: 0.9rem;
  color: ${colors.dark_gray};
  margin-bottom: 5rem;
  p {
    margin-bottom: 0.7rem;
    font-size: 0.85rem;
  }
  .donationReceived__mt {
    margin-top: 0.5rem;
    color: ${colors.dark_gray};
  }

  .donationReceived__border {
    font-size: 0.8rem;
    border-bottom: 0.063rem solid ${colors.light_gray};
  }

  .donationReceived__prd {
    padding-top: 0.25rem;
    color: ${colors.black};
  }

  .donationReceived__padding {
    padding: 0.15rem 2rem 0 0;
  }

  .donationReceived__table {
    width: 100%;
  }

  .donationReceived__btn {
    width: 2.5rem;
    height: 1.563rem;
    border: 0;
    border-radius: 1rem;
    background-color: ${colors.pastel_gray};
    font-size: 0.8rem;
    margin: 0.8rem 0.1rem;
    color: ${colors.pastel_blue};
    cursor: pointer;
  }

  .donationReceived__center {
    text-align: center;
  }

  .donationReceived__img {
    width: 2.875rem;
    height: 2.875rem;
    padding-top: 0.3rem;
  }
`;
