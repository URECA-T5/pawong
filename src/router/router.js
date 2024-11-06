import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import Login from '../pages/Auth/Login/Login';
import Menu from '../pages/Menu';
import Notice from '../pages/Notice/Notice';
import CareDiaryUpload from '../pages/Care/Diary/CareDiaryUpload';
import Donation from '../pages/Donation/Donation';
import DonationItemDetail from '../pages/Donation/DonationItemDetail';
import CommonSense from '../pages/Notice/CommonSense';
import Register from '../pages/Auth/Register/Register';
import DonationHistory from '../pages/History/DonationHistory';
import Delivery from '../pages/Delivery/Delivery';
import Payment from '../pages/Payment/Payment';
import PaymentFinish from '../pages/Payment/PaymentFinish';
import { path } from 'framer-motion/client';
import CareDiaryList from '../pages/Care/Diary/CareDiaryList';
import FosterHistory from '../pages/History/FosterHistory';
import Main from '../pages/Main';
import CareDiaryDetail from '../pages/Care/Diary/CareDiaryDetail';
import Admin from '../pages/Admin/Admin';
import CareDiaryFeed from '../pages/Care/Diary/CareDiaryFeed';
import PetUpload from '../pages/Care/Upload/PetUpload';
import CareList from '../pages/Care/List/CareList';
import SocialLoginSuccess from '../pages/Auth/Login/SocialLoginSuccess';

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
    path: '/socialLogin',
    element: <SocialLoginSuccess />,
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
    path: '/donation-item',
    element: <DonationItemDetail />,
  },
  {
    path: '/common-sense',
    element: <CommonSense />,
  },
  { path: '/diary-upload', element: <CareDiaryUpload /> },
  { path: '/diary-list', element: <CareDiaryList /> },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/donation-history',
    element: <DonationHistory />,
  },
  {
    path: '/foster-history',
    element: <FosterHistory />,
  },
  {
    path: '/delivery',
    element: <Delivery />,
  },
  {
    path: '/payment',
    element: <Payment />,
  },
  {
    path: '/payment-finish',
    element: <PaymentFinish />,
  },
  {
    path: '/diary-detail',
    element: <CareDiaryDetail />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
  { path: '/diary-feed', element: <CareDiaryFeed /> },
  {
    path: '/care-list',
    element: <CareList />,
  },
  {
    path: '/pet-upload',
    element: <PetUpload />,
  },
];

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: routes,
  },
]);

export default router;
