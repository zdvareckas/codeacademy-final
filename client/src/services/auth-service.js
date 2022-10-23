const login = async (credetials) => {
  const response = await fetch('http://localhost:2566/auth/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credetials),
  });
  const authData = await response.json();

  if (response.status >= 400) {
    throw new Error(authData.message);
  }

  return authData;
};

const AuthService = {
  login,
};

export default AuthService;
