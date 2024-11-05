import styled from 'styled-components';

const colors = {
  placeholder: '#cccccc',
  point: '#5850fe',
  skyBackground: '#e3ecff',
  darkGray: '#6d6e71',
  defaultBackground: '#f3f3f6',
};

export const ButtonSection = styled.div`
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

function DefaultBtn({ formUrl, onNavigate }) {
  return (
    <ButtonSection>
      <button className="story__button" onClick={() => onNavigate('/donation')}>
        <img src="/asset/diary/story/dogBowl.svg" alt="dog_bowl_img" />
        후원하기
      </button>
      <a
        href={formUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <button className="story__button">
          <img src="/asset/diary/story/listImg.svg" alt="list_img" />
          문의하기
        </button>
      </a>
    </ButtonSection>
  );
}

export default DefaultBtn;
