import { login, register } from '../../controllers';
import { Route } from '../../utils';
import { loginUser } from '../../controllers/auth/middleware';

const authRoutes: Route[] = [
  {
    path: '/auth/login',
    method: 'get',
    handler: [loginUser, login],
  },
  {
    path: '/auth/register',
    method: 'post',
    handler: register,
  },
];

export default authRoutes;
