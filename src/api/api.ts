const BASE_URL = 'https://mate.academy/students-api/todos';

export const getTodos = async () => {
  const response = await fetch(`${BASE_URL}/todos`);

  return response.json();
};

export const getUser = async (userId: number) => {
  const response = await fetch(`${BASE_URL}/users/${userId}`);

  return response.json();
};
