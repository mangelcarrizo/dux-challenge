import { User } from "./IUsers";

export interface ModalProps {
    edit: (value: User) => void;
    create: (value: User) => void;
    open: boolean,
    setOpenModal: (value: boolean) => void;
    selectedUser?: User | undefined,
    isEdit: boolean
    getAllUsers: () => void
}

export interface ModalHeaderProps {
    setOpenModal: (value: boolean) => void;
}

export interface ModalFooterProps {
    id: string;
    isEdit: boolean;
    open: boolean;
    setOpenModal: (value: boolean) => void;
    handleSubmit: () => void;
    getAllUsers: () => void;
}
