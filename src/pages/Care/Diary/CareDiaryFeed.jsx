import React, { useState } from 'react';
import GlobalStyle, { MainContainer } from '../../../style/global/global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import AuthorBtn from '../../../components/care/diary/DiaryFeedAuthorBtn';
import {
  CareStoryHeader,
  ProfileSection,
  StorySection,
  ImgSection,
} from '../../../style/care/diary/careDiaryFeed';
import DefaultBtn from '../../../components/care/diary/DiaryFeedDefaultBtn';

//임보/입양문의 form
const formUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSfyWoEmCvVTLELwjCP5BTM_r5VX9Qcc7ZngjeVKACnQ2SJRRw/viewform';

function CareStory() {
  const navigate = useNavigate();

  const [isStarClicked, setIsStarClicked] = useState(false);
  const [showAuthorBtn, setShowAuthorBtn] = useState(false);

  const handleBookMarkClick = () => {
    setIsStarClicked(!isStarClicked);
  };

  const registeredInfo = {
    name: '이름',
    breed: '품종',
    neutered: '중성화여부',
    vaccine: '접종백신',
    area: '구조지역',
    birthDate: '출생시기',
    weight: '몸무게',
    story: '이야기',
  };

  const infoValue = {
    name: '포동이',
    breed: '웰시코기',
    neutered: 'X',
    vaccine: '종합백신(DHPPI)',
    area: '서울시 서대문구 신촌역 인근',
    birthDate: '약 9개월',
    weight: '3kg',
    story:
      '- 사람을 너무너무 좋아하고 순함\n - 임보 3일차 / 배변패드에 배변 100% \n - 간식을 좋아해서 훈련이 쉽습니다. 앉아 교육완료!! \n - 목욕시 얌전하게 가만히 앉아있음 \n - 짖지않고 조용함, 잠을 많이 잡니다. 앉아있으면 사람무릎위에 올라옵니다. \n - 무릎에서 자는것을 좋아합니다. ',
  };

  const careImg = [
    {
      id: 1,
      imgSrc: '/asset/diary/story/storyDogImg1.svg',
      alt: '등록된 이미지가 없습니다.(Image not available)',
      path: '/personal-diary',
    },
    {
      id: 2,
      imgSrc: '/asset/diary/story/storyDogImg2.svg',
      alt: '등록된 이미지가 없습니다.(Image not available)',
      path: '/personal-diary',
    },
    {
      id: 3,
      imgSrc: '/asset/diary/story/storyDogImg3.svg',
      alt: '등록된 이미지가 없습니다.(Image not available)',
      path: '/personal-diary',
    },
    {
      id: 4,
      imgSrc: '/asset/diary/story/storyDogImg3.svg',
      alt: '등록된 이미지가 없습니다.(Image not available)',
      path: '/personal-diary',
    },
    {
      id: 5,
      imgSrc: '/asset/diary/story/storyDogImg3.svg',
      alt: '등록된 이미지가 없습니다.(Image not available)',
      path: '/personal-diary',
    },
    {
      id: 6,
      imgSrc: '/asset/diary/story/storyDogImg3.svg',
      alt: '등록된 이미지가 없습니다.(Image not available)',
      path: '/personal-diary',
    },
  ];

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <CareStoryHeader>
          {showAuthorBtn ? (
            <div></div>
          ) : (
            <button className="header__starBtn" onClick={handleBookMarkClick}>
              <img
                src={
                  isStarClicked
                    ? '/asset/diary/story/star.svg'
                    : '/asset/diary/story/empty_star.svg'
                }
                alt="star_img"
              />
            </button>
          )}
          <p className="extraBold">임보스토리</p>
          <FontAwesomeIcon
            icon={faHouse}
            className="header__homeIcon"
            onClick={() => navigate('/')}
          />
        </CareStoryHeader>
        <ProfileSection>
          <div className="profile__dog">
            <img
              className="profile__dog--img"
              src="/asset/diary/story/dogProfileImg.svg"
              alt="dog_profile_img"
            ></img>
            <div>
              <h1>{infoValue.name}</h1>
              <div className="profile__dog--info">
                {Object.entries(infoValue).map(
                  ([key, value]) =>
                    key !== 'name' &&
                    key !== 'story' && (
                      <p key={key}>
                        {registeredInfo[key]}:
                        <span className="profile__dog--info--value">
                          {value}
                        </span>
                      </p>
                    ),
                )}
              </div>
            </div>
          </div>
        </ProfileSection>
        <StorySection>
          <div>
            {registeredInfo.story}
            {infoValue.story.split('\n').map((story, index) => (
              <div key={index} className="profile__dog--info--story">
                <span className="profile__dog--info--value">{story}</span>
              </div>
            ))}
          </div>
        </StorySection>
        {!showAuthorBtn ? (
          <DefaultBtn formUrl={formUrl} onNavigate={navigate} />
        ) : (
          <AuthorBtn onNavigate={navigate} />
        )}
        <ImgSection>
          {careImg.map(({ id, imgSrc, alt, path }) => (
            <button
              className="stroy__imgBtn"
              key={id}
              onClick={() => navigate(path)}
            >
              <img className="stroy__imgBtn--img" src={imgSrc} alt={alt} />
            </button>
          ))}
        </ImgSection>
      </MainContainer>
    </>
  );
}

export default CareStory;
