import { loadTossPayments } from '@tosspayments/tosspayments-sdk';
import { BottomModalContainer } from '../../style/donation/itemDetail';
import { useEffect, useState } from 'react';

const clientKey = 'test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq';
const customerKey = generateRandomString();

export function Toss({ modalRef, name, price, detailData }) {
  const [payment, setPayment] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('CARD');
  const amount = {
    currency: 'KRW',
    value: price,
  };

  function selectPaymentMethod(method) {
    setSelectedPaymentMethod(method);
  }

  useEffect(() => {
    async function fetchPayment() {
      try {
        const tossPayments = await loadTossPayments(clientKey);
        const paymentInstance = tossPayments.payment({ customerKey });
        setPayment(paymentInstance);
      } catch (error) {
        console.error('Error loading Toss Payments SDK:', error);
      }
    }

    fetchPayment();
  }, []);

  async function requestPayment() {
    if (!payment) return;

    const orderId = generateRandomString();
    const commonPaymentData = {
      amount,
      orderId,
      orderName: name,
      successUrl: window.location.origin + '/payment-finish',
      failUrl: window.location.origin + '/',
      customerEmail: 'customer123@gmail.com',
      customerName: '김토스',
      customerMobilePhone: '01012341234',
    };

    try {
      if (selectedPaymentMethod === 'CARD') {
        await payment.requestPayment({
          ...commonPaymentData,
          method: 'CARD',
          card: {
            useEscrow: false,
            flowMode: 'DEFAULT',
            useCardPoint: false,
            useAppCardOnly: false,
          },
        });
      } else if (selectedPaymentMethod === 'TRANSFER') {
        await payment.requestPayment({
          ...commonPaymentData,
          method: 'TRANSFER',
          transfer: {
            cashReceipt: {
              type: '소득공제',
            },
            useEscrow: false,
          },
        });
      }
    } catch (error) {
      console.error('Payment request failed:', error);
    }
  }

  return (
    <BottomModalContainer
      ref={modalRef}
      onClick={(e) => {
        if (e.target === e.currentTarget) modalRef.current.close();
      }}
    >
      <div className="box_section">
        <h3 className="bold">결제 방법 선택</h3>
        <div id="payment-method" style={{ display: 'flex' }}>
          <button
            id="CARD"
            className={`modal_paymentMethodBtn bold ${selectedPaymentMethod === 'CARD' ? 'active' : ''}`}
            onClick={() => selectPaymentMethod('CARD')}
          >
            카드
          </button>
          <button
            id="TRANSFER"
            className={`modal_paymentMethodBtn bold ${selectedPaymentMethod === 'TRANSFER' ? 'active' : ''}`}
            onClick={() => selectPaymentMethod('TRANSFER')}
          >
            계좌이체
          </button>
        </div>
        <button
          className="modal_paymentBtn bold"
          onClick={() => {
            modalRef.current.close();
            requestPayment();
          }}
        >
          결제하기
        </button>
      </div>
    </BottomModalContainer>
  );
}

function generateRandomString() {
  return window.btoa(Math.random().toString()).slice(0, 20);
}
