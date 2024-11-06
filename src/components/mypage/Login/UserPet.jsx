import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PetHeader } from '../../../style/myPage/default';
import {
  UserPetBody,
  PetContainer,
  PetImage,
  PetInfo,
} from '../../../style/myPage/userpet';
import serverBaseUrl from '../../../config/serverConfig';
import userPet from '../../../stores/mypage/userPet';

function UserPet() {
  const { pets, fetchPets } = userPet();

  useEffect(() => {
    fetchPets();
  }, [fetchPets]);

  return (
    <>
      <PetHeader>
        <div className="pet__header">
          <p className="regular">현재 임보 중인 동물들</p>
          <button className="edit__btn">편집</button>
        </div>
      </PetHeader>
      <UserPetBody>
        {pets && pets.length > 0 ? (
          pets.map((pet, index) => (
            <PetContainer key={index}>
              <PetImage
                src={`${serverBaseUrl}/${pet.profileImage}`}
                alt={`${pet.name} 프로필`}
              />
              <PetInfo>
                <p className="pet__name regular">{pet.name}</p>
                <span className="pet__type regular">{pet.species}</span>
              </PetInfo>
            </PetContainer>
          ))
        ) : (
          <p>현재 임보 중인 동물이 없습니다.</p>
        )}
      </UserPetBody>
    </>
  );
}

export default UserPet;
