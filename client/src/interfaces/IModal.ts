import { User } from "./IUsers";

export interface ModalProps {
    open: boolean,
    setOpenModal: (value: boolean) => void;
    selectedUser: User | undefined
}
