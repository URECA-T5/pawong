import React, { useEffect, useState } from 'react';
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
import userPet from '../../stores/mypage/userPet';
import serverBaseUrl from '../../config/serverConfig';

const FosterHistory = () => {
  const navigate = useNavigate();
  const { pets, fetchPets } = userPet();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchPets();
      } catch (error) {
        setError('임보 기록을 불러오는 데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [fetchPets]);

  const handleClick = (path) => {
    navigate(path);
  };

  const handleCardClick = (petId) => {
    // petId를 사용하여 동적으로 경로를 생성
    navigate(`/diary-feed/${petId}`);
  };

  if (loading) {
    return <p>로딩 중...</p>;
  }

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
        {error ? (
          <p>{error}</p>
        ) : pets.length > 0 ? (
          <>
            <FHSection>
              <img src={'/asset/history/foster.svg'} alt="임보기록" />
              <div className="bold fosterHistory__div">
                <p>소중한 추억을 확인해보세요</p>
              </div>
            </FHSection>
            <FHCardDiv>
              <section className="fosterHistory__CardSection">
                {pets.map((pet) => (
                  <button
                    className="fosterHistory__card"
                    key={pet.id}
                    onClick={() => handleCardClick(pet.id)}
                  >
                    <img
                      src={`${serverBaseUrl}/${pet.profileImage}`}
                      alt={pet.name}
                    />
                    <p>{pet.name}</p>
                    <p>{pet.breed}</p>
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
