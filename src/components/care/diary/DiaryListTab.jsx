import {
  DiaryListBtn,
  DirayListTabDiv,
} from '../../../style/care/diary/careDiaryList';

export const DiaryListTab = ({ tags, selectedTag, onSelectTag }) => {
  const handleTagClick = (tag) => {
    if (selectedTag !== tag) {
      onSelectTag(tag);
    }
  };
  return (
    <>
      <DirayListTabDiv>
        {tags.map((tag) => (
          <DiaryListBtn
            className="regular dirayList__btn"
            key={tag.id}
            selected={selectedTag === tag.name}
            onClick={() => handleTagClick(tag.name)}
          >
            {tag.name}
          </DiaryListBtn>
        ))}
      </DirayListTabDiv>
    </>
  );
};
