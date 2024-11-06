import React, { useState, useRef, useEffect } from 'react';
import GlobalStyle, { MainContainer } from '../../../style/global/global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import AuthorBtn from '../../../components/care/diary/DiaryFeedAuthorBtn';
import {
  CareStoryHeader,
  ProfileSection,
  StorySection,
  ImgSection,
} from '../../../style/care/diary/careDiaryFeed';
import DefaultBtn from '../../../components/care/diary/DiaryFeedDefaultBtn';
import { diaryFeed } from '../../../stores/diaryFeedStore';
import serverBaseUrl from '../../../config/serverConfig';

//임보/입양문의 form
const formUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSfyWoEmCvVTLELwjCP5BTM_r5VX9Qcc7ZngjeVKACnQ2SJRRw/viewform';

function CareDiaryFeed() {
  const navigate = useNavigate();

  const [isStarClicked, setIsStarClicked] = useState(false);
  const [showAuthorBtn, setShowAuthorBtn] = useState(false);
  const { data, loadData } = diaryFeed();
  const isLoadData = useRef(true);
  const params = useParams();
  const pet_id = useRef(params.pet_id);

  const handleBookMarkClick = () => {
    setIsStarClicked(!isStarClicked);
  };

  useEffect(() => {
    if (isLoadData.current) {
      isLoadData.current = false;
      console.log(pet_id.current);
      loadData(pet_id.current);
      console.log(data);
    }
  }, [data]);

  const registeredInfo = {
    breed: '품종',
    rescueLocation: '구조지역',
    protectionType: '임보상태',
    gender: '성별',
    isNeutered: '중성화수술',
    vaccinations: '백신',
    age: '나이',
    weight: '몸무게',
    info: '정보',
    story: '이야기',
  };

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
              src={`${serverBaseUrl}/${data.profileImage}`}
              alt="dog_profile_img"
            ></img>

            <div>
              <h1>{data.name}</h1>
              <div className="profile__dog--info">
                {Object.keys(registeredInfo)
                  .filter((key) => key !== 'info' && key !== 'stroy')
                  .map((key) => (
                    <div key={key} className="profile__dog--info__item">
                      <span className="profile__dog--info--key">
                        {registeredInfo[key]} :
                      </span>
                      <span className="profile__dog--info--value">
                        {data[key]}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </ProfileSection>
        <StorySection>
          <div>
            <div className="profile__dog--info--story">
              <p>{registeredInfo.story}</p>
              <div className="profile__dog--info--value">
                <span>- {data.info}</span>
              </div>
            </div>
          </div>
        </StorySection>
        {!showAuthorBtn ? (
          <DefaultBtn formUrl={formUrl} onNavigate={navigate} />
        ) : (
          <AuthorBtn onNavigate={navigate} />
        )}
        <ImgSection>
          {/* {careImg.map(({ id, imgSrc, alt, path }) => (
            <button
              className="stroy__imgBtn"
              key={id}
              onClick={() => navigate(path)}
            >
              <img className="stroy__imgBtn--img" src={imgSrc} alt={alt} />
            </button>
          ))} */}
        </ImgSection>
      </MainContainer>
    </>
  );
}

export default CareDiaryFeed;
