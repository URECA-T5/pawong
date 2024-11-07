import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {
  RegisterBody,
  RegisterHeader,
  InputSection,
} from '../../style/register/register';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from '../../api/auth/editProfile';
import useProfileStore from '../../stores/auth/useProfileStore';
import useUserProfile from '../../stores/auth/useUserProfile';
function EditProfile() {
  const navigate = useNavigate();
  const { clearUser } = useUserProfile();

  const {
    profileImage,
    password,
    checkPassword,
    nickName,
    setProfileImage,
    setPassword,
    setCheckPassword,
    setNickName,
  } = useProfileStore((state) => state);

  const [previewImage, setPreviewImage] = useState(
    profileImage
      ? URL.createObjectURL(profileImage)
      : '/asset/register/profile.svg',
  );

  const handleCancel = () => {
    navigate(-1);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);

    const previewUrl = URL.createObjectURL(file);
    setPreviewImage(previewUrl);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== checkPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    const formData = new FormData();
    formData.append('userProfileImage', profileImage);
    formData.append('password', password);
    formData.append('nickName', nickName);

    try {
      const result = await updateProfile(formData);
      console.log('서버 응답:', result);
      alert('프로필이 성공적으로 업데이트되었습니다. 다시 로그인 해주세요');
      clearUser();
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <RegisterHeader>
        <div className="header__left">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="header__icon"
            onClick={handleCancel}
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
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            <button
              type="button"
              onClick={() => document.getElementById('fileInput').click()}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
            >
              <img
                src={previewImage}
                alt="프로필 등록"
                style={{
                  width: '5.5rem',
                  height: '5.5rem',
                  borderRadius: '50%',
                }}
              />
            </button>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <label htmlFor="input__CheckPwd" className="regular">
                비밀번호 확인
              </label>
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                id="input__CheckPwd"
                className="regular"
                value={checkPassword}
                onChange={(e) => setCheckPassword(e.target.value)}
              />

              <label htmlFor="input__name" className="regular">
                이름
              </label>
              <input
                type="text"
                placeholder="닉네임을 입력해주세요"
                id="input__name"
                className="regular"
                value={nickName}
                onChange={(e) => setNickName(e.target.value)}
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
            <button
              className="bold regist__btn"
              type="submit"
              onClick={handleSubmit}
            >
              등록
            </button>
          </div>
        </section>
      </RegisterBody>
    </>
  );
}

export default EditProfile;
