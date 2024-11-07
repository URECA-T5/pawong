import GlobalStyle, { MainContainer } from '../style/global/global';
import { useNavigate } from 'react-router-dom';
import {
  MainBadgeImg,
  MainBtnDiv,
  MainDiaryDiv,
  MainHeader,
  MainNoticeDiv,
  MainPawongImg,
  MainSection,
  MainSenseDiv,
  MainSlideImage,
  MainSliderContainer,
} from '../style/main/main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import Footer from '../components/main/Footer';
import MainAccordion from '../components/main/MainAccordion';
import Nav from '../components/common/Nav';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import useUserProfile from '../stores/auth/useUserProfile';
import serverBaseUrl from '../config/serverConfig';
import { getDiaryALL } from '../api/diary/listAll';

const DEFAULT_PROFILE_IMAGE = '/asset/default-profile.png';
const getProfileImageUrl = (profileImage) => {
  if (!profileImage) return DEFAULT_PROFILE_IMAGE;

  const isFullUrl = profileImage.startsWith('http');
  if (isFullUrl) return profileImage;
  console.log(profileImage);

  return `${serverBaseUrl}/${profileImage}`;
};

export const getRecentList = (data) => {
  return data.reduce((acc, item) => {
    const { tag, date } = item;
    if (!acc[tag] || new Date(date) > new Date(acc[tag].date)) {
      acc[tag] = item;
    }
    return acc;
  }, {});
};

const Main = () => {
  const navigate = useNavigate();
  const [sectionHeight, setSectionHeight] = useState(17.5);
  const handleClick = (path) => navigate(path);
  const { user } = useUserProfile();

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const [diaryData, setDiaryData] = useState([]);
  const [recentList, setRecentList] = useState({});

  const fetchDiaryData = async () => {
    try {
      const response = await getDiaryALL();
      const data = response.data;
      setDiaryData(data);
      setRecentList(getRecentList(data));
    } catch (error) {
      console.error('Failed to fetch diary data:', error);
    }
  };

  useEffect(() => {
    fetchDiaryData();
  }, []);

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <MainHeader>
          <p className="extraBold">
            <a href="/">포옹</a>
          </p>
          <p>
            {user?.nickName ? (
              <button
                type="button"
                onClick={() => handleClick('/mypage')}
                className="header__userProfile"
                aria-label={`${user.nickName}의 프로필`}
              >
                <img
                  src={getProfileImageUrl(user.profileImage)}
                  alt={`${user.nickName}의 프로필`}
                  className="header__userProfile"
                />
              </button>
            ) : (
              <FontAwesomeIcon
                icon={faCircleUser}
                onClick={() => handleClick('/login')}
              />
            )}
          </p>
        </MainHeader>
        <MainSliderContainer>
          <Slider {...settings}>
            <div>
              <MainSlideImage src={'/asset/main/carousel.jpg'} alt="1" />
            </div>
            <div>
              <MainSlideImage
                onClick={() => handleClick('/diary-feed')}
                src={'/asset/main/carousel1.svg'}
                alt="1"
              />
            </div>
            <div>
              <MainSlideImage
                onClick={() => handleClick('/care-list')}
                src={'/asset/main/carousel2.svg'}
                alt="1"
              />
            </div>
          </Slider>
        </MainSliderContainer>
        <MainSection className="regular">
          <MainBtnDiv>
            <div>
              <button onClick={() => handleClick('/care-list')}>
                <img
                  src={'/asset/main/doglist.svg'}
                  alt="임보동물 목록아이콘"
                />
                <span className="regular">임보동물 목록</span>
              </button>
              <button onClick={() => handleClick('/diary-upload')}>
                <img
                  src={'/asset/main/diaryupload.svg'}
                  alt="임보일지작성아이콘"
                />
                <span className="regular">임보일지 작성</span>
              </button>
              <button onClick={() => handleClick('/mypage')}>
                <img src={'/asset/main/favorites.svg'} alt="즐겨찾기아이콘" />
                <span className="regular">즐겨찾기</span>
              </button>
              <button onClick={() => handleClick('/notice')}>
                <img src={'/asset/main/notice.svg'} alt="공지사항아이콘" />
                <span className="regular">공지사항</span>
              </button>
            </div>
          </MainBtnDiv>
          <MainBadgeImg
            src={'/asset/main/banner1.svg'}
            alt="포옹에서 확인해드려요"
          />
          <MainSenseDiv height={sectionHeight}>
            <h4 className="bold">
              임보 생활에 도움이 되는 포옹 <span>조언</span>
            </h4>
            <MainAccordion setSectionHeight={setSectionHeight} />
          </MainSenseDiv>
          <MainDiaryDiv>
            <h4 className="bold">
              와글와글 <span>임보일지</span>
            </h4>
            {Object.values(recentList).map((data) => (
              <ul key={data.id}>
                <li>
                  <button className="regular">{data.tag}</button>
                  <a className="regular" href={`/diary-detail/${data.id}`}>
                    {data.title}
                  </a>
                </li>
              </ul>
            ))}
            <button
              className="main__moveDiaryBtn regular"
              onClick={() => handleClick('/diary-list')}
            >
              <span>임보일지 모아보기 </span>
              <span>
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </button>
          </MainDiaryDiv>
          <MainPawongImg src={'/asset/main/banner2.svg'} alt="Pawyong" />
          <MainNoticeDiv>
            <h4>
              포옹 <span className="main__noticeTitle">소식</span>
            </h4>
            <ul>
              <li>
                <button className="bold">1</button>
                <a className="regular" href="/notice">
                  자주 묻는 질문
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <button className="bold">2</button>
                <span className="regular">포옹 서비스 점검 안내</span>
              </li>
            </ul>
            <ul>
              <li>
                <button className="bold">3</button>
                <span className="regular">포옹 서비스 배송 안내</span>
              </li>
            </ul>
            <img src={'/asset/main/dogIcon.png'} alt="포옹소식" />
          </MainNoticeDiv>
          <Footer />
          <Nav />
        </MainSection>
      </MainContainer>
    </>
  );
};

export default Main;
