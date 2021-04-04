import authRoutes from './auth';
import testRoutes from './test';
import messageRoutes from './messages';

export default [...testRoutes, ...authRoutes, ...messageRoutes];
