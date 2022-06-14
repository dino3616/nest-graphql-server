import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import gql from 'graphql-tag';
import request from 'supertest-graphql';
import AppModule from '../src/app/app.module';

describe('e2e test', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  test('should get all users', async () => {
    const { data, errors, response } = await request(app.getHttpServer())
      .query(
        gql`
          query GetAllUsers {
            getAllUsers {
              id
              name
            }
          }
        `,
      )
      .expectNoErrors();

    expect(response.status).toBe(200);
    console.log(data, errors);
  });
});
