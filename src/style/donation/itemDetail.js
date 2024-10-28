import styled from 'styled-components';
import { MainContainer } from '../global/global';

export const ImageContainer = styled.div`
  width: 100%;
  padding: 1rem;
`;

// 배경색 흰색으로 변경
export const WhiteContainer = styled(MainContainer)`
  background-color: white;
`;

// 제품 정보 컨테이너
export const BodyContainer = styled.div`
  padding: 0.5rem;
  font-size: 15px;
  font-weight: normal;
  // 클릭시 커서 효과가 안보이게 설정
  caret-color: transparent;

  // 카테고리 박스
  .item__category {
    width: 53px;
    height: 25px;
    margin-bottom: 0.5rem;
    border-radius: 16px;
    background-color: #e3ecff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  // 메세지 박스
  .item__message {
    width: 90px;
    height: 30px;
    margin-bottom: 0.5rem;
    border-radius: 16px;
    color: #f3f3f6;
    background-color: #5850fe;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .item__gap {
    padding: 0.4rem;
  }

  // 제품명
  .item__title {
    font-size: 20px;
  }

  // 제품 리뷰+가격 영역
  .item__row {
    display: flex;
    flex-direction: row;
  }

  // 제품 가격
  .item__price {
    font-size: 20px;
    padding: 0rem 1rem;
  }

  // 구분선
  .item__split {
    width: 100%;
    height: 5px;
    margin: 0.4rem 0;
    background-color: #f3f3f6;
  }

  .item__description {
    width: 100%;
    padding: 0.5rem;
  }
`;

// 상세페이지 하단
export const BottomContainer = styled.div`
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  padding: 0.3rem 1.5rem;
  gap: 1rem;
  position: sticky;
  bottom: 0px;
  background-color: white;

  // 공유하기 버튼
  .btn__share {
    width: 50px;
    height: 45px;
    border-radius: 8px;
    background-color: #e3ecff;
  }

  // 구매하기 버튼
  .btn__buy {
    width: 480px;
    height: 45px;
    border-radius: 8px;
    background-color: #5850fe;
    color: #e3ecff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
