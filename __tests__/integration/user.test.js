import request from 'supertest';
import app from '../../src/app';

import truncate from '../utils/truncate';

describe('User', () => {
  // executado antes de cada teste
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to register', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'André Coelho',
        email: 'andrevrcoelho@hotmail.com',
        password_hash: '123456',
      });

    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to register with dupliacated email', async () => {
    await request(app)
      .post('/users')
      .send({
        name: 'André Coelho',
        email: 'andrevrcoelho@hotmail.com',
        password_hash: '123456',
      });

    const response = await request(app)
      .post('/users')
      .send({
        name: 'André Coelho',
        email: 'andrevrcoelho@hotmail.com',
        password_hash: '123456',
      });

    expect(response.status).toBe(400);
  });
});
