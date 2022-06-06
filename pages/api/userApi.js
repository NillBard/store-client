export const login = async ({ email, password }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/users/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );

  const { data, status } = await response.json();
  if (status === 200) {
    localStorage.setItem("token", data);
  }

  return data;
};

export const registration = async ({ email, name, password }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/users/registration`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, name, password }),
    }
  );

  const { data, status } = await response.json();
  if (status === 200) {
    localStorage.setItem("token", data);
  }

  return data;
};

export const auth = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/users/auth`,
    {
      credentials: "include",
    }
  );

  const { data } = await response.json();
  return data;
};
