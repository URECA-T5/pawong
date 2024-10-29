import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import Home from '../pages/Home';
import Login from '../pages/Login/Login';
import Menu from '../pages/Menu';
import Main from '../pages/Main';
import Notice from '../pages/Notice/Notice';
import Donation from '../pages/DonationPages/Donation';
import DonationItemDetail from '../pages/DonationPages/DonationItemDetail';
import CareDiary from '../pages/CareDiary';
import CommonSense from '../pages/Notice/CommonSense';

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
];

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: routes,
  },
]);

export default router;
