import styled from 'styled-components';

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
    color: #6d6e71;
  }
  span {
    color: #6d6e71;
  }
  table {
    margin-top: 0.2rem;
    width: 65%;
    color: #b3b3b3;
  }
  td {
    padding: 1px 1px;
  }
  summary::-webkit-details-marker {
    display: none;
  }
  summary {
    list-style-type: none;
  }
`;
