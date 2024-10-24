import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
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
];

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: routes,
  },
]);

export default router;
