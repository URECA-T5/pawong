import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PetHeader } from '../../../style/myPage/default';
import {
  UserPetBody,
  PetContainer,
  PetImage,
  PetInfo,
} from '../../../style/myPage/userpet';
import userFavorite from '../../../stores/mypage/userFavorite';
import serverBaseUrl from '../../../config/serverConfig';
import { useNavigate } from 'react-router-dom';

function UserFavPet() {
  const { favPets, fetchFavPets } = userFavorite();
  const navigate = useNavigate();

  useEffect(() => {
    fetchFavPets();
  }, [fetchFavPets]);

  const handleNameClick = (petId) => {
    navigate(`/diary-feed/${petId}`);
  };

  return (
    <>
      <PetHeader>
        <div className="pet__header">
          <p className="regular">즐겨찾기</p>
          <button className="edit__btn">편집</button>
        </div>
      </PetHeader>
      <UserPetBody>
        {favPets && favPets.length > 0 ? (
          favPets.map((pet, index) => (
            <PetContainer key={index}>
              <PetImage
                src={`${serverBaseUrl}/${pet.profileImage}`}
                alt={`${pet.name} 프로필`}
                onClick={() => handleNameClick(pet.id)}
              />
              <PetInfo>
                <p className="pet__name regular">{pet.name}</p>
                <span className="pet__type regular">{pet.type}</span>
              </PetInfo>
            </PetContainer>
          ))
        ) : (
          <p>즐겨찾기한 반려동물이 없습니다.</p>
        )}
      </UserPetBody>
    </>
  );
}

export default UserFavPet;
