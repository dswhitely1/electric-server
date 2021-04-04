import {
  getAllMessages,
  markMessageRead,
  findMessage,
  deleteMessage,
  createMessage,
} from '../../controllers';
import { Route } from '../../utils';
import { isAdmin } from '../../middleware';

const messageRoutes: Route[] = [
  {
    path: '/messages',
    method: 'get',
    handler: [isAdmin, getAllMessages],
  },
  {
    path: '/messages',
    method: 'post',
    handler: createMessage,
  },
  {
    path: '/messages/:id',
    method: 'put',
    handler: [isAdmin, findMessage, markMessageRead],
  },
  {
    path: '/messages/:id',
    method: 'delete',
    handler: [isAdmin, findMessage, deleteMessage],
  },
];

export default messageRoutes;
