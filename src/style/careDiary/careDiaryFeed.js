import styled from 'styled-components';

const colors = {
  placeholder: '#cccccc',
  point: '#5850fe',
  skyBackground: '#e3ecff',
  darkGray: '#6d6e71',
  defaultBackground: '#f3f3f6',
};

export const CareStoryHeader = styled.header`
  width: 100%;
  height: 3.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem;
  background-color: white;
  font-size: 1.2rem;

  div {
    width: 1.7rem;
    height: 1.9rem;
  }

  .header__starBtn {
    background: none;
    border: none;
    padding: 0rem;
    cursor: pointer;
  }

  .header__homeIcon {
    &:hover,
    &:focus {
      color: ${colors.point};
      outline: none;
      cursor: pointer;
    }
  }
`;

export const ProfileSection = styled.div`
  margin: 1.25rem;
  padding: 1.25rem;
  background-color: white;
  border: 1px white;
  border-radius: 1rem;
  gap: 0.625rem;

  .profile__dog {
    display: flex;
    flex-direction: row;
  }

  .profile__dog--img {
    margin-right: 1.25rem;
  }

  .profile__dog--info {
    margin-top: 0.625rem;
  }

  .profile__dog--info--value {
    color: ${colors.darkGray};
  }
`;

export const StorySection = styled.div`
  margin: 1.25rem;
  padding: 1.25rem;
  background-color: white;
  border: 1px white;
  border-radius: 1rem;
  gap: 0.625rem;

  .profile__dog--info--story {
    margin: 0.4rem 0 0 0.625rem;
    color: ${colors.darkGray};
  }
`;

export const ImgSection = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;

  .stroy__imgBtn {
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    height: 210px;
    cursor: pointer;
  }

  .stroy__imgBtn--img {
    width: 200px;
  }
`;
