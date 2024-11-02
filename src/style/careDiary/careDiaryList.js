import styled from 'styled-components';

const colors = {
  dark_gray: '#6D6E71',
  gray: '#CCCCCC',
  light_gray: '#E3E3E3',
  pastel_gray: '#F3F3F6',
  light_blue: '#E3ECFF',
  pastel_blue: '#5850FE',
  black: '#000000',
  white: '#FFFFFF',
};

export const CareDiaryListHeader = styled.header`
  width: 100%;
  height: 3.25rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  padding: 1.25rem;
  background-color: ${colors.white};
  font-size: 1.2rem;
  .diaryList__icon {
    cursor: pointer;
  }
  p {
    text-align: center;
    flex: 1;
    span {
      color: ${colors.pastel_blue};
    }
  }
`;

export const DirayListTabDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const DiaryListBtn = styled.button`
  width: 4rem;
  height: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  border: 0;
  font-size: 0.9rem;
  background-color: ${(props) =>
    props.selected ? `${colors.light_blue}` : `${colors.pastel_gray}`};
  color: ${(props) =>
    props.selected ? `${colors.pastel_blue}` : `${colors.dark_gray}`};
  font-weight: ${(props) => (props.selected ? '700' : '400')};
  cursor: pointer;
`;

export const DiaryListLine = styled.div`
  border-top: 0.063rem solid ${colors.dark_gray};
  margin: 1.8rem auto;
  width: 37.188rem;
`;

export const DiaryListContentDiv = styled.div`
  margin-left: 1.5rem;
  min-height: 25rem;
  li {
    color: ${colors.dark_gray};
    font-size: 0.938rem;
  }
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    color: ${colors.dark_gray};
  }
  .diaryList__contentTag {
    width: 4.1rem;
    height: 1.8rem;
    background-color: ${colors.light_blue};
    color: ${colors.pastel_blue};
    border: 0;
    border-radius: 0.625rem;
    font-size: 0.938rem;
    margin: 0 0.8rem 0.3rem 0;
  }
  .diaryList__contentDate {
    width: 4.1rem;
    font-size: 0.75rem;
    margin-right: 0.8rem;
  }
  .diaryList__contentAuthor {
    font-size: 0.75rem;
  }
  .diaryList__contentLine {
    border-top: 0.063rem solid ${colors.pastel_gray};
    margin: 1rem 0;
    width: 29.375rem;
  }
`;

export const DiaryListImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  img {
    width: 12.5rem;
    margin-bottom: 1rem;
  }
`;
