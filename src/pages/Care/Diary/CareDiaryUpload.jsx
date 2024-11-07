import GlobalStyle, { MainContainer } from '../../../style/global/global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pets.length === 0) {
      alert('현재 등록된 임보 동물이 없습니다!');
      return;
    }

    const updatedFormData = {
      ...formData,
      tag: selectedTag,
      image: formData.image,
    };
    console.log(updatedFormData);
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
