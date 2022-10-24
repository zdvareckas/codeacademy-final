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

const register = async (data) => {
  const response = await fetch('http://localhost:2566/auth/register', {
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
  const response = await fetch('http://localhost:/auth/', {
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
  const response = await fetch('http://localhost:2566/auth/check-email', {
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

const updateProfile = async ({ formData, token }) => {
  const response = await fetch('http://localhost:2566/auth/update-profile', {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  const authData = await response.json();

  if (response.status >= 400) {
    throw new Error(authData.message);
  }

  return authData;
};
const AuthService = {
  auth,
  login,
  register,
  checkEmail,
  updateProfile,
};

export default AuthService;
