import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import Login from '../pages/Login/Login';
import Menu from '../pages/Menu';
import Main from '../pages/Main';
import Notice from '../pages/Notice/Notice';
import CareDiary from '../pages/CareDiary';
import Donation from '../pages/Donation/Donation';
import DonationItemDetail from '../pages/Donation/DonationItemDetail';
import CommonSense from '../pages/Notice/CommonSense';
import Register from '../pages/Register/Register';
import DonationRecord from '../pages/record/DonationRecord';
import FosterRecord from '../pages/record/FosterRecord';
import Payment from '../pages/Payment/Payment';
import PaymentFinish from '../pages/Payment/PaymentFinish';

const routes = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/notice',
    element: <Notice />,
  },
  {
    path: '/donation',
    element: <Donation />,
  },
  {
    path: '/donation_item',
    element: <DonationItemDetail />,
  },
  {
    path: '/common-sense',
    element: <CommonSense />,
  },
  { path: '/diary', element: <CareDiary /> },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/donation-record',
    element: <DonationRecord />,
  },
  {
    path: '/foster-record',
    element: <FosterRecord />,
  },
  {
    path: '/payment',
    element: <Payment />,
  },
  {
    path: '/payment_finish',
    element: <PaymentFinish />,
  },
];

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: routes,
  },
]);

export default router;
