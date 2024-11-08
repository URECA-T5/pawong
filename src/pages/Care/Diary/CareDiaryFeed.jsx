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
  FeedIcon,
} from '../../../style/care/diary/careDiaryFeed';
import DefaultBtn from '../../../components/care/diary/DiaryFeedDefaultBtn';
import { diaryFeed } from '../../../stores/diaryFeedStore';
import serverBaseUrl from '../../../config/serverConfig';
import { toggleFavorite } from '../../../api/pet/care/favorites/petFavorite';
import userFavorite from '../../../stores/mypage/userFavorite';
const formUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSfyWoEmCvVTLELwjCP5BTM_r5VX9Qcc7ZngjeVKACnQ2SJRRw/viewform';

function CareDiaryFeed() {
  const navigate = useNavigate();
  const { favPets, fetchFavPets } = userFavorite();

  const [isStarClicked, setIsStarClicked] = useState(false);
  const [showAuthorBtn, setShowAuthorBtn] = useState(false);
  const { data, loadData } = diaryFeed();
  const isLoadData = useRef(true);
  const params = useParams();
  const petId = useRef(params.pet_id);

  useEffect(() => {
    fetchFavPets();
  }, [fetchFavPets]);

  useEffect(() => {
    if (favPets.some((favPet) => favPet.id === petId.current)) {
      setIsStarClicked(true);
    }
  }, [favPets]);

  const handleBookMarkClick = async () => {
    setIsStarClicked(!isStarClicked);

    try {
      const response = await toggleFavorite(petId.current);
    } catch (error) {
      console.error(
        '북마크 추가/삭제 오류:',
        error.response ? error.response.data : error.message,
      );
    }
  };

  useEffect(() => {
    if (isLoadData.current) {
      isLoadData.current = false;
      loadData(petId.current);
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
                  .filter(
                    (key) =>
                      key !== 'name' && key !== 'info' && key !== 'story',
                  )
                  .map((key) => (
                    <div key={key} className="profile__dog--info__item">
                      <span className="profile__dog--info--key">
                        {registeredInfo[key]} :
                      </span>
                      <span className="profile__dog--info--value">
                        {key === 'isNeutered'
                          ? data[key]
                            ? '했어요'
                            : '안 했어요'
                          : key === 'vaccinations'
                            ? data[key] && data[key].length > 0
                              ? data[key].join(', ')
                              : '등록된 백신이 없습니다.'
                            : data[key]}
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
        <FeedIcon>
          <img src="/asset/diary/story/feedIcon.svg" alt="feed_icon"></img>
        </FeedIcon>
        <ImgSection>
          {data.fosterDiaries && data.fosterDiaries.length > 0 ? (
            data.fosterDiaries.map(
              (diary) =>
                diary.image && (
                  <button
                    className="story__imgBtn"
                    key={diary.id}
                    onClick={() => navigate(`/diary-detail/${diary.id}`)}
                  >
                    <img
                      className="story__imgBtn--img"
                      src={`${serverBaseUrl}/${diary.image}`}
                      alt={diary.title}
                    />
                  </button>
                ),
            )
          ) : (
            <img
              className="story__imgBtn--img"
              src="/asset/diary/story/storyDogImg2.svg"
              alt="임시보호 목록 이미지"
            />
          )}
        </ImgSection>
      </MainContainer>
    </>
  );
}

export default CareDiaryFeed;
