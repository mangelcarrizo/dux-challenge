import React from "react";
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { ModalProps } from "@/src/interfaces/IModal";
import HeaderModal from "./Header";
import FooterModal from "./Footer";

export default function Modal({ open, setOpenModal, selectedUser }: ModalProps) {

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
                        setOpenModal={setOpenModal}
                    />
                }
            >
                <div className="p-3">
                    <div className="mb-2">ID:</div>
                    <div className="p-inputgroup flex-1">
                        <InputText
                            className="w-12 mb-3"
                            keyfilter="int"
                            value={selectedUser?.id || ''}
                            disabled
                        />
                    </div>

                    <div className="mb-2">Usuario:</div>
                    <div className="p-inputgroup flex-1">
                        <InputText
                            className="w-12 mb-3"
                            value={selectedUser?.usuario || ''}
                            disabled
                        />
                    </div>

                    <div className="mb-2">Estado:</div>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon mb-3" style={{ backgroundColor: 'white' }}>
                            <i className="pi pi-search"></i>
                        </span>
                        <Dropdown
                            value={selectedUser?.estado || ''}
                            onChange={(e) => console.log(e)}
                            options={['ACTIVO', 'INACTIVO']}
                            optionLabel="Estado"
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
                            disabled
                            value={selectedUser?.sector ? String(selectedUser.sector) : ''}
                        />
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
