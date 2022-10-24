const domain = process.env.REACT_APP_SERVER_DOMAIN;

const login = async (credetials) => {
  const response = await fetch(`${domain}/auth/login`, {
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

const register = async (data) => {
  const response = await fetch(`${domain}/auth/register`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const authData = await response.json();

  if (response.status >= 400) {
    throw new Error(authData.message);
  }

  return authData;
};

const auth = async (token) => {
  const response = await fetch(`${domain}:/auth/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const authData = await response.json();

  if (response.status >= 400) {
    throw new Error(authData.message);
  }

  return authData;
};

const checkEmail = async (email) => {
  const response = await fetch(`${domain}/auth/check-email`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({ email }),
  });
  const responseData = await response.json();

  if (response.status >= 400) {
    throw new Error(responseData.message);
  }

  return responseData.emailAvailable;
};

const AuthService = {
  auth,
  login,
  register,
  checkEmail,
};

export default AuthService;
