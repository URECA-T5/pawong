import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PetHeader, HistoryBody } from '../../style/myPage/default';
import FeedImg from '../../asset/mypage/historyFeed.svg';
import PetImg from '../../asset/mypage/historyPet.svg';

function UserHistory() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleKeyDown = (e, path) => {
    if (e.key === 'Enter' || e.key === ' ') {
      navigate(path);
    }
  };

  return (
    <>
      <PetHeader>
        <div className="pet__header">
          <p className="regular">포옹 기록</p>
        </div>
      </PetHeader>
      <HistoryBody>
        <div
          role="button"
          tabIndex="0"
          onClick={() => handleNavigation('/donation-history')}
          onKeyDown={(e) => handleKeyDown(e, '/donation-history')}
          className="history__list"
        >
          <img src={FeedImg} alt="후원 기록 이미지" />
          <span className="regular">후원 기록</span>
        </div>
        <div
          role="button"
          tabIndex="0"
          onClick={() => handleNavigation('/foster-history')}
          onKeyDown={(e) => handleKeyDown(e, '/foster-history')}
          className="history__list"
        >
          <img src={PetImg} alt="후원 기록 이미지" />
          <span className="regular">임보 기록</span>
        </div>
      </HistoryBody>
    </>
  );
}

export default UserHistory;
