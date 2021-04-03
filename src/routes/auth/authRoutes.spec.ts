import request from 'supertest';
import server from '../../server';

describe('Auth Routes', () => {
  describe('/auth/login', () => {
    it('should return 400 when no authorization header is present', async () => {
      await request(server)
        .get('/auth/login')
        .expect(400)
        .expect('Content-Type', /json/);
    });
  });
});
