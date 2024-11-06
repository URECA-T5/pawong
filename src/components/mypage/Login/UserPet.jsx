import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PetHeader } from '../../../style/myPage/default';
import {
  UserPetBody,
  PetContainer,
  PetImage,
  PetInfo,
} from '../../../style/myPage/userpet';
import { getCareInfo } from '../../../api/pet/care/list/list';
import serverBaseUrl from '../../../config/serverConfig';
function UserPet() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      const petData = await getCareInfo();
      if (petData) {
        setPets(petData);
      }
    };

    fetchPets();
  }, []);

  return (
    <>
      <PetHeader>
        <div className="pet__header">
          <p className="regular">현재 임보 중인 동물들</p>
          <button className="edit__btn">편집</button>
        </div>
      </PetHeader>
      <UserPetBody>
        {pets.map((pet, index) => (
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
        ))}
      </UserPetBody>
    </>
  );
}

export default UserPet;
