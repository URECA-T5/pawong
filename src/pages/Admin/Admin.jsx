import GlobalStyle, { MainContainer } from '../../style/global/global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { adminStore } from '../../../src/stores/adminStore';
import { useNavigate } from 'react-router-dom';
import ProductForm from '../../components/admin/ProductForm';
import ProductList from '../../components/admin/ProductList';

import {
  AdminHeader,
  ProductSection,
  DonationUploadTabBtn,
} from '../../style/admin/admin';

function Admin() {
  const navigate = useNavigate();
  const {
    formData,
    setFormData,
    selectedTab,
    selectTab,
    selectedTag,
    setSelectedTag,
    addData,
  } = adminStore();

  const handleChange = (e) => {
    const { name, type, files } = e.target;

    if (type === 'file') {
      const currentImages = formData.productImg || [];
      currentImages.forEach((url) => URL.revokeObjectURL(url));

      if (name === 'productImg' && currentImages.length < 3) {
        const newImages = Array.from(files).map((file) =>
          URL.createObjectURL(file),
        );
        setFormData({
          ...formData,
          productImg: [...currentImages, ...newImages],
        });
      } else if (name === 'productDetailImg') {
        const file = files[0];
        const imageUrl = file ? URL.createObjectURL(file) : null;
        setFormData({ ...formData, productDetailImg: imageUrl });
      }
    } else {
      setFormData({ ...formData, [name]: e.target.value });
    }
  };
  const handleTagButtonClick = (tagName) => {
    setSelectedTag(tagName);
  };

  const handleDeleteImage = (index) => {
    if (index < 0 || index >= formData.productImg.length) return;
    URL.revokeObjectURL(formData.productImg[index]);
    const updatedImages = formData.productImg.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      productImg: updatedImages,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      productImg: formData.productImg,
      productDetailImg: formData.productDetailImg,
      tag: selectedTag,
    };
    const formDataToSend = new FormData();
    formDataToSend.append('donationItemImages', updatedFormData.productImg);
    formDataToSend.append('donationItemDetailImage', [
      updatedFormData.productDetailImg,
    ]);
    formDataToSend.append('name', updatedFormData.name);
    formDataToSend.append('price', updatedFormData.price);
    formDataToSend.append('brand', updatedFormData.brand);
    formDataToSend.append('tag', updatedFormData.tag);
    addData(formDataToSend);
    console.log(updatedFormData);
  };

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <AdminHeader>
          <p className="extraBold">포옹 관리자</p>
          <FontAwesomeIcon
            icon={faHouse}
            className="header__icon"
            onClick={() => navigate('/')}
          />
        </AdminHeader>
        <ProductSection>
          <div className="product__tagBtn">
            <DonationUploadTabBtn
              $isSelected={selectedTab.tabName === '1'}
              onClick={() => selectTab('1')}
            >
              후원 상품 등록
            </DonationUploadTabBtn>
            <DonationUploadTabBtn
              $isSelected={selectedTab.tabName === '2'}
              onClick={() => selectTab('2')}
            >
              후원 상품 관리
            </DonationUploadTabBtn>
          </div>
          {selectedTab.tabName === '1' && (
            <ProductForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              selectedTag={selectedTag}
              handleClick={handleTagButtonClick}
              onImageClick={handleDeleteImage}
            />
          )}
          {selectedTab.tabName === '2' && <ProductList />}
        </ProductSection>
      </MainContainer>
    </>
  );
}

export default Admin;
