import React from 'react';
import {
  DonationSentDiv,
  DonationSentInfo,
} from '../../style/history/donationSent';
import DonationHistoryNull from './DonationHistoryNull';

const DonationSent = () => {
  const donations = [
    {
      user_id: 'a123',
      imgSrc: '/asset/history/samplebob.png',
      pet_id: '1',
      name: 'PROBEST 5kg',
      amount: '50000',
      date: '2024-10-29',
    },
    {
      user_id: 'a123',
      imgSrc: '/asset/history/samplebob.png',
      pet_id: '2',
      name: 'PROBEST 5kg',
      amount: '50000',
      date: '20224-10-22',
    },
    {
      user_id: 'a123',
      imgSrc: '/asset/history/samplebob2.png',
      pet_id: '1',
      name: '잘먹잘싸 5kg',
      amount: '20000',
      date: '2024-10-20',
    },
    {
      user_id: 'a333',
      imgSrc: '/asset/history/samplebob2.png',
      pet_id: '2',
      name: 'PROBEST 3kg',
      amount: '30000',
      date: '2024-10-17',
    },
  ];

  const aggregatedData = donations.reduce((acc, donation) => {
    if (donation.user_id === 'a123') {
      const existing = acc.find((item) => item.name === donation.name);
      const date = new Date(donation.date);
      const amount = Number(donation.amount);

      if (existing) {
        existing.count += 1;
        existing.totalAmount += amount;

        if (date > new Date(existing.latestDate)) {
          existing.latestDate = donation.date;
        }
      } else {
        acc.push({
          name: donation.name,
          count: 1,
          src: donation.imgSrc,
          totalAmount: amount,
          latestDate: donation.date,
        });
      }
    }

    return acc;
  }, []);

  const ListDonations = () => (
    <table className="donationSent__table regular">
      {aggregatedData.map((item, index) => (
        <tbody key={index}>
          <>
            <tr>
              <td className="donationSent__size">최근 후원</td>
              <td
                rowSpan="2"
                className="donationSent__border donationSent__center"
              >
                <img className="donationSent__img" src={item.src} alt="사료" />
              </td>
              <td className="bold donationSent__prd">{item.name}</td>
              <td
                rowSpan="2"
                className="donationSent__border donationSent__center"
              >
                <button className="donationSent__btn bold">
                  {item.count}회
                </button>
              </td>
            </tr>
            <tr>
              <td className="donationSent__size donationSent__border">
                {item.latestDate}
              </td>
              <td className="donationSent__border">{item.totalAmount}</td>
            </tr>
          </>
        </tbody>
      ))}
    </table>
  );
  return (
    <>
      {aggregatedData.length > 0 ? (
        <>
          <DonationSentDiv>
            <img src={'/asset/history/donation.svg'} alt="보낸후원내역" />
            <h4 className="regular">
              <span className="donationSent__span">구름이형</span>님이
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
