import React, { useEffect, useRef } from 'react';
import {
  DonationSentDiv,
  DonationSentInfo,
} from '../../style/history/donationSent';
import DonationHistoryNull from './DonationHistoryNull';
import useUserProfile from '../../stores/auth/useUserProfile';
import { DonationSentHistory } from '../../stores/historyStore';
import serverBaseUrl from '../../config/serverConfig';

const DonationSent = () => {
  const { user } = useUserProfile();
  const { donations, fetchDonations } = DonationSentHistory();

  const isLoadData = useRef(true);
  useEffect(() => {
    if (isLoadData.current) {
      isLoadData.current = false;
      fetchDonations();
    }
  }, [donations]);

  const formatDate = (date) => {
    return new Date(date)
      .toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      .replace(/\./g, '.');
  };

  function formatPrice(price) {
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
    })
      .format(price)
      .replace('₩', '');
  }

  const ListDonations = () => (
    <table className="donationSent__table regular">
      {donations.map((item, index) => (
        <tbody key={index}>
          <>
            <tr>
              <td className="donationSent__size">보낸 날짜</td>
              <td
                rowSpan="2"
                className="donationSent__border donationSent__center"
              >
                <img
                  className="donationSent__img"
                  src={`${serverBaseUrl}/${item.donationItemImages}`}
                  alt="사료"
                />
              </td>
              <td className="bold donationSent__prd">
                {item.donationItemName}
              </td>
              <td
                rowSpan="2"
                className="donationSent__border donationSent__center"
              >
                <button className="donationSent__btn bold">
                  {item.quantity}개
                </button>
              </td>
            </tr>
            <tr>
              <td className="donationSent__size donationSent__border">
                {formatDate(item.createdAt)}
              </td>
              <td className="donationSent__border">
                {formatPrice(item.donationItemPrice * item.quantity)}
              </td>
            </tr>
          </>
        </tbody>
      ))}
    </table>
  );
  return (
    <>
      {donations && donations.length > 0 ? (
        <>
          <DonationSentDiv>
            <img src={'/asset/history/donation.svg'} alt="보낸후원내역" />
            <h4 className="regular">
              <span className="donationSent__span">{user.nickName}</span>님이
            </h4>
            <h4 className="regular">최근 후원해주신 내역이에요!</h4>
          </DonationSentDiv>
          <DonationSentInfo>{ListDonations()}</DonationSentInfo>
        </>
      ) : (
        <DonationHistoryNull />
      )}
    </>
  );
};

export default DonationSent;
