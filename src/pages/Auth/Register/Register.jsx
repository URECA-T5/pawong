import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import {
  RegisterBody,
  RegisterHeader,
  InputSection,
  ErrorMessage,
  ProfileErrorMessage,
} from '../../../style/register/register';
import useSignup from '../../../stores/auth/useSignup';

function Register() {
  const {
    signup,
    setEmail,
    setPassword,
    setNickName,
    setProfileImage,
    user: { email, password, nickName, profileImage },
  } = useSignup();
  const navigate = useNavigate();

  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    nickName: '',
    profileImage: '',
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      email: '',
      password: '',
      passwordConfirm: '',
      nickName: '',
      profileImage: '',
    };

    if (!email) {
      newErrors.email = '이메일을 입력해주세요';
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = '올바른 이메일 형식이 아닙니다';
      isValid = false;
    }

    if (!password) {
      newErrors.password = '비밀번호를 입력해주세요';
      isValid = false;
    }

    if (!passwordConfirm) {
      newErrors.passwordConfirm = '비밀번호 확인을 입력해주세요';
      isValid = false;
    } else if (password !== passwordConfirm) {
      newErrors.passwordConfirm = '비밀번호가 일치하지 않습니다';
      isValid = false;
    }

    if (!nickName) {
      newErrors.nickName = '닉네임을 입력해주세요';
      isValid = false;
    }

    if (!profileImage) {
      newErrors.profileImage = '프로필 이미지를 등록해주세요';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setErrors((prev) => ({ ...prev, profileImage: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      formData.append('nickName', nickName);
      formData.append('userProfileImage', profileImage);

      try {
        await signup(formData);
        alert('회원가입에 성공했습니다!');
        navigate('/login');
      } catch (error) {
        alert('회원가입에 실패했습니다. 다시 시도해주세요.');
      }
    }
  };

  return (
    <>
      <RegisterHeader>
        <div className="header__left">
          <Link to="/login">
            <FontAwesomeIcon icon={faArrowLeft} className="header__icon" />
          </Link>
        </div>
        <div className="header__center">
          <h3 className="header__h3 bold">회원 가입</h3>
        </div>
        <div className="header__right">
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} className="header__icon home" />
          </Link>
        </div>
      </RegisterHeader>
      <RegisterBody onSubmit={handleSubmit}>
        <section className="profile__section">
          <div className="input__profile">
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            <label htmlFor="fileInput">
              {profileImage ? (
                <img
                  src={URL.createObjectURL(profileImage)}
                  alt="프로필 이미지"
                />
              ) : (
                <img src="/asset/register/profile.svg" alt="프로필 등록" />
              )}
            </label>
          </div>
          {errors.profileImage && (
            <ProfileErrorMessage>{errors.profileImage}</ProfileErrorMessage>
          )}
          <div className="description__profile">
            <p className="regular">프로필 사진을 등록하세요</p>
          </div>
          <InputSection>
            <div className="input__p">
              <p className="bold">기본 정보</p>
            </div>
            <div className="input__items">
              <label htmlFor="input__id" className="regular">
                아이디
              </label>
              <div className="input__container">
                <input
                  type="email"
                  placeholder="이메일을 입력해주세요"
                  id="input__id"
                  className="regular"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors((prev) => ({ ...prev, email: '' }));
                  }}
                />
                <button type="button" className="dupCheck__btn bold">
                  중복 확인
                </button>
              </div>
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

              <label htmlFor="input__password" className="regular">
                비밀번호
              </label>
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                id="input__password"
                className="regular"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors((prev) => ({ ...prev, password: '' }));
                }}
              />
              {errors.password && (
                <ErrorMessage>{errors.password}</ErrorMessage>
              )}

              <label htmlFor="input__CheckPwd" className="regular">
                비밀번호 확인
              </label>
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                id="input__CheckPwd"
                className="regular"
                value={passwordConfirm}
                onChange={(e) => {
                  setPasswordConfirm(e.target.value);
                  setErrors((prev) => ({ ...prev, passwordConfirm: '' }));
                }}
              />
              {errors.passwordConfirm && (
                <ErrorMessage>{errors.passwordConfirm}</ErrorMessage>
              )}

              <label htmlFor="input__name" className="regular">
                이름
              </label>
              <input
                type="text"
                placeholder="닉네임을 입력해주세요"
                id="input__name"
                className="regular"
                value={nickName}
                onChange={(e) => {
                  setNickName(e.target.value);
                  setErrors((prev) => ({ ...prev, nickName: '' }));
                }}
              />
              {errors.nickName && (
                <ErrorMessage>{errors.nickName}</ErrorMessage>
              )}
            </div>
          </InputSection>
          <div className="btn__section">
            <button className="bold cancle__btn" type="button">
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

export default Register;
