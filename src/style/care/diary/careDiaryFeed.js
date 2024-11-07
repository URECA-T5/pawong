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
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    object-fit: cover;
  }

  .profile__dog--info {
    margin-top: 0.625rem;
  }

  .profile__dog--info--value {
    color: ${colors.point};
  }

  .profile__dog--info__item {
    margin: 0.3rem 0;
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
  }

  .profile__dog--info--value {
    margin-top: 0.625rem;
  }

  .profile__dog--info--value span {
    white-space: pre-wrap;
    color: ${colors.darkGray};
  }
`;

export const ImgSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 1.25rem 1.25rem 1.25rem;
  padding: 1.25rem;
  background-color: white;
  border-radius: 1rem;
  grid-template-columns: repeat(3, 1fr);

  .stroy__imgBtn {
    flex: 1;
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }

  .stroy__imgBtn--img {
    width: 10.7rem;
    height: 10.7rem;
    object-fit: cover;
  }
`;

export const FeedIcon = styled.div`
  padding: 0 1.25rem;
  margin: 0;
`;
