import { Button } from 'primereact/button';
import { ButtonsGroupProps } from '@/src/interfaces/IButtonsGroup';

export default function ButtonsGroup({ user, handleEdit, handleDelete }: ButtonsGroupProps) {
     return (
          <div className="flex justify-content-end gap-2">
               <Button
                    icon="pi pi-pencil"
                    className="p-button-rounded p-button-info"
                    onClick={() => handleEdit && handleEdit(user.id)}
                    tooltip="Editar"
                    tooltipOptions={{ position: 'top' }}
               />
               <Button
                    icon="pi pi-trash"
                    className="p-button-rounded p-button-danger"
                    onClick={() => handleDelete && handleDelete(user.id)}
                    tooltip="Eliminar"
                    tooltipOptions={{ position: 'top' }}
               />
          </div>
     );
}   
