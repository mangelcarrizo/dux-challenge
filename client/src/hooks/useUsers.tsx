import { useEffect, useState } from "react";
import { ActiveDropdown } from "../interfaces/IUsers";
import { getUsers, getUsersCount } from "../services/userService";
import { getQueryString } from "../utils/utils";

export default function useUsers(
    name: string,
    isActive: ActiveDropdown | null,
    page = 1,
    limit = 10
) {
    const [loading, setLoading] = useState<boolean>(true);
    const [users, setUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const params = getQueryString(name, isActive, page, limit)

                const resUsers = await getUsers(params)
                const resTotalUsers = await getUsersCount()

                setUsers(resUsers);
                setTotalUsers(resTotalUsers);
            } catch (error) {
                console.error('Error al obtener datos de los usuarios:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [name, isActive, page, limit]);

    const editUser = (id: string) => console.log('Editando:', id);
    const deleteUser = (id: string) => console.log('Borrando:', id);

    return {
        users,
        totalUsers,
        loading,
        editUser,
        deleteUser,
    };
}
