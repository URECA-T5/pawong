import styled from 'styled-components';

export const ItemContainer = styled.div`
  position: relative;
  width: 274px;
  height: 327px;
  border-radius: 16px;
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);

  transition: transform 0.3s ease;

  // 클릭시 커서 효과가 안보이게 설정
  caret-color: transparent;

  &:hover {
    transform: scale(1.02);
  }

  // 후원상품 정보 영역
  .item__info {
    display: flex;
    flex-direction: column;
    padding: 0px 8px;
    justify-content: center;
  }

  // 브랜드
  .item__brand {
    font-size: 11px;
    font-weight: bold;
    color: #6d6e71;
  }

  // 제품 이름
  .item__title {
    font-size: 11px;
  }

  // 제품 가격
  .item__price {
    font-size: 12px;
    font-weight: bold;
  }

  // 인기 메세지
  .item__message {
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
    width: 53px;
    height: 25px;
    margin: 0.8rem;
    border-radius: 16px;
    background-color: #e3ecff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

// 후원상품 이미지 영역
export const ItemImageArea = styled.img`
  width: 274px;
  height: 274px;
  border-radius: 16px 16px 0px 0px;
  background-image: url(props.src);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  // 클릭시 커서 효과가 안보이게 설정
  caret-color: transparent;
`;

// 헤더 영역
export const DonationHeader = styled.header`
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: white;

  // 클릭시 커서 효과가 안보이게 설정
  caret-color: transparent;

  .header__icon {
    transition: color 0.3s ease;

    &:hover,
    &:focus {
      color: #5850fe;
      outline: none;
      cursor: pointer;
    }
  }
`;

// 메뉴바 버튼
export const MenuBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 59px;
  height: 23px;
  border-radius: 15px;
  // [배경색] 선택: E3ECFF, 해제: F3F3F6
  background-color: ${(props) => props.$bgcolor};

  // [폰트색] 선택: 5850FE, 해제: 6D6E71
  color: ${(props) => props.$fontcolor};
  font-size: 16px;

  // [폰트 굵기] 선택: bold, 해제: normal
  font-weight: ${(props) => props.fontWeight};

  // 클릭시 커서 효과가 안보이게 설정
  caret-color: transparent;
`;

// 메뉴바 영역
export const MenuArea = styled.div`
  width: 600px;
  height: 59px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  gap: 1.2rem;
  background-color: white;
`;

// 후원 리스트 목록
export const ListContainer = styled.div`
  display: grid;
  justify-items: center;
  width: 600px;
  padding: 2rem 1rem;
  gap: 1rem;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
`;
