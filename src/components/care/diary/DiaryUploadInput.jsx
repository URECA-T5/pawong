import React, { useEffect } from 'react';
import { diaryStore } from '../../../stores/diaryStore';
import { InputField } from './DiaryUploadInputField';
import {
  InputContainer,
  TagButton,
} from '../../../style/care/diary/careDiaryUpload';
import serverBaseUrl from '../../../config/serverConfig';
import userPet from '../../../stores/mypage/userPet';

const DiaryInput = () => {
  const { selectedTag, setSelectedTag } = diaryStore();
  const { pets, fetchPets } = userPet();

  useEffect(() => {
    fetchPets();
  }, [fetchPets]);

  const tags = [
    { id: 1, name: '오산완' },
    { id: 2, name: '일상' },
    { id: 3, name: '병원' },
    { id: 4, name: '먹방' },
    { id: 5, name: '미용' },
  ];

  const handleTagButtonClick = (tag) => {
    setSelectedTag(tag === selectedTag ? '' : tag);
  };

  return (
    <InputContainer>
      <p className="input__title">주제</p>
      <div className="tag__container">
        {tags.map((tag) => (
          <TagButton
            key={tag.id}
            $selected={selectedTag === tag.name}
            onClick={() => handleTagButtonClick(tag.name)}
            type="button"
          >
            {tag.name}
          </TagButton>
        ))}
      </div>
      <InputField
        className="input__title"
        type={'input'}
        label={'제목'}
        placeholder={'제목을 입력해주세요 (필수입력)'}
        name={'title'}
        required={true}
        maxLength={20}
      />
      <InputField
        className="input__title"
        type={'select'}
        label={'임보 동물 선택'}
        placeholder={'일지를 작성할 반려동물을 선택해주세요 (필수입력)'}
        name={'selectPet'}
        required={true}
        options={pets.map((pet) => ({
          value: pet.id,
          label: `${pet.name} (${pet.breed})`,
          image: `${serverBaseUrl}/${pet.profileImage}`,
        }))}
      />
      <InputField
        className="input__title"
        type={'input'}
        label={'장소'}
        placeholder={'사진 장소를 입력할 수 있어요'}
        name={'location'}
        maxLength={20}
      />
      <InputField
        className="input__title"
        type={'textarea'}
        label={'이야기'}
        placeholder={
          '현재상황 및 강아지에 대한 이야기 모두 좋아요 (최대 300자)'
        }
        name={'story'}
        maxLength={300}
      />
    </InputContainer>
  );
};

export default DiaryInput;
