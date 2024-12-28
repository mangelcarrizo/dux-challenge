import { User } from "../interfaces/IUsers";

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
    return data.length;
  } catch (error) {
    console.error("Error al obtener la cantidad de usuarios: ", error);
    throw error;
  }
};

export const createUser = async (userData: User) => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`Error status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error creando usuario:', error);
    throw error;
  }
};

export const editUser = async (userData: User) => {
  try {
    const response = await fetch(`${API_URL}/${userData?.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`Error status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error creando usuario:', error);
    throw error;
  }
};

export const deleteUser = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Error status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error al borrar el usuario:', error);
    throw error;
  }
};
