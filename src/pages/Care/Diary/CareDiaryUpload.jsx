import GlobalStyle, { MainContainer } from '../../../style/global/global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { diaryStore } from '../../../stores/diaryStore';
import { useNavigate } from 'react-router-dom';
import {
  Header,
  Section,
  Button,
} from '../../../style/care/diary/careDiaryUpload';
import DiaryUploadImage from '../../../components/care/diary/DiaryUploadImage';
import DiaryUploadInput from '../../../components/care/diary/DiaryUploadInput';
import userPet from '../../../stores/mypage/userPet';
import { useEffect } from 'react';
import { ErrorMessage } from '../../../style/register/register';
import { diaryUpload } from '../../../api/pet/care/diary/diaryUpload';

const CareDiary = () => {
  const { pets, fetchPets } = userPet();
  const { selectedTag, setSelectedTag, formData, setFormData } = diaryStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPets();
  }, [fetchPets]);

  const handleClick = (path) => {
    navigate(path);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pets.length === 0) {
      alert('현재 등록된 임보 동물이 없습니다!');
      return;
    }

    const updatedFormData = new FormData();

    updatedFormData.append('fosterDiaryImage', formData.image);
    updatedFormData.append('petId', 1);
    updatedFormData.append(
      'fosterDiary',
      JSON.stringify({
        title: formData.title,
        content: formData.story,
        tag: selectedTag,
        place: formData.location,
      }),
    );
    try {
      const response = await diaryUpload(updatedFormData);
      console.log('서버 응답:', response);
    } catch (error) {
      console.error('일지 등록 실패:', error);
      alert('일지 등록에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const onCancelClick = (e) => {
    e.preventDefault();
    setFormData({ tag: '', title: '', location: '', story: '', image: '' });
    setSelectedTag('');
  };

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Header>
          <p className="extraBold">일지작성</p>
          <FontAwesomeIcon
            icon={faHouse}
            className="header__icon"
            onClick={() => handleClick('/')}
          />
        </Header>
        <Section>
          <form onSubmit={handleSubmit}>
            <DiaryUploadImage />
            <h4 className="bold">임시보호 일지를 작성해주세요</h4>
            <DiaryUploadInput />
            <div className="button__container">
              <Button className="bold" $cancel={true} onClick={onCancelClick}>
                취소
              </Button>
              <Button
                className="bold"
                $cancel={false}
                type="submit"
                disabled={!formData.title}
                onClick={() => handleClick('/diary-feed')}
              >
                등록
              </Button>
            </div>
          </form>
        </Section>
      </MainContainer>
    </>
  );
};
export default CareDiary;
