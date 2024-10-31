import GlobalStyle, { MainContainer } from '../../style/global/global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import {
  Header,
  TagButton,
  Section,
  Button,
  OtherBoard,
} from '../../style/careDiary/personalDiary';
const PersonalDiary = () => {
  const navigate = useNavigate();

  function getCurrentTime() {
    const now = new Date();
    return `${String(now.getFullYear()).slice(-2)}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}.${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
  }

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
            <TagButton>일상</TagButton>
            <h3 className="bold">근처 공원에 산책 다녀왔어요</h3>
          </div>
          <div className="board__profile">
            <img src="/asset/diary/profileImg.svg" alt="profile" />
            <div>
              <div className="board__profile--user">
                <p style={{ fontSize: '1.1rem' }}>구름이형</p>
                <img
                  src="/asset/diary/certificationBadge.svg"
                  alt="certification_badge"
                ></img>
              </div>
              <p>올림픽공원</p>
            </div>
          </div>
          <img
            className="board__img"
            src="/asset/diary/dogImg.svg"
            alt="dog_img"
          ></img>
          <div className="board_text">
            <p>
              생각없이 걷기 좋더라구요. 공원이 커서 넉넉히 시간 잡아야해요.
              댕댕이 아가들이 많아서 그런가 평소보다 포동이가 신나했어요. 꼬리가
              쉬지 않아서ㅋㅋㅋ날아가는 줄 알았네요. 반려견 동반으로 오기 너무
              좋았고, 산책하기도 너무 좋더라구요.
            </p>
            {getCurrentTime()}
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

export default PersonalDiary;
