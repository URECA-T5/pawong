import styled from 'styled-components';

export const ProfileHeader = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  .profile__left {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  .profile__box {
    width: 3.4rem;
    height: 3.4rem;
    border: none;
    border-radius: 50%;
    object-fit: cover;
    display: block;
  }

  .user__name {
    font-size: 1rem;
    margin: 0;
    display: inline-block;
    color: #6d6e71;
  }
  .edit__btn {
    width: 3.4rem;
    height: 1.2rem;
    border-radius: 1rem;
    border: none;
    color: #6d6e71;
    cursor: pointer;
  }
`;
