import styled from 'styled-components';

const colors = {
  dark_gray: '#6D6E71',
  gray: '#CCCCCC',
  light_gray: '#E3E3E3',
  pastel_gray: '#F3F3F6',
  footer_gray: '#B3B3B3',
  light_blue: '#E3ECFF',
  pastel_blue: '#5850FE',
  black: '#000000',
};

export const MainFooter = styled.footer`
  width: 100%;
  padding: 0 1.5rem;
  font-size: 0.7rem;
  margin-bottom: 5rem;
  h2 {
    margin-bottom: 1rem;
  }
  a {
    text-decoration: none;
    color: ${colors.dark_gray};
  }
  span {
    color: ${colors.dark_gray};
  }
  table {
    margin-top: 0.2rem;
    width: 65%;
    color: ${colors.footer_gray};
  }
  td {
    padding: 0.063rem 0.063rem;
  }
  summary::-webkit-details-marker {
    display: none;
  }
  summary {
    list-style-type: none;
  }
`;
