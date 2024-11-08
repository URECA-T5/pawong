import { useRef } from 'react';
import { diaryStore } from '../../../stores/diaryStore';
import { ImageContainer } from '../../../style/care/diary/careDiaryUpload';
import serverBaseUrl from '../../../config/serverConfig';
import { useParams } from 'react-router-dom';

const DiaryImage = () => {
  const { formData, setFormData } = diaryStore();
  const fileInputRef = useRef(null);
  const { fosterDiaryId } = useParams();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // 파일이 선택되었을 경우
    if (file) {
      // 기존 이미지 URL이 있다면 URL을 해제
      if (formData.image && formData.image instanceof Blob) {
        URL.revokeObjectURL(formData.image);
      }
      // formData에 파일 저장 (파일이 선택되면 Blob 형태로 미리보기)
      setFormData({
        ...formData,
        image: file, // Blob 객체로 저장
        imageFile: file,
      });
    }
  };
  const handleImgCancel = () => {
    if (formData.image) {
      URL.revokeObjectURL(formData.image);
    }
    setFormData({ ...formData, image: null });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  console.log(formData.image);
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
            fosterDiaryId
              ? `${serverBaseUrl}/${formData.image}` // 서버에서 이미지를 가져오는 경우
              : formData.image
                ? URL.createObjectURL(formData.image) // Blob 객체인 경우 미리보기
                : '/asset/register/registerImg_icon.svg' // 기본 이미지
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
