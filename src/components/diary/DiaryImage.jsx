import { useRef } from 'react';
import { diaryStore } from '../../stores/diaryStore';
import { ImageContainer } from '../../style/careDiary/careDiary';

const DiaryImage = () => {
  const { formData, setFormData } = diaryStore();
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData('image', imageUrl);
    }
  };

  const handleImgCancel = () => {
    setFormData('image', '');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <ImageContainer>
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
          사진선택
        </button>
      )}
    </ImageContainer>
  );
};
export default DiaryImage;
