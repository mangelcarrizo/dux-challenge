// Dependencias externas
import React, { useState } from "react";

// Componentes de PrimeReact
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

// Interfaces o tipos
import { ModalProps } from "@/src/interfaces/IModal";
import { User } from "@/src/interfaces/IUsers";

// Componentes locales
import HeaderModal from "./Header";
import FooterModal from "./Footer";

// Context de Toast
import { useToast } from "../../context/ToastContext";

export default function Modal({ edit, create, open, setOpenModal, selectedUser, isEdit, getAllUsers }: ModalProps) {

    const [formData, setFormData] = useState<User>({
        id: selectedUser?.id || '',
        usuario: selectedUser?.usuario || '',
        estado: selectedUser?.estado || '',
        sector: selectedUser?.sector || 5000
    });
    const { showError } = useToast();

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.id) newErrors.id = 'El ID es obligatorio.';
        if (!formData.usuario) newErrors.usuario = 'Usuario es obligatorio.';
        if (!formData.estado) newErrors.estado = 'Estado es obligatorio.';
        if (!formData.sector) newErrors.sector = 'Sector es obligatorio.';

        if (Object.keys(newErrors).length > 0) {
            showError('Formulario incompleto');
        }

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (validateForm()) {
            if (isEdit) {
                await edit(formData);
            } else {
                await create(formData);
            }
            setOpenModal(false);        
            getAllUsers();
        }
    };

    return (
        <div className="card flex justify-content-center">
            <Dialog
                visible={open}
                style={{ width: '50rem' }}
                closable={false}
                onHide={() => setOpenModal(false)}
                header={
                    <HeaderModal
                        setOpenModal={setOpenModal}
                    />
                }
                footer={
                    <FooterModal
                        id={formData?.id}
                        isEdit={isEdit}
                        open={open}
                        setOpenModal={setOpenModal}
                        handleSubmit={handleSubmit}
                        getAllUsers={getAllUsers}
                    />
                }
            >
                <div className="p-3">
                    <div className="mb-2">ID:</div>
                    <div className="p-inputgroup flex-1">
                        <InputText
                            className="w-12 mb-3"
                            value={formData.id}
                            onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                        />
                    </div>

                    <div className="mb-2">Usuario:</div>
                    <div className="p-inputgroup flex-1">
                        <InputText
                            className="w-12 mb-3"
                            value={formData.usuario}
                            onChange={(e) => setFormData({ ...formData, usuario: e.target.value })}
                        />
                    </div>

                    <div className="mb-2">Estado:</div>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon mb-3" style={{ backgroundColor: 'white' }}>
                            <i className="pi pi-search"></i>
                        </span>
                        <Dropdown
                            value={formData.estado}
                            onChange={(e) => setFormData({ ...formData, estado: e.value })}
                            options={['ACTIVO', 'INACTIVO']}
                            placeholder="Estado"
                            className="w-full md:w-14rem mb-3"
                            style={{ borderLeft: 'none', backgroundColor: 'white' }}
                        />
                    </div>

                    <div className="mb-3">Sector:</div>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon" style={{ backgroundColor: 'white' }}>
                            <i className="pi pi-search"></i>
                        </span>
                        <InputText
                            placeholder="Sector"
                            style={{ borderLeft: 'none', backgroundColor: 'white' }}
                            value={formData.sector?.toString()}
                            disabled
                            onChange={(e) => setFormData({ ...formData, sector: Number(e.target.value) })}
                        />
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
