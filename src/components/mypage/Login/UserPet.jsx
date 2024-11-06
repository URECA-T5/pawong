import React from 'react';
import styled from 'styled-components';
import { PetHeader } from '../../../style/myPage/default';
import {
  UserPetBody,
  PetContainer,
  PetImage,
  PetInfo,
} from '../../../style/myPage/userpet';

const samplePets = [
  {
    image: 'https://via.placeholder.com/100',
    name: '사랑',
    type: '말티즈',
  },
  {
    image: 'https://via.placeholder.com/100',
    name: '행복',
    type: '푸들',
  },
  {
    image: 'https://via.placeholder.com/100',
    name: '희망',
    type: '코카스파니엘',
  },
];

function UserPet() {
  return (
    <>
      <PetHeader>
        <div className="pet__header">
          <p className="regular">현재 임보 중인 동물들</p>
          <button className="edit__btn">편집</button>
        </div>
      </PetHeader>
      <UserPetBody>
        {samplePets.map((pet, index) => (
          <PetContainer key={index}>
            <PetImage src={pet.image} alt={`${pet.name} 프로필`} />
            <PetInfo>
              <p className="pet__name regular">{pet.name}</p>
              <span className="pet__type regular">{pet.type}</span>
            </PetInfo>
          </PetContainer>
        ))}
      </UserPetBody>
    </>
  );
}

export default UserPet;
