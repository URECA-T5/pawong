import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import Home from '../pages/Home';
import Donation from '../pages/Donation';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/donation',
    element: <Donation />,
  },
];

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: routes,
  },
]);

export default router;
