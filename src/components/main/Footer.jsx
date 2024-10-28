import React, { useState } from 'react';
import { MainFooter } from '../../style/main/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  return (
    <MainFooter>
      <h2 className="extraBold">포옹</h2>
      <details className="regular">
        <summary>
          <a href="/">이용약관</a>
          <span> | </span>
          <a href="/">개인정보 처리방침</a>
        </summary>
        <table className="regular">
          <tbody>
            <tr>
              <td>회사명</td>
              <td>포옹</td>
            </tr>
            <tr>
              <td>주소</td>
              <td>서울특별시 용산구 한강대로 32</td>
            </tr>
            <tr>
              <td>대표이사</td>
              <td>데려오조</td>
            </tr>
            <tr>
              <td>사업자등록번호</td>
              <td>000-00-00000</td>
            </tr>
            <tr>
              <td>통신판매신고</td>
              <td>제0000-서울용산-00000호</td>
            </tr>
            <tr>
              <td>이메일</td>
              <td>cs@pawong.co.kr</td>
            </tr>
            <tr>
              <td>전화번호</td>
              <td>070-1234-1234</td>
            </tr>
          </tbody>
        </table>
      </details>
      <FontAwesomeIcon
        style={{
          fontSize: '1rem',
          margin: '0.5rem 0.5rem 0 0',
          cursor: 'pointer',
        }}
        icon={faComment}
      />
      <FontAwesomeIcon
        style={{ fontSize: '1rem', cursor: 'pointer' }}
        icon={faEnvelope}
      />
    </MainFooter>
  );
};

export default Footer;
