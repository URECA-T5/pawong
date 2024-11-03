import React, { useEffect, useState } from 'react';
import GlobalStyle, { MainContainer } from '../../style/global/global';
import {
  DeliveryHeader,
  DeliveryMsgDiv,
  DeliveryItemSection,
  DeliveryItemInfo,
  DeliveryForm,
} from '../../style/delivery/delivery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import AddressStore from '../../stores/deliveryStore';

const DAUM_POSTCODE_SCRIPT_SRC =
  'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';

const Delivery = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const handleClick = (path) => {
    navigate(path);
  };

  useEffect(() => {
    if (!document.querySelector(`script[src="${DAUM_POSTCODE_SCRIPT_SRC}"]`)) {
      const script = document.createElement('script');
      script.src = DAUM_POSTCODE_SCRIPT_SRC;
      document.head.appendChild(script);

      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
  }, []);

  const {
    postcode,
    address,
    detailAddress,
    phoneNumber,
    setPostcode,
    setAddress,
    setDetailAddress,
    setPhoneNumber,
  } = AddressStore();

  const handleAddressSearch = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        setPostcode(data.zonecode);
        setAddress(data.address);
      },
    }).open();
  };

  const handleChangeDetail = (e) => {
    setDetailAddress(e.target.value);
    setError('');
  };

  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phoneNumber.length !== 11 || isNaN(phoneNumber)) {
      setError('전화번호는 11자리 숫자로 입력해 주세요.');
      setPostcode('');
      setAddress('');
      setDetailAddress('');
      setPhoneNumber('');

      return;
    }

    setError('');
    const formData = {
      postcode,
      address,
      detailAddress,
      phoneNumber,
    };

    console.log('Form Data:', formData);
  };

  const dogs = {
    url: '/asset/history/sample.png',
    alt: '이미지를 사용할 수 없습니다',
    pet_id: '1',
    name: '포동이',
  };

  const donations = {
    url: '/asset/history/samplebob.png',
    category: '강아지',
    company: '펫생각',
    name: 'PROBEST 5kg',
    price: 20000,
    cnt: 1,
  };

  function formatPrice(price) {
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
    })
      .format(price)
      .replace('₩', '');
  }

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <DeliveryHeader>
          <FontAwesomeIcon
            onClick={() => handleClick('/donation-history')}
            icon={faAngleLeft}
            className="Delivery__pointer"
          />
          <div className="header__title">
            <p className="extraBold">배송지 입력</p>
          </div>
          <FontAwesomeIcon
            className="Delivery__pointer"
            onClick={() => handleClick('/')}
            icon={faHouse}
          />
        </DeliveryHeader>
        <DeliveryMsgDiv className="regular">
          <img src={dogs.url} alt="no profile img" />
          <div>
            <p>
              <span className="delivery__pointColor bold">{dogs.name}</span>
              <span>에게 온</span>
            </p>
            <p>선물을 받고 싶어요</p>
          </div>
        </DeliveryMsgDiv>
        <DeliveryItemSection>
          <p className="delivery__Title bold">후원 상품</p>
          <DeliveryItemInfo>
            <img src={donations.url} alt="no item img" />
            <div>
              <button className="bold">{donations.company}</button>
              <p className="delivery__colorSize bold">{donations.name}</p>
              <p className="delivery__pointColor">수량 : {donations.cnt}개</p>
              <p className="delivery__colorSize bold">
                {formatPrice(donations.price)}원
              </p>
            </div>
          </DeliveryItemInfo>
          <div className="delivery__Line"></div>
          <DeliveryForm onSubmit={handleSubmit}>
            <p className="bold">전화번호</p>
            <div>
              <input
                className="delivery__inputPhone regular"
                type="text"
                value={phoneNumber}
                onChange={handleChangePhoneNumber}
                placeholder="예: 01012341234"
              />
              {error && <p className="delivery__phoneError">{error}</p>}
            </div>
            <p className="delivery__inputTitle bold">주소지</p>
            <div>
              <input
                className="delivery__inputPost regular"
                type="text"
                value={postcode}
                readOnly
                placeholder="우편번호"
              />
              <button
                className="delivery__search regular"
                type="button"
                onClick={handleAddressSearch}
              >
                주소 검색
              </button>
            </div>
            <div>
              <input
                className="delivery__inputAddress regular"
                type="text"
                value={address}
                readOnly
                placeholder="주소"
              />
            </div>
            <div>
              <input
                className="delivery__inputAddress regular"
                type="text"
                value={detailAddress}
                onChange={handleChangeDetail}
                placeholder="상세 주소를 입력해주세요"
              />
            </div>
            <button className="delivery__submit regular" type="submit">
              수락하기
            </button>
          </DeliveryForm>
        </DeliveryItemSection>
      </MainContainer>
    </>
  );
};
export default Delivery;
