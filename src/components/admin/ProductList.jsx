import React, { useState } from 'react';
import AdminModal from './AdminModal';
import {
  TagButton,
  Button,
  ListSection,
  EditButton,
} from '../../style/admin/admin';

function ProductList() {
  const categoryTags = [
    {
      id: 1,
      type: '전체',
    },
    {
      id: 2,
      type: '포옹',
    },
    {
      id: 3,
      type: '강아지',
    },
    {
      id: 4,
      type: '고양이',
    },
  ];

  const productInfo = [
    {
      productId: 1,
      tag: '강아지',
      brand: '포옹',
      imgSrc: 'asset/admin/cover.svg',
      name: 'PROBEST 5kg',
      price: '50,000',
    },
    {
      productId: 2,
      tag: '고양이',
      brand: '펫생각',
      imgSrc: 'asset/admin/cover.svg',
      name: '프리미멍 5kg',
      price: '30,000',
    },
  ];

  const [searchdate, setSearchData] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const handleCategoryClick = (category) => setSelectedCategory(category.type);

  const filteredProducts = productInfo.filter(
    (product) =>
      (selectedCategory === '전체' ||
        product.brand === selectedCategory ||
        product.tag === selectedCategory) &&
      (product.brand.toLowerCase().includes(searchdate.toLowerCase()) ||
        product.name.toLowerCase().includes(searchdate.toLowerCase())),
  );

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleRegister = () => {
    console.log('상품이 저장되었습니다.');
    openModal('save');
  };

  const openDeleteModal = () => {
    console.log('상품이 삭제되었습니다.');
    openModal('delete');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ListSection>
      {categoryTags.map((category) => (
        <TagButton
          key={category.id}
          onClick={() => handleCategoryClick(category)}
        >
          {category.type}
        </TagButton>
      ))}

      <input
        className="list__search"
        type="text"
        placeholder="상품명 및 제조사 검색"
        value={searchdate}
        onChange={(e) => setSearchData(e.target.value)}
      />
      {filteredProducts.map((product) => (
        <div key={product.productId} className="List__container">
          <div className="List__container--content">
            <TagButton>{product.brand}</TagButton>
            <p>{product.tag}</p>
          </div>
          <img
            src={product.imgSrc}
            alt={product.name}
            className="List__container--img"
          />
          <div className="List__container--info">
            <h3 className="bold">{product.name}</h3>
            <p>{product.price}</p>
          </div>
          <div className="button__container--edit">
            <EditButton>수정</EditButton>
          </div>
        </div>
      ))}
      <div>
        <div className="button__container">
          <Button className="bold" $cancel={true} onClick={openDeleteModal}>
            삭제
          </Button>
          <Button className="bold" type="submit" onClick={handleRegister}>
            저장
          </Button>
        </div>
        {isModalOpen && (
          <AdminModal modalType={modalType} onClose={closeModal} />
        )}
      </div>
    </ListSection>
  );
}

export default ProductList;
