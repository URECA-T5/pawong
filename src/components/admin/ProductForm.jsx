import {
  InputSection,
  Button,
  TagButton,
  FormSection,
} from '../../style/admin/admin';
import { useRef } from 'react';

const ProductForm = ({
  formData,
  handleChange,
  handleSubmit,
  selectedTag,
  handleClick,
  onImageClick,
}) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <FormSection>
      <form onSubmit={handleSubmit}>
        <div className="form__imgContainer">
          <div className="form__imgtext">
            <input
              type="file"
              id="imgUpload"
              accept=".jpg/*"
              multiple
              name="productImg"
              onChange={handleChange}
              style={{ display: 'none' }}
            />
            <label htmlFor="imgUpload" className="form__img--label">
              상품이미지 등록
            </label>
          </div>
          {formData.productImg.length > 0 && (
            <div className="form__imgPerview">
              {formData.productImg.map(
                (file, index) =>
                  file && (
                    <button
                      key={index}
                      className="preview__image"
                      onClick={() => onImageClick(index)}
                      type="button"
                    >
                      <img src={file} alt={`preview ${index + 1}`} />
                    </button>
                  ),
              )}
            </div>
          )}
        </div>

        <InputSection>
          <div className="input__title">
            <img src="/asset/admin/listImg.svg" alt="listImg" />
            <p className="bold">기본정보</p>
          </div>
          <div className="input__tagBtn">
            <TagButton
              $selected={selectedTag === '강아지'}
              onClick={() => handleClick('강아지')}
            >
              강아지
            </TagButton>
            <TagButton
              $selected={selectedTag === '고양이'}
              onClick={() => handleClick('고양이')}
            >
              고양이
            </TagButton>
          </div>

          <div className="input__content">
            <label htmlFor="productName">상품명</label>
            <input
              type="text"
              id="productName"
              name="name"
              value={formData.name || ''}
              placeholder="상품명 입력"
              onChange={handleChange}
            />
          </div>

          <div className="input__content">
            <label htmlFor="productPrice">상품금액</label>
            <input
              type="number"
              id="productPrice"
              name="price"
              value={formData.price || ''}
              placeholder="상품금액 입력"
              onChange={handleChange}
            />
          </div>

          <div className="input__content">
            <label htmlFor="productbrand">브랜드</label>
            <input
              type="text"
              id="productbrand"
              name="brand"
              value={formData.brand || ''}
              placeholder="브랜드명 입력"
              onChange={handleChange}
            />
          </div>

          <div className="input__title">
            <img src="/asset/admin/listImg.svg" alt="listImg" />
            <p className="bold">상품 상세정보</p>
          </div>

          <div className="input__content">
            <label htmlFor="detailImgUpload">상세페이지(이미지)</label>
            <input
              type="file"
              id="detailImgUpload"
              name="productDetailImg"
              onChange={handleChange}
              ref={fileInputRef}
              style={{ display: 'none' }}
            />
            <button
              type="button"
              onClick={handleButtonClick}
              className="upload-button"
            >
              {formData.productDetailImg ? (
                <img
                  src={formData.productDetailImg}
                  alt="미리보기"
                  style={{ width: '100%', height: '100%' }}
                />
              ) : (
                '이미지 업로드'
              )}
            </button>
          </div>

          <div className="input__content">
            <label htmlFor="productMaterial">재질</label>
            <input
              type="text"
              id="productMaterial"
              name="material"
              value={formData.material || ''}
              placeholder="재질 및 재료 입력"
              onChange={handleChange}
            />
          </div>

          <div className="input__content">
            <label htmlFor="productSize">규격</label>
            <input
              type="text"
              id="productSize"
              name="size"
              value={formData.size || ''}
              placeholder="예) 52*53"
              onChange={handleChange}
            />
          </div>

          <div className="input__content">
            <label htmlFor="productExpirationDate">유통기한</label>
            <input
              type="date"
              id="productExpirationDate"
              name="expirationDate"
              onChange={handleChange}
            />
          </div>

          <div className="input__content">
            <label htmlFor="productCsInfo">C/S 정보</label>
            <input
              type="text"
              id="productCsInfo"
              name="csInfo"
              value={formData.csInfo || ''}
              placeholder="C/S 정보 입력"
              onChange={handleChange}
            />
          </div>
        </InputSection>
        <div className="button__container">
          <Button className="bold" $cancel={true}>
            취소
          </Button>
          <Button className="bold" $cancel={false} type="submit">
            등록
          </Button>
        </div>
      </form>
    </FormSection>
  );
};

export default ProductForm;
