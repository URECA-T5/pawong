import React from 'react';
import styled from 'styled-components';
import { PetHeader } from '../../../style/myPage/default';
import {
  UserPetBody,
  PetContainer,
  PetImage,
  PetInfo,
} from '../../../style/myPage/userpet';

const sampleFavPets = [
  {
    image: 'https://via.placeholder.com/100',
    name: '포옹이',
    type: '믹스견',
  },
  {
    image: 'https://via.placeholder.com/100',
    name: '몽이',
    type: '비숑',
  },
  {
    image: 'https://via.placeholder.com/100',
    name: '자두',
    type: '요크셔테리어',
  },
  {
    image: 'https://via.placeholder.com/100',
    name: '자두',
    type: '요크셔테리어',
  },
  {
    image: 'https://via.placeholder.com/100',
    name: '자두',
    type: '요크셔테리어',
  },
  {
    image: 'https://via.placeholder.com/100',
    name: '자두',
    type: '요크셔테리어',
  },
  {
    image: 'https://via.placeholder.com/100',
    name: '자두',
    type: '요크셔테리어',
  },
  {
    image: 'https://via.placeholder.com/100',
    name: '자두',
    type: '요크셔테리어',
  },
];

function UserFavPet() {
  return (
    <>
      <PetHeader>
        <div className="pet__header">
          <p className="regular">즐겨찾기</p>
          <button className="edit__btn">편집</button>
        </div>
      </PetHeader>
      <UserPetBody>
        {sampleFavPets.map((pet, index) => (
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

export default UserFavPet;
