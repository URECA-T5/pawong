import React from 'react';
import { PetHeader, PetBody } from '../../style/myPage/default';
import FavPet from '../../asset/mypage/favPet.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function DefaultFav() {
  return (
    <>
      <PetHeader>
        <div className="pet__header">
          <p className="regular">즐겨찾기</p>
        </div>
      </PetHeader>
      <PetBody>
        <div className="body__left">
          <img src={FavPet} alt="임보 동물 이미지"></img>
        </div>
        <div className="body__right">
          <p>등록해주세요 </p>
          <Link to="/care-list">
            <FontAwesomeIcon icon={faPlus} className="right__plus" />
          </Link>
        </div>
      </PetBody>
    </>
  );
}

export default DefaultFav;
