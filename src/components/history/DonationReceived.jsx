import React from 'react';
import { DonationReceivedStore } from '../../stores/historyStore';
import { useNavigate } from 'react-router-dom';
import {
  DonationReceivedDiv,
  DonationReceivedInfo,
  DonationReceivedSection,
} from '../../style/history/donationReceived';

const DonationReceived = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  const { selectedDog, setSelectedDog } = DonationReceivedStore();
  const dogs = [
    {
      imgSrc: '/asset/history/sample.png',
      alt: '이미지를 사용할 수 없습니다',
      pet_id: '1',
      name: '포동이',
    },
    {
      imgSrc: '/asset/history/sample2.png',
      alt: '이미지를 사용할 수 없습니다',
      pet_id: '2',
      name: '포옹이',
    },
  ];

  const donations = [
    {
      imgSrc: '/asset/history/samplebob.png',
      pet_id: '1',
      name: 'PROBEST 5kg',
      amount: '20000',
      date: '24.10.28',
    },
    {
      imgSrc: '/asset/history/samplebob.png',
      pet_id: '2',
      name: 'PROBEST 3kg',
      amount: '50000',
      date: '24.10.03',
    },
    {
      imgSrc: '/asset/history/samplebob2.png',
      pet_id: '2',
      name: '잘먹잘싸 2kg',
      amount: '50000',
      date: '24.10.24',
    },
  ];

  const ListDogsButton = () =>
    dogs.map((dog) => (
      <button
        className="DonationReceived__btn"
        key={dog.pet_id}
        onClick={() => setSelectedDog(dog)}
      >
        <img src={dog.imgSrc} alt={dog.alt} />
        <p>{dog.name}</p>
      </button>
    ));

  const ListDonations = (selectedDonations) =>
    selectedDonations.length > 0 ? (
      <table className="DonationReceived__table regular">
        {selectedDonations.map((donations, index) => (
          <tbody key={index}>
            <tr>
              <td className="DonationReceived__border DonationReceived__padding">
                날짜
              </td>
              <td
                rowSpan="2"
                className="DonationReceived__border DonationReceived__center"
              >
                <img
                  className="DonationReceived__img"
                  src={donations.imgSrc}
                  alt="사료"
                />
              </td>
              <td className="bold DonationReceived__prd">{donations.name}</td>
              <td
                rowSpan="2"
                className="DonationReceived__border DonationReceived__center"
              >
                <button className="DonationReceived__btn bold">거절</button>
                <button
                  className="DonationReceived__btn bold"
                  onClick={() => handleClick('/delivery')}
                >
                  받기
                </button>
              </td>
            </tr>
            <tr>
              <td className="DonationReceived__border">{donations.date}</td>
              <td className="DonationReceived__border">{donations.amount}</td>
            </tr>
          </tbody>
        ))}
      </table>
    ) : (
      <p>내역이 없어요</p>
    );

  if (!selectedDog) {
    return (
      <>
        <DonationReceivedDiv>
          <img src={'/asset/history/donation.svg'} alt="받은후원내역" />
          <h4 className="regular">
            <span className="DonationReceived__span">구름이형</span>님이
          </h4>
          <h4 className="regular">받은 후원 내역이에요!</h4>
        </DonationReceivedDiv>
        <DonationReceivedSection>{ListDogsButton()}</DonationReceivedSection>
      </>
    );
  }

  const selectedDonations = donations.filter(
    (donations) => donations.pet_id === selectedDog.pet_id,
  );

  return (
    <>
      <DonationReceivedDiv>
        <img src={'/asset/history/donation.svg'} alt="받은후원내역" />
        <h4 className="regular">
          <span className="DonationReceived__span">구름이형</span>님이
        </h4>
        <h4 className="regular">받은 후원 내역이에요!</h4>
      </DonationReceivedDiv>
      <DonationReceivedSection>{ListDogsButton()}</DonationReceivedSection>
      <DonationReceivedInfo>
        <p className="DonationReceived__mt">
          <span className="bold">{selectedDog.name}</span>에게 전달된
          후원물품이에요!
        </p>
        {ListDonations(selectedDonations)}
      </DonationReceivedInfo>
    </>
  );
};

export default DonationReceived;
