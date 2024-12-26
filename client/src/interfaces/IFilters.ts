import { ActiveDropdown } from "./IUsers";

export interface FiltersProps {
    name: string;
    setName: (value: string) => void;
    isActive: ActiveDropdown | null;
    setIsActive: (value: ActiveDropdown) => void;
    setPage: (value: number) => void;
    page?: number;
    limit?: number;
}
