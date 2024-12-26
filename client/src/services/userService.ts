const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getUsers = async (params: string) => {
  try {

    const response = await fetch(
      `${API_URL}?sector=5000&${params}`
    );
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }
    return response.json()
  } catch (error) {
    console.error("Error al obtener usuarios: ", error);
    throw error;
  }
};

export const getUsersCount = async () => {
  try {
    const response = await fetch(
      `${API_URL}?sector=5000`
    );
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }
    const data = await response.json();
    console.log('getUsersCount ~ data:', data.length)
    return data.length;
  } catch (error) {
    console.error("Error al obtener la cantidad de usuarios: ", error);
    throw error;
  }
};
