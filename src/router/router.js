import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import Home from '../pages/Home';
import Login from '../pages/Auth/Login/Login';
import Menu from '../pages/Menu';
import Notice from '../pages/Notice/Notice';
import CareDiary from '../pages/CareDiary/CareDiary';
import Donation from '../pages/Donation/Donation';
import DonationItemDetail from '../pages/Donation/DonationItemDetail';
import CommonSense from '../pages/Notice/CommonSense';
import Register from '../pages/Auth/Register/Register';
import DonationRecord from '../pages/DonationRecord';
import FosterRecord from '../pages/record/FosterRecord';

const routes = [
  {
    path: '/',
    element: <Home />,
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
];

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: routes,
  },
]);

export default router;
