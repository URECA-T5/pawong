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
import DonationRecord from '../pages/DonationRecord';

const routes = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/login', // login 경로 추가
    element: <Login />,
  },
  {
    path: '/menu', // menu 경로 추가
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
    path: '/donationRecord',
    element: <DonationRecord />,
  },
];

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: routes,
  },
]);

export default router;
