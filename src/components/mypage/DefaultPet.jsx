import React from 'react';
import styled from 'styled-components';
import FavPet from '../../asset/mypage/favPet.svg';
import MyPet from '../../asset/mypage/myPet.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { color } from 'framer-motion';

const PetHeader = styled.header`
  .pet__header {
    display: flex;
    justify-content: flex-start;
  }
`;
const PetBody = styled.main`
  display: flex;
  flex-direction: row;
  .body__left {
    width: 50%;
    margin-top: 1rem;
  }
  .body__right {
    margin-top: 1rem;
    margin-left: 7rem;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
  .body__right p {
    font-size: 1.1rem;
    color: #6d6e71;
  }

  .right__plus {
    width: 1rem;
    height: 1rem;
    color: #6d6e71;
    cursor: pointer;
  }
  .right__plus:hover {
    color: #5850fe;
  }
`;

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
