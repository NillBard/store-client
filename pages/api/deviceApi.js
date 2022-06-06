export const getAll = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/device`
  );

  const { data } = await response.json();

  return data;
};

export const getOne = async (id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/device/${id}`
  );

  const { data } = await response.json();
  return data;
};

export const addInCart = async ({ id, user }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/device/${id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user}`,
      },
      body: JSON.stringify({ id }),
    }
  );
  const { data } = await response.json();
  return data;
};

export const getCartList = async (user) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/cart`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user}`,
      },
    }
  );
  const { data } = await response.json();
  return data;
};

export const addNewDevice = async (name, img, description, price) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/device`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, img, price, description }),
    }
  );

  const { data } = await response.json();
  return data;
};

export const incDeviceCount = async ({ user, id }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/device/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user}`,
      },
    }
  );

  const { data } = await response.json();
  return data;
};
