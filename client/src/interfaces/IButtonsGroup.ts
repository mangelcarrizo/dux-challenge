import { User } from "./IUsers";

export interface ButtonsGroupProps {
     user: User;
     handleEdit?: (id: string) => void;
     handleDelete?: (id: string) => void;
}
