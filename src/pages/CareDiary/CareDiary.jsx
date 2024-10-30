import GlobalStyle, { MainContainer } from '../../style/global/global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { diaryStore } from '../../stores/diaryStore';
import { Dialog } from './Dialog';
import { InputField } from './InputField';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Header,
  ImgContainer,
  InputContainer,
  Section,
  Button,
} from '../../style/careDiary/careDiary';

function CareDiary() {
  const { openModal, selectedTag, formData, setFormData } = diaryStore();
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData('image', imageUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      tag: selectedTag,
      image: formData.image,
    };
    console.log(updatedFormData);
  };

  const handleImgCancel = () => {
    setFormData('image', '');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const onCancleClick = (e) => {
    e.preventDefault();
    setFormData('tag', '');
    setFormData('title', '');
    setFormData('location', '');
    setFormData('story', '');
    setFormData('image', '');
  };

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Header>
          <p className="extraBold">일지작성</p>
          <FontAwesomeIcon icon={faBell} className="header__icon" />
          <FontAwesomeIcon
            icon={faHouse}
            className="header__icon"
            onClick={() => handleClick('/')}
          />
        </Header>

        <Section>
          <form onSubmit={handleSubmit}>
            <ImgContainer>
              <input
                className="img__input"
                type="file"
                accept=".jpg,.jpeg,.png"
                onChange={handleImageChange}
                ref={fileInputRef}
              />
              <div className="img__upload">
                <img
                  src={
                    formData.image
                      ? formData.image
                      : '/asset/register/registerImg_icon.svg'
                  }
                  alt="프로필 이미지를 등록해주세요"
                />
              </div>
              {formData.image ? (
                <button className="button__upload" onClick={handleImgCancel}>
                  삭제
                </button>
              ) : (
                <button
                  className="button__upload"
                  onClick={() => fileInputRef.current.click()}
                >
                  이미지선택
                </button>
              )}
            </ImgContainer>
            <h4 className="bold">임시보호 일지를 작성해주세요</h4>
            <InputContainer>
              <div className="tag__container">
                <p className="input__title">태그</p>
                <button className="modal__button" onClick={openModal}>
                  {selectedTag || '태그를 선택하세요 (클릭)'}
                </button>
                <Dialog />
              </div>
              <InputField
                className="input__title"
                type={'input'}
                label={'제목'}
                placeholder={'제목을 입력해주세요'}
                name={'title'}
                required={true}
                maxLength={20}
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
            <div className="button__container">
              <Button className="bold" $cancel={true} onClick={onCancleClick}>
                취소
              </Button>
              <Button className="bold" $cancel={false} type="submit">
                등록
              </Button>
            </div>
          </form>
        </Section>
      </MainContainer>
    </>
  );
}

export default CareDiary;
