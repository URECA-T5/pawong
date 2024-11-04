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

export const DonationSentDiv = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
  img {
    width: 15%;
    margin-bottom: 0.5rem;
  }
  .donationSent__span {
    color: ${colors.pastel_blue};
  }
`;

export const DonationSentInfo = styled.div`
  width: 70%;
  margin: 0 auto;
  border-top: 0.063rem solid ${colors.gray};
  text-align: left;
  font-size: 0.9rem;
  color: ${colors.dark_gray};
  margin-bottom: 5rem;
  p {
    margin-top: 0.5rem;
  }
  .donationSent__mt {
    margin-top: 0.5rem;
  }

  .donationSent__size {
    font-size: 0.8rem;
    padding: 0.15rem 0.2rem 0 0.2rem;
  }

  .donationSent__prd {
    padding-top: 0.25rem;
    color: ${colors.black};
  }

  .donationSent__table {
    width: 100%;
    background-color: ${colors.light_blue};
  }

  .donationSent__btn {
    width: 2.5rem;
    height: 1.563rem;
    border: 0;
    border-radius: 1rem;
    background-color: ${colors.pastel_gray};
    font-size: 0.8rem;
    margin: 0.8rem 0.1rem;
    color: ${colors.dark_gray};
    cursor: pointer;
  }

  .donationSent__border {
    border-bottom: 0.063rem solid ${colors.light_gray};
    padding-bottom: 0.3rem;
  }

  .donationSent__center {
    text-align: center;
  }

  .donationSent__img {
    width: 2.875rem;
    height: 2.875rem;
    padding-top: 0.3rem;
  }
`;
