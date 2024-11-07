import GlobalStyle, { MainContainer } from '../../../style/global/global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { diaryDetail } from '../../../stores/diaryDetailStore';
import {
  Header,
  TagButton,
  Section,
  Button,
  OtherBoard,
} from '../../../style/care/diary/careDiaryDetail';
import serverBaseUrl from '../../../config/serverConfig';

const CareDiaryDetail = () => {
  const navigate = useNavigate();
  const { data, loadData } = diaryDetail();
  const isLoadData = useRef(true);
  const params = useParams();
  const fosterDiaryId = useRef(params.fosterDiaryId);

  useEffect(() => {
    if (isLoadData.current) {
      isLoadData.current = false;
      loadData(fosterDiaryId.current);
    }
  }, [data]);

  const formatDate = (date) => {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };
    return new Date(date).toLocaleString('ko-KR', options);
  };
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Header>
          <FontAwesomeIcon icon={faChevronLeft} className="header__icon" />
          <p className="extraBold">임보일지</p>
          <FontAwesomeIcon
            icon={faHouse}
            className="header__icon"
            onClick={() => navigate('/')}
          />
        </Header>
        <Section>
          <div className="board__title">
            <TagButton>{data.tag}</TagButton>
            <h3 className="bold">{data.title}</h3>
          </div>
          <div className="board__profile">
            <img
              className="board__profile--user--img"
              src="/asset/diary/profileImg.svg"
              alt="profile"
            />
            <div>
              <div className="board__profile--user">
                <p style={{ fontSize: '1.1rem' }}>구름이형</p>
                <img
                  src="/asset/diary/certificationBadge.svg"
                  alt="certification_badge"
                ></img>
              </div>
              <p>{data.place}</p>
            </div>
          </div>
          <img
            className="board__img"
            src={`${serverBaseUrl}/${data.image}`}
            alt="dog_img"
          ></img>
          <div className="board_text">
            <p>{data.content}</p>
            {formatDate(data.createdAt)}
            <div className="board_button">
              <Button>편집</Button>
              <Button>삭제</Button>
            </div>
          </div>
        </Section>
        <Section style={{ marginBottom: '0' }}>
          <h3 className="bold">
            <span>다른게시글</span>도 이어보세요
          </h3>
          <OtherBoard>
            <div className="otherBoard__content">
              <img
                className="otherBoard__content--img"
                src="/asset/diary/dogImg2.svg"
                alt="dog_img"
              ></img>
              <div className="otherBoard__content--text">
                <TagButton>오산완</TagButton>
                <p>역시코박이 좋아!</p>
              </div>
            </div>
            <div className="otherBoard__content">
              <img
                className="otherBoard__content--img"
                src="/asset/diary/dogImg3.svg"
                alt="dog_img"
              ></img>
              <div className="otherBoard__content--text">
                <TagButton>모임</TagButton>
                <p>오랜만에 가족모임!</p>
              </div>
            </div>
          </OtherBoard>
        </Section>
      </MainContainer>
    </>
  );
};

export default CareDiaryDetail;
