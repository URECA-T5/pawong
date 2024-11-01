import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faHouse } from '@fortawesome/free-solid-svg-icons';
import GlobalStyle, { MainContainer } from '../../style/global/global';
import FosterHistoryNull from '../../components/history/FosterHistoryNull';
import {
  FHCardDiv,
  FHHeader,
  FHSection,
} from '../../style/history/fosterHistory';

const FosterHistory = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };

  const dogs = [
    {
      imgSrc: '/asset/history/sample.png',
      alt: '이미지를 사용할 수 없습니다',
      pet_id: '1',
      name: '포동이',
    },
    {
      imgSrc: '/asset/history/sample2.png',
      alt: '이미지를 사용할 수 없습니다',
      pet_id: '2',
      name: '포옹이',
    },
    {
      imgSrc: '/asset/history/sample.png',
      alt: '이미지를 사용할 수 없습니다',
      pet_id: '3',
      name: '사랑이',
    },
    {
      imgSrc: '/asset/history/sample2.png',
      alt: '이미지를 사용할 수 없습니다',
      pet_id: '4',
      name: '하늘이',
    },
  ];

  return (
    <>
      <GlobalStyle />
      <MainContainer style={{ backgroundColor: 'white' }}>
        <FHHeader className="extraBold">
          <FontAwesomeIcon
            className="fosterHistory__style"
            onClick={() => handleClick('/mypage')}
            icon={faAngleLeft}
          />
          <div className="header__title">
            <p className="extraBold">임보 기록</p>
          </div>
          <FontAwesomeIcon
            className="fosterHistory__style"
            onClick={() => handleClick('/')}
            icon={faHouse}
          />
        </FHHeader>
        {dogs.length > 0 ? (
          <>
            <FHSection>
              <img src={'/asset/history/foster.svg'} alt="임보기록" />
              <div className="bold FH__div">
                <p>소중한 추억을 확인해보세요</p>
              </div>
            </FHSection>
            <FHCardDiv>
              <section className="FH__CardSection">
                {dogs.map((dog) => (
                  <button className="FH__card" key={dog.pet_id}>
                    <img src={dog.imgSrc} alt={dog.alt} />
                    <p>{dog.name}</p>
                  </button>
                ))}
              </section>
            </FHCardDiv>
          </>
        ) : (
          <FosterHistoryNull />
        )}
      </MainContainer>
    </>
  );
};

export default FosterHistory;
