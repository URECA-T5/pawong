import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {
  RegisterBody,
  RegisterHeader,
  InputSection,
} from '../../style/register/register';
import { useNavigate } from 'react-router-dom';

function EditProfile() {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <>
      <RegisterHeader>
        <div className="header__left">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="header__icon"
            onClick={() => navigate(-1)}
          />
        </div>
        <div className="header__center">
          <h3 className="header__h3 bold">프로필 수정</h3>
        </div>
        <div className="header__right">
          <FontAwesomeIcon
            icon={faHouse}
            className="header__icon home"
            onClick={() => navigate('/')}
          />
        </div>
      </RegisterHeader>
      <RegisterBody>
        <section className="profile__section">
          <div className="input__profile">
            <input id="fileInput" type="file" accept="image/*" />
            <img src="/asset/register/profile.svg" alt="프로필 등록" />
          </div>
          <div className="description__profile">
            <p className="regular">프로필 사진을 등록하세요</p>
          </div>
          <InputSection>
            <div className="input__p">
              <p className="bold">기본 정보</p>
            </div>
            <div className="input__items">
              <label htmlFor="input__password" className="regular">
                비밀번호
              </label>
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                id="input__password"
                className="regular"
              />

              <label htmlFor="input__CheckPwd" className="regular">
                비밀번호 확인
              </label>
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                id="input__CheckPwd"
                className="regular"
              />

              <label htmlFor="input__name" className="regular">
                이름
              </label>
              <input
                type="text"
                placeholder="닉네임을 입력해주세요"
                id="input__name"
                className="regular"
              />
            </div>
          </InputSection>
          <div className="btn__section">
            <button
              className="bold cancle__btn"
              type="button"
              onClick={handleCancel}
            >
              취소
            </button>
            <button className="bold regist__btn" type="submit">
              등록
            </button>
          </div>
        </section>
      </RegisterBody>
    </>
  );
}

export default EditProfile;
