import GlobalStyle, { Content, MainContainer } from '../style/global/global';
import { useNavigate } from 'react-router-dom';
import {
  MainBtnDiv,
  MainDiaryDiv,
  MainHeader,
  MainNoticeDiv,
  MainSenseDiv,
  MainSlideImage,
  MainSliderContainer,
} from '../style/main/main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useState } from 'react';

import Footer from '../components/main/Footer';
import MainAccordion from '../components/main/MainAccordion';
import Nav from '../components/common/Nav';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
  const navigate = useNavigate();
  const [sectionHeight, setSectionHeight] = useState(280);
  const handleClick = (path) => {
    navigate(path);
  };

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <MainHeader className="extraBold">
          <a href="/">포옹</a>
          <FontAwesomeIcon
            style={{ cursor: 'pointer' }}
            onClick={() => handleClick('/login')}
            icon={faCircleUser}
          />
        </MainHeader>
        <MainSliderContainer>
          <Slider {...settings}>
            <div>
              <MainSlideImage
                onClick={() => handleClick('/doglist')}
                src={'/asset/main/carousel1.svg'}
                alt="1"
              />
            </div>
            <div>
              <MainSlideImage src={'/asset/main/carousel2.svg'} alt="1" />
            </div>
          </Slider>
        </MainSliderContainer>
        <Content className="regular">
          <MainBtnDiv>
            <div>
              <button onClick={() => handleClick('/dog')}>
                <img src={'/asset/main/doglist.svg'} alt="임보강아지 목록" />
                <span className="regular">임보강아지 목록</span>
              </button>
              <button onClick={() => handleClick('/diary/upload')}>
                <img src={'/asset/main/diaryupload.svg'} alt="임보일지 작성" />
                <span className="regular">임보일지 작성</span>
              </button>
              <button onClick={() => handleClick('/favorites')}>
                <img src={'/asset/main/favorites.svg'} alt="즐겨찾기" />
                <span className="regular">즐겨찾기</span>
              </button>
              <button onClick={() => handleClick('/notice')}>
                <img src={'/asset/main/notice.svg'} alt="공지사항" />
                <span className="regular">공지사항</span>
              </button>
            </div>
          </MainBtnDiv>
          <img
            style={{
              width: '100%',
              height: '100px',
              borderRadius: '16px',
              marginBottom: '1rem',
            }}
            src={'/asset/main/banner1.svg'}
            alt="포옹에서 확인해드려요"
          />
          <MainSenseDiv height={sectionHeight}>
            <h4 className="bold">
              임보 생활에 도움이 되는 포옹 <span>상식</span>
            </h4>
            <MainAccordion setSectionHeight={setSectionHeight} />
          </MainSenseDiv>
          <MainDiaryDiv>
            <h4 className="bold">
              와글와글 <span>임보일지</span>
            </h4>
            <ul>
              <li>
                <button className="regular">#일상</button>
                <a className="regular" href="/">
                  날씨가 너무 좋네요
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <button className="regular">#모임</button>
                <a className="regular" href="/">
                  강아지 숲에서 대형견 모임을 진행했어요
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <button className="regular">#오산완</button>
                <a className="regular" href="/">
                  오늘 오전 산책 무사히 끝냄~!
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <button className="regular">#먹방</button>
                <a className="regular" href="/">
                  사료를 바꿨더니 몸무게가 1kg나 쪘어요...
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <button className="regular">#미용</button>
                <a className="regular" href="/">
                  오랜만에 곰돌이 재등장
                </a>
              </li>
            </ul>
            <button
              className="moveBtn regular"
              onClick={() => handleClick('/doglist')}
            >
              <span>임보일지 더 보기</span>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </MainDiaryDiv>
          <img
            style={{
              width: '100%',
              height: '160px',
              borderRadius: '16px',
            }}
            src={'/asset/main/banner2.svg'}
            alt="Pawyong"
          />
          <MainNoticeDiv>
            <h4>포옹 소식</h4>
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
                <span className="regular">포옹 배송 안내</span>
              </li>
            </ul>
            <img src={'/asset/notice/dogIcon.png'} alt="포옹소식" />
          </MainNoticeDiv>
        </Content>
        <Footer />
        <Nav />
      </MainContainer>
    </>
  );
};

export default Main;
