import React from 'react';
import { PetHeader, HistoryBody } from '../../style/myPage/default';
import FeedImg from '../../asset/mypage/historyFeed.svg';
import PetImg from '../../asset/mypage/historyPet.svg';
import { Link } from 'react-router-dom';

function UserHistory() {
  return (
    <>
      <PetHeader>
        <div className="pet__header">
          <p className="regular">포옹 기록</p>
        </div>
      </PetHeader>
      <HistoryBody>
        <div className="history__list">
          <img src={FeedImg} alt="후원 기록 이미지"></img>
          <Link to="/donation-history">
            <span className="regular">후원 기록</span>
          </Link>
        </div>
        <div className="history__list">
          <img src={PetImg} alt="후원 기록 이미지"></img>
          <Link to="/foster-history">
            <span className="regular">임보 기록</span>
          </Link>
        </div>
      </HistoryBody>
    </>
  );
}

export default UserHistory;