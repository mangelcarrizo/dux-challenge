// Dependencias de PrimeReact
import { Button } from 'primereact/button';

// Dependencias externas
import React, { useState } from 'react';

// Componentes locales
import Modal from '../Modal/Modal';
import useUsers from '@/src/hooks/useUsers';

export default function Header() {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const { getAllUsers, create } = useUsers(openModal)
    return (
        <>
            <div className="flex justify-content-between align-items-center w-full mb-5">
                <p className="text-5xl m-0">Usuario</p>
                <Button
                    label="Nuevo Usuario"
                    icon="pi pi-plus"
                    onClick={() => setOpenModal(true)}
                    autoFocus
                />
            </div>
            {openModal && (
                <Modal
                    edit={()=> {}}
                    create={create}
                    open={openModal}
                    setOpenModal={setOpenModal}
                    isEdit={false}
                    getAllUsers={getAllUsers}
                />
            )}
        </>
    );
}
