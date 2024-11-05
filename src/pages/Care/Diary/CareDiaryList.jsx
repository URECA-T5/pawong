import React, { useEffect, useState } from 'react';
import GlobalStyle, { MainContainer } from '../../../style/global/global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { DiaryListCotent } from '../../../components/care/diary/DiaryListContent';
import {
  CareDiaryListHeader,
  DiaryListImg,
  DiaryListLine,
} from '../../../style/care/diary/careDiaryList';
import { DiaryListTab } from '../../../components/care/diary/DiaryListTab';
import { diaryListTabStore } from '../../../stores/diaryListStore';
import { dummy_data } from '../../../components/care/diary/dummy_data';
import { useNavigate } from 'react-router-dom';

const categories = [
  { id: '1', name: '전체' },
  { id: '2', name: '오산완' },
  { id: '3', name: '일상' },
  { id: '4', name: '병원' },
  { id: '5', name: '먹방' },
  { id: '6', name: '미용' },
];

const CareDiaryList = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  const [filteredData, setFilteredData] = useState(dummy_data);
  const { selectedCategory } = diaryListTabStore();

  useEffect(() => {
    const filteredData =
      selectedCategory === '전체'
        ? dummy_data
        : dummy_data.filter((item) => item.category === selectedCategory);
    setFilteredData(filteredData);
  }, [selectedCategory]);

  return (
    <>
      <GlobalStyle />
      <MainContainer style={{ backgroundColor: 'white' }}>
        <CareDiaryListHeader>
          <p className="extraBold">
            와글와글<span> 임보일지</span>
          </p>
          <FontAwesomeIcon
            icon={faHouse}
            className="diaryList__icon"
            onClick={() => handleClick('/')}
          />
        </CareDiaryListHeader>
        <DiaryListTab categories={categories} />
        <DiaryListLine />
        <DiaryListCotent data={filteredData} />
        <DiaryListImg>
          <img src="/asset/diary/listPet.png" alt="임시보호 목록 이미지" />
        </DiaryListImg>
      </MainContainer>
    </>
  );
};

export default CareDiaryList;
