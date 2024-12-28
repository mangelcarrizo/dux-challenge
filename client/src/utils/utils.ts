import { PaginatorPageChangeEvent } from "primereact/paginator"
import { ActiveDropdown } from "../interfaces/IUsers";

export const calculatePage = (event: PaginatorPageChangeEvent) => {
     return Math.floor(event.first / event.rows) + 1
}

export const getQueryString = (name: string, isActive: ActiveDropdown | null, page: number, limit: number): string => {
     const params = new URLSearchParams();
     if (name) params.append('usuario_like', name);
     if (isActive?.code !== undefined) params.append('estado', isActive.code.toString());
     params.append('_page', page.toString());
     params.append('_limit', limit.toString());
     return params.toString();
};
