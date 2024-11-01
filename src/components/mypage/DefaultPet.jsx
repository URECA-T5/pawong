import React from 'react';
import styled from 'styled-components';
import FavPet from '../../asset/mypage/favPet.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { color } from 'framer-motion';
import MyPet from '../../asset/mypage/myPet.svg';
import { PetHeader, PetBody } from '../../style/myPage/default';

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
          <img src={MyPet} alt="임보 동물 이미지"></img>
        </div>
        <div className="body__right">
          <p>등록해주세요 </p>
          <FontAwesomeIcon icon={faPlus} className="right__plus" />
        </div>
      </PetBody>
    </>
  );
}

export default DefaultPet;
