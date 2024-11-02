import styled from 'styled-components';

const colors = {
  placeholder: '#cccccc',
  point: '#5850fe',
  skyBackground: '#e3ecff',
  darkGray: '#6d6e71',
  defaultBackground: '#f3f3f6',
};
export const AuthorView = styled.div`
  margin: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .story__button {
    color: ${colors.darkGray};
    background-color: white;
    border: none;
    border-radius: 1rem;
    height: 3.5rem;
    width: 16.8rem;
    cursor: pointer;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function AuthorBtn({ onNavigate }) {
  return (
    <AuthorView>
      <button
        className="story__button"
        onClick={() => onNavigate('/pet-upload')}
      >
        <img src="/asset/diary/story/dogBowl.svg" alt="dog_bowl_img"></img>
        작성하기
      </button>
      <button
        className="story__button"
        onClick={() => onNavigate('/pet-upload')}
      >
        <img src="/asset/diary/story/listImg.svg" alt="list_img"></img>
        편집하기
      </button>
    </AuthorView>
  );
}

export default AuthorBtn;
