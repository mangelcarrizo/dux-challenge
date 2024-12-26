import React from 'react'
import { Button } from 'primereact/button';

export default function FooterModal(setOpenModal: void) {
     return (
          <div className="flex justify-content-center p-4 gap-3">
               <Button
                    label="Confirmar"
                    icon="pi pi-check"
                    onClick={() => console.log('Confirmar acción')}
                    autoFocus
               />
               <Button
                    label="Cancelar"
                    icon="pi pi-times"
                    onClick={() => setOpenModal(false)}
                    className="bg-white"
                    style={{ color: '#0763E7' }}
               />
          </div>
     )
}
