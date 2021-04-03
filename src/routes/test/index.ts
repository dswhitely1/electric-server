import { testRoute } from '../../controllers';
import { Route } from '../../utils';

const testRoutes: Route[] = [
  {
    path: '/_health',
    method: 'get',
    handler: testRoute,
  },
];

export default testRoutes;
