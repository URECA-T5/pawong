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
import Loading from '../../../components/common/Loading';

const formUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSfyWoEmCvVTLELwjCP5BTM_r5VX9Qcc7ZngjeVKACnQ2SJRRw/viewform';

function CareDiaryFeed() {
  const navigate = useNavigate();
  const { favPets, fetchFavPets } = userFavorite();
  const [isStarClicked, setIsStarClicked] = useState(false);
  const { data, loadData } = diaryFeed();
  const params = useParams();
  const petId = useRef(params.pet_id);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setIsLoading(true);
        await Promise.all([fetchFavPets(), loadData(petId.current)]);
      } catch (error) {
        console.error('데이터 로딩 중 오류 발생:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadInitialData();
  }, [fetchFavPets, loadData]);

  useEffect(() => {
    if (favPets.some((favPet) => favPet.id === petId.current)) {
      setIsStarClicked(true);
    }
  }, [favPets]);

  const handleBookMarkClick = async () => {
    try {
      setIsStarClicked(!isStarClicked);
      await toggleFavorite(petId.current);
    } catch (error) {
      console.error(
        '북마크 추가/삭제 오류:',
        error.response ? error.response.data : error.message,
      );
      setIsStarClicked(isStarClicked);
    }
  };

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

  if (isLoading || !data || !data.pet) {
    return (
      <MainContainer>
        <Loading />
      </MainContainer>
    );
  }

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <CareStoryHeader>
          {!data.isUserPet && (
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
              src={`${serverBaseUrl}/${data.pet.profileImage}`}
              alt="dog_profile_img"
            />
            <div>
              <h1>{data.pet.name}</h1>
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
                          ? data.pet[key]
                            ? '했어요'
                            : '안 했어요'
                          : key === 'vaccinations'
                            ? data.pet[key] && data.pet[key].length > 0
                              ? data.pet[key].join(', ')
                              : '등록된 백신이 없습니다.'
                            : key === 'weight'
                              ? ` ${data.pet[key]}kg`
                              : key === 'age'
                                ? ` ${data.pet[key]}살`
                                : data.pet[key]}{' '}
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
                <span>- {data.pet.info}</span>
              </div>
            </div>
          </div>
        </StorySection>
        {data.isUserPet ? (
          <AuthorBtn onNavigate={navigate} />
        ) : (
          <DefaultBtn formUrl={formUrl} onNavigate={navigate} />
        )}
        <FeedIcon>
          <img src="/asset/diary/story/feedIcon.svg" alt="feed_icon"></img>
        </FeedIcon>
        <ImgSection>
          {data.pet.fosterDiaries && data.pet.fosterDiaries.length > 0 ? (
            data.pet.fosterDiaries.map(
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
