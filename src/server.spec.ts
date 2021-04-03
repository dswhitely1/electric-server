import request from 'supertest';
import server from './server';

describe('server.ts', () => {
  it('should return 200 from the test route', async () => {
    await request(server)
      .get('/_health')
      .expect(200)
      .expect('Content-Type', /json/);
  });
});
