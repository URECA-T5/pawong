import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import Notice from '../pages/NoticePages/Notice';
import Donation from '../pages/DonationPages/Donation';
import DonationItemDetail from '../pages/DonationPages/DonationItemDetail';
const routes = [
  {
    path: '/',
    element: <Home />,
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
];

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: routes,
  },
]);

export default router;
