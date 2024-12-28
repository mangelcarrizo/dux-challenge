import { useEffect, useState } from "react";

// Interfaces o tipos
import { ActiveDropdown, User } from "../interfaces/IUsers";

// Servicios / funciones de la API
import { createUser, deleteUser, editUser, getUsers, getUsersCount } from "../services/userService";

// Utilidades
import { getQueryString } from "../utils/utils";

// Hook
import { useToast } from "../context/ToastContext";

export default function useUsers(
    openModal: boolean,
    name = "",
    isActive: ActiveDropdown | null = null,
    page = 1,
    limit = 10
) {
    const [loading, setLoading] = useState<boolean>(false);
    const [users, setUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState<number>(0);
    const { showSuccess, showError } = useToast();

    const getAllUsers = async () => {
        setLoading(true);
        try {
            const params = getQueryString(name, isActive, page, limit);

            const resUsers = await getUsers(params);
            const resTotalUsers = await getUsersCount();

            setUsers(resUsers);
            setTotalUsers(resTotalUsers);
        } catch (error) {
            console.error('Error al obtener datos de los usuarios:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (openModal) {
            return
        }
        getAllUsers();
    }, [name, isActive, page, limit]);

    const create = async (obj: User) => {
        try {
            const response = await createUser(obj);
            showSuccess('El usuario fue creado exitosamente.');
            return response;
        } catch (error) {
            showError('No se pudo crear el usuario.');
            throw error;
        }
    };

    const edit = async (obj: User) => {
        setLoading(true);
        try {
            const response = await editUser(obj);
            setLoading(false);
            showSuccess('El usuario fue editado exitosamente.');
            return response;
        } catch (error) {
            setLoading(false);
            showError('No se pudo editar el usuario.');
            throw error;
        }
    };

    const erase = async (id: string) => {
        setLoading(true);
        try {
            const response = await deleteUser(id);
            showSuccess('El usuario fue borrado exitosamente.');
            return response;
        } catch (error) {
            showError('No se pudo borrar el usuario.');
            throw error;
        } finally {
            setLoading(false);
        }
    };

    return {
        users,
        totalUsers,
        loading,
        create,
        edit,
        erase,
        getAllUsers
    };
}
