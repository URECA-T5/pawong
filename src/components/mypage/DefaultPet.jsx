import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import MyPet from '../../asset/mypage/myPet.svg';
import { PetHeader, PetBody } from '../../style/myPage/default';
import { Link } from 'react-router-dom';

function DefaultPet() {
  return (
    <>
      <PetHeader>
        <div className="pet__header">
          <p className="regular">현재 임보 중인 동물들</p>
        </div>
      </PetHeader>
      <PetBody>
        <div className="body__left">
          <img src={MyPet} alt="임보 동물 이미지" />
        </div>
        <div className="body__right">
          <p>등록해주세요 </p>
          <Link to="/pet-upload">
            {' '}
            <FontAwesomeIcon icon={faPlus} className="right__plus" />
          </Link>
        </div>
      </PetBody>
    </>
  );
}

export default DefaultPet;
