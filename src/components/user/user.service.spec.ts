import MockContext from '../../test/mock';
import UserService from './user.service';

describe('user db service test', () => {
  let mockContext: MockContext;
  let userService: UserService;

  beforeEach(() => {
    mockContext = new MockContext();
    userService = new UserService(mockContext.prisma);
  });

  test('should create new user', async () => {
    const fakeUser = {
      id: 'abc-123',
      name: 'yukarisan-lover',
    };
    mockContext.prisma.user.create.mockResolvedValue(fakeUser);

    const expectUser = fakeUser;
    await expect(userService.create({ data: expectUser })).resolves.toEqual(expectUser);
  });

  test('should update user name', async () => {
    const fakeUser = {
      id: 'abc-123',
      name: 'mikusan-lover',
    };
    mockContext.prisma.user.update.mockResolvedValue(fakeUser);

    const expectUser = fakeUser;
    await expect(userService.update({ where: { id: expectUser.id }, data: { name: expectUser.name } })).resolves.toEqual(expectUser);
  });
});
