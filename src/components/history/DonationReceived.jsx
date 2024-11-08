import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DonationAcceptStore,
  DonationReceivedStore,
} from '../../stores/historyStore';
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
  const [isLoading, setIsLoading] = useState(true);

  const formatDate = (date) => {
    if (!date) return '';
    return new Date(date)
      .toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      .replace(/\./g, '.');
  };

  const handleFetchAccept = async (flag, donationId, petId) => {
    try {
      await fetchIsAccepted(flag, donationId);
      await fetchDonationHistory(petId);
    } catch (error) {
      console.error('Error handling donation acceptance:', error);
    }
  };

  useEffect(() => {
    const initializeData = async () => {
      try {
        setIsLoading(true);
        await fetchPets();
        if (selectedPet?.id) {
          await fetchDonationHistory(selectedPet.id);
        }
      } catch (error) {
        console.error('Error initializing data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeData();
  }, [fetchPets, selectedPet?.id, fetchDonationHistory]);

  const ListPetButton = () => {
    if (!pets?.length) return null;

    return pets.map((pet) => (
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
          alt={`${pet.name}의 프로필`}
          onError={(e) => {
            e.target.src = '/asset/default-pet-image.svg';
          }}
        />
        <p>{pet.name}</p>
      </button>
    ));
  };

  const formatPrice = (price) => {
    if (!price) return '0';
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
    })
      .format(price)
      .replace('₩', '');
  };

  const ListDonations = () => {
    if (!donationHistory?.length) {
      return <p className="regular">아직 받은 후원이 없습니다.</p>;
    }

    return (
      <table className="donationReceived__table regular">
        <tbody>
          {donationHistory.map((data) => (
            <React.Fragment key={data.donationId}>
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
                    alt={data.donationItemName}
                    onError={(e) => {
                      e.target.src = '/asset/default-item-image.svg';
                    }}
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
                    <div className="donationReceived__button-group">
                      <button
                        className="donationReceived__btn bold"
                        onClick={() =>
                          handleFetchAccept(
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
                        onClick={() => navigate(`/delivery/${data.donationId}`)}
                      >
                        받기
                      </button>
                    </div>
                  ) : (
                    <button
                      className="donationReceived__btn bold"
                      disabled={data.isDelivery === '거절'}
                      onClick={() =>
                        data.isDelivery === '받기' &&
                        navigate(`/delivery/${data.donationId}`)
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
            </React.Fragment>
          ))}
        </tbody>
      </table>
    );
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <>
      <DonationReceivedDiv>
        <img src="/asset/history/donation.svg" alt="받은후원내역" />
        <h4 className="regular">
          <span className="donationReceived__span">{user?.nickName}</span>님이
        </h4>
        <h4 className="regular">받은 후원 내역이에요!</h4>
      </DonationReceivedDiv>
      <DonationReceivedSection>
        <ListPetButton />
      </DonationReceivedSection>
      {selectedPet && (
        <DonationReceivedInfo>
          <p className="donationReceived__mt">
            <span className="bold">{selectedPet.name}</span>에게 전달된
            후원물품이에요!
          </p>
          <ListDonations />
        </DonationReceivedInfo>
      )}
    </>
  );
};

export default DonationReceived;
