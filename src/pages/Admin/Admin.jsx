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
  } = adminStore();

  const handleChange = (e) => {
    const { name, type, files } = e.target;

    if (type === 'file') {
      const currentImages = formData.productImg || [];
      const newImages = Array.from(files);

      if (name === 'productImg' && currentImages.length < 3) {
        setFormData({ productImg: [...currentImages, ...newImages] });
      } else if (name === 'productDetailImg') {
        setFormData({ productDetailImg: files[0] });
      }
    } else {
      setFormData({ [name]: e.target.value });
    }
  };

  const handleTagButtonClick = (tagName) => {
    setSelectedTag(tagName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      productImg: formData.productImg,
      productDetailImg: formData.productDetailImg,
      tag: selectedTag,
    };
    setFormData(updatedFormData);
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
              onClick={() => selectTab('1', 0)}
            >
              후원 상품 등록
            </DonationUploadTabBtn>
            <DonationUploadTabBtn
              $isSelected={selectedTab.tabName === '2'}
              onClick={() => selectTab('2', 1)}
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
            />
          )}
          {selectedTab.tabName === '2' && <ProductList />}
        </ProductSection>
      </MainContainer>
    </>
  );
}

export default Admin;
