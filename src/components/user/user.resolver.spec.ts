import { mock, MockedType } from '../../test/mock';
import UserQuery from './user.resolver.query';
import UserService from './user.service';

describe('user resolver test', () => {
  let mockedUserService: MockedType<UserService>;
  let userQuery: UserQuery;

  beforeEach(() => {
    mockedUserService = mock<UserService>();
    userQuery = new UserQuery(mockedUserService);
  });

  test('should create new user', async () => {
    const fakeUser = {
      id: 'abc-123',
      name: 'yukarisan-lover',
      posts: [
        {
          id: '123-abc',
          title: 'yukarisan-ga-kawaii-hanasi',
          content: 'yukarisan-kawaii-yatta-',
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
          user: {
            id: 'abc-123',
            name: 'yukarisan-lover',
          },
          userId: 'abc-123',
        },
      ],
    };
    mockedUserService.findUser.mockResolvedValue(fakeUser);

    const expectUser = fakeUser;
    await expect(userQuery.findUserById({ where: { id: expectUser.id } })).resolves.toEqual(expectUser);
  });
});
