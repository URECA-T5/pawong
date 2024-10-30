import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faHouse } from '@fortawesome/free-solid-svg-icons';
import GlobalStyle, { MainContainer } from '../../style/global/global';
import FosterRecordNull from '../../components/record/FosterRecordNull';
import {
  FRCardDiv,
  FRHeader,
  FRSection,
} from '../../style/record/fosterRecord';

const FosterRecord = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };

  const dogs = [
    {
      imgSrc: '/asset/record/sample.png',
      alt: '이미지를 사용할 수 없습니다',
      pet_id: '1',
      name: '포동이',
    },
    {
      imgSrc: '/asset/record/sample2.png',
      alt: '이미지를 사용할 수 없습니다',
      pet_id: '2',
      name: '포옹이',
    },
    {
      imgSrc: '/asset/record/sample.png',
      alt: '이미지를 사용할 수 없습니다',
      pet_id: '3',
      name: '사랑이',
    },
    {
      imgSrc: '/asset/record/sample2.png',
      alt: '이미지를 사용할 수 없습니다',
      pet_id: '4',
      name: '하늘이',
    },
  ];

  return (
    <>
      <GlobalStyle />
      <MainContainer style={{ backgroundColor: 'white' }}>
        <FRHeader className="extraBold">
          <FontAwesomeIcon
            className="fosterRecord__style"
            onClick={() => handleClick('/mypage')}
            icon={faAngleLeft}
          />
          <div className="header__title">
            <p className="extraBold">임보 기록</p>
          </div>
          <FontAwesomeIcon
            className="fosterRecord__style"
            onClick={() => handleClick('/')}
            icon={faHouse}
          />
        </FRHeader>
        {dogs.length > 0 ? (
          <>
            <FRSection>
              <img src={'/asset/record/foster.svg'} alt="임보기록" />
              <div className="bold FR__div">
                <p>소중한 추억을 확인해보세요</p>
              </div>
            </FRSection>
            <FRCardDiv>
              <section className="FR__CardSection">
                {dogs.map((dog) => (
                  <button className="FR__card" key={dog.pet_id}>
                    <img src={dog.imgSrc} alt={dog.alt} />
                    <p>{dog.name}</p>
                  </button>
                ))}
              </section>
            </FRCardDiv>
          </>
        ) : (
          <FosterRecordNull />
        )}
      </MainContainer>
    </>
  );
};

export default FosterRecord;
