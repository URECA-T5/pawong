import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import {
  RegisterBody,
  RegisterHeader,
  InputSection,
} from '../../../style/register/register';
import { useSignup } from '../../../stores/auth/useSignup';

function Register() {
  const { signup, setEmail, setPassword, setName } = useSignup();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email: e.target.input__id.value,
      password: e.target.input__password.value,
      name: e.target.input__name.value,
    };
    await signup(formData).then(() => {
      alert('회원가입에 성공했습니다!');
      navigate('/login');
    });
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
            <input id="fileInput" type="file"></input>
            <label htmlFor="fileInput">
              <img src="/asset/register/profile.svg" alt="프로필 등록" />
            </label>
          </div>
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
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="dupCheck__btn bold">중복 확인</button>
              </div>

              <label htmlFor="input__password" className="regular">
                비밀번호
              </label>
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                id="input__password"
                className="regular"
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
              />
              <label htmlFor="input__nickName" className="regular">
                닉네임
              </label>
              <input
                type="text"
                placeholder="닉네임을 입력해주세요"
                id="input__nickName"
                className="regular"
                onChange={(e) => setName(e.target.value)}
              />
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
