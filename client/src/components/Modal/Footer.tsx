// Dependencias externas
import React from 'react';

// Componentes de PrimeReact
import { Button } from 'primereact/button';

// Interfaces o tipos
import { ModalFooterProps } from "@/src/interfaces/IModal";

// Hook
import useUsers from '@/src/hooks/useUsers';

export default function FooterModal({ id, isEdit, open, setOpenModal, handleSubmit, getAllUsers }: ModalFooterProps) {
     const { loading, erase } = useUsers(open)
     const handleDelete = async () => {
          await erase(id)
          getAllUsers()
          setOpenModal(false)
     };

     const handleCancel = () => {
          setOpenModal(false)
     };

     return (
          <div className="flex justify-content-center p-4 gap-3">
               <Button
                    disabled={loading}
                    label="Confirmar"
                    icon="pi pi-check"
                    onClick={() => handleSubmit()}
                    autoFocus
               />
               <Button
                    disabled={loading}
                    label="Cancelar"
                    icon="pi pi-times"
                    onClick={() => handleCancel()}
                    className="bg-white"
                    style={{ color: '#0763E7' }}
               />
               {isEdit && (
                    <Button
                         disabled={loading}
                         label="Borrar"
                         severity="danger"
                         onClick={() => handleDelete()}
                         icon="pi pi-trash"

                    />
               )}
          </div>
     )
}
