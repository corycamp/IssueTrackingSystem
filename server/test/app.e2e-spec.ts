import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/users (GET)', () => {
    return request(app.getHttpServer()).get('/users').expect(200);
  });

  it('/projects (GET)', () => {
    return request(app.getHttpServer()).get('/projects').expect(200);
  });

  it('/issues (GET)', () => {
    return request(app.getHttpServer()).get('/issues').expect(200);
  });

  it('/comments (GET)', () => {
    return request(app.getHttpServer()).get('/comments').expect(200);
  });

  it('/users (POST)', () => {
    return request(app.getHttpServer())
      .post('/users')
      .send({ email: 'test@example.com', username: 'testuser', password: 'secret' })
      .expect(201);
  });

  it('/projects (POST)', () => {
    return request(app.getHttpServer())
      .post('/projects')
      .send({ name: 'Test Project', owner_id: 1 })
      .expect(201);
  });

  it('/issues (POST)', () => {
    return request(app.getHttpServer())
      .post('/issues')
      .send({ name: 'Test Issue', priority: 3, owner_id: 1, project_id: 1 })
      .expect(201);
  });

  it('/comments (POST)', () => {
    return request(app.getHttpServer())
      .post('/comments')
      .send({ details: 'Test comment', commentor_id: 1, issue_id: 1 })
      .expect(201);
  });
});
