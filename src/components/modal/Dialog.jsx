import { diaryStore } from '../../stores/diaryStore';

import {
  Overlay,
  DialogContainer,
  DialogTitle,
  TagButton,
  Button,
} from '../../style/careDiary/dialog';

export const Dialog = () => {
  const { isModalOpen, closeModal, selectedTag, setSelectedTag } = diaryStore();

  const titleButton = [
    '#미용',
    '#오산완',
    '#먹방',
    '#일상',
    '#병원',
    '#모임',
    '#펫페어',
    '#정보공유',
  ];
  const handleTagClick = (tag) => {
    setSelectedTag(tag); // 태그 선택 시 상태 업데이트
  };

  const handleSubmit = () => {
    console.log(selectedTag); // 선택된 태그를 콘솔에 출력
    closeModal(); // 모달 닫기
  };

  if (!isModalOpen) return null;

  return (
    <Overlay>
      <DialogContainer>
        <DialogTitle>글 주제를 선택해주세요</DialogTitle>
        <p>태그는 1개만 선택 가능해요</p>
        <div className="button__container">
          {titleButton.map((title, index) => (
            <TagButton
              key={index}
              $isSelected={selectedTag === title}
              onClick={() => handleTagClick(title)}
            >
              {title}
            </TagButton>
          ))}
        </div>
        <div className="button__container--submit">
          <Button onClick={handleSubmit}>선택</Button>
        </div>
      </DialogContainer>
    </Overlay>
  );
};
