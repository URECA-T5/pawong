import { useRef } from 'react';
import {
  ImageContainer,
  SelectedImage,
} from '../../../style/care/upload/petUpload';
import { petUploadStore } from '../../../stores/care/upload/petUploadStore';

const DiaryImage = () => {
  const { formData, setFormData } = petUploadStore();
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setFormData({ ...formData, profileImage: file });
  };

  const handleImgCancel = () => {
    setFormData({ ...formData, profileImage: null });
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
        <SelectedImage
          src={
            formData.profileImage
              ? URL.createObjectURL(formData.profileImage)
              : '/asset/register/registerImg_icon.svg'
          }
          alt="프로필 이미지를 등록해주세요"
          $isSelected={formData.profileImage}
        />
      </div>
      {formData.profileImage ? (
        <button className="button__upload" onClick={handleImgCancel}>
          삭제
        </button>
      ) : (
        <button
          type="button"
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
