export interface User {
    id: string;
    sector?: number;
    usuario: string;
    estado: string;
}

export interface ActiveDropdown {
    option: string;
    code: string;
}

export interface UseUsersParams {
    users: [];
    loading: boolean;
    editUser: (id: string) => void;
    deleteUser: (id: string) => void;
}

export interface UseUsersProps {
    name: string,
    isActive: ActiveDropdown | null,
    page: number,
    limit: number
}
export interface UserResponse {
    id: string;
    estado: string;
    sector: number;
    usuario: string;
  }
  