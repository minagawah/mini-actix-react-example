const MOCK_USER = {
  id: 9999,
  name: 'joe',
  age: 3,
  gender: 'male',
};

const mockAuth = () => new Promise(resolve => {
  setTimeout(() => {
    resolve(MOCK_USER);
  }, 500);
});

export const authUser = mockAuth
