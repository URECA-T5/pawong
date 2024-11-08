import React, { useEffect, useRef } from 'react';
import {
  DonationAcceptStore,
  DonationReceivedStore,
} from '../../stores/historyStore';
import { useNavigate } from 'react-router-dom';
import {
  DonationReceivedDiv,
  DonationReceivedInfo,
  DonationReceivedSection,
} from '../../style/history/donationReceived';
import serverBaseUrl from '../../config/serverConfig';
import useUserProfile from '../../stores/auth/useUserProfile';
import userPet from '../../stores/mypage/userPet';

const DonationReceived = () => {
  const { user } = useUserProfile();
  const { pets, fetchPets } = userPet();
  const { selectedPet, donationHistory, fetchDonationHistory, setSelectedPet } =
    DonationReceivedStore();
  const { fetchIsAccepted } = DonationAcceptStore();

  const navigate = useNavigate();

  const formatDate = (date) => {
    return new Date(date)
      .toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      .replace(/\./g, '.');
  };

  const handleFetchAccpet = async (flag, donationId, petId) => {
    await fetchIsAccepted(flag, donationId);
    await fetchDonationHistory(petId);
    flag === '받기' && navigate('/delivery');
  };

  const isLoadData = useRef(true);
  useEffect(() => {
    if (isLoadData.current) {
      isLoadData.current = false;
      fetchPets();
    }
  }, [selectedPet, donationHistory]);

  const ListPetButton = () =>
    pets.map((pet) => (
      <button
        className="donationReceived__btn"
        key={pet.id}
        onClick={() => {
          setSelectedPet(pet);
          fetchDonationHistory(pet.id);
        }}
      >
        <img
          src={`${serverBaseUrl}/${pet.profileImage}`}
          alt={`${serverBaseUrl}/${pet.profileImage} 프로필`}
        />
        <p>{pet.name}</p>
      </button>
    ));

  function formatPrice(price) {
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
    })
      .format(price)
      .replace('₩', '');
  }

  const ListDonations = (donationHistory) =>
    donationHistory && (
      <table className="donationReceived__table regular">
        {donationHistory.map((data) => (
          <tbody key={data.donationId}>
            <tr>
              <td className="donationReceived__border donationReceived__padding">
                날짜
              </td>
              <td
                rowSpan="2"
                className="donationReceived__border donationReceived__center"
              >
                <img
                  className="donationReceived__img"
                  src={`${serverBaseUrl}/${data.donationItemImages}`}
                  alt="사료"
                />
              </td>
              <td className="bold donationReceived__prd">
                {data.donationItemName}
              </td>
              <td
                rowSpan="2"
                className="donationReceived__border donationReceived__center"
              >
                {data.isDelivery === '' ? (
                  <>
                    <button
                      className="donationReceived__btn bold"
                      onClick={() =>
                        handleFetchAccpet(
                          '거절',
                          data.donationId,
                          selectedPet.id,
                        )
                      }
                    >
                      거절
                    </button>
                    <button
                      className="donationReceived__btn bold"
                      onClick={() => {
                        handleFetchAccpet(
                          '받기',
                          data.donationId,
                          selectedPet.id,
                        );
                      }}
                    >
                      받기
                    </button>
                  </>
                ) : (
                  <button
                    className="donationReceived__btn bold"
                    disabled={data.isDelivery === '거절' && true}
                    onClick={() =>
                      data.isDelivery === '받기' && navigate('/delivery')
                    }
                  >
                    {data.isDelivery}
                  </button>
                )}
              </td>
            </tr>
            <tr>
              <td className="donationReceived__border">
                {formatDate(data.createdAt)}
              </td>
              <td className="donationReceived__border">
                {formatPrice(data.donationItemPrice)}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    );

  if (!selectedPet) {
    return (
      <>
        <DonationReceivedDiv>
          <img src={'/asset/history/donation.svg'} alt="받은후원내역" />
          <h4 className="regular">
            <span className="donationReceived__span">{user.nickName}</span>님이
          </h4>
          <h4 className="regular">받은 후원 내역이에요!</h4>
        </DonationReceivedDiv>
        <DonationReceivedSection>{ListPetButton()}</DonationReceivedSection>
      </>
    );
  }

  return (
    <>
      <DonationReceivedDiv>
        <img src={'/asset/history/donation.svg'} alt="받은후원내역" />
        <h4 className="regular">
          <span className="donationReceived__span">{user.nickName}</span>님이
        </h4>
        <h4 className="regular">받은 후원 내역이에요!</h4>
      </DonationReceivedDiv>
      <DonationReceivedSection>{ListPetButton()}</DonationReceivedSection>
      <DonationReceivedInfo>
        <p className="donationReceived__mt">
          <span className="bold">{selectedPet.name}</span>에게 전달된
          후원물품이에요!
        </p>
        {ListDonations(donationHistory)}
      </DonationReceivedInfo>
    </>
  );
};

export default DonationReceived;
