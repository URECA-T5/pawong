import { diaryListTabStore } from '../../stores/diaryListStore';
import {
  DiaryListBtn,
  DirayListTabDiv,
} from '../../style/careDiary/careDiaryList';

export const DiaryListTab = ({ categories }) => {
  const { selectedCategory, setSelectedCategory } = diaryListTabStore();
  return (
    <>
      <DirayListTabDiv>
        {categories.map((category) => (
          <DiaryListBtn
            className="regular dirayList__btn"
            key={category.id}
            selected={selectedCategory === category.name}
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.name}
          </DiaryListBtn>
        ))}
      </DirayListTabDiv>
    </>
  );
};
