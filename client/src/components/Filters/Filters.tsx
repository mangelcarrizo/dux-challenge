'use client';

// Componentes de PrimeReact
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

// Modelos o tipos
import { DropdownOptions } from '@/src/models/Dropdown';
import { FiltersProps } from '@/src/interfaces/IFilters';

// Dependencias externas
import { useRef, useState } from 'react';

export default function Filters({ name, setName, isActive, setIsActive, setPage }: FiltersProps) {
     const [tempName, setTempName] = useState(name);
     const timeoutRef = useRef<NodeJS.Timeout | null>(null);

     const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const newName = e.target.value;
          setTempName(newName);

          if (timeoutRef.current) {
               clearTimeout(timeoutRef.current);
          }

          timeoutRef.current = setTimeout(() => {
               setName(newName);
               setPage(1)
          }, 300);
     };

     return (
          <div className="card flex flex-row md:flex-row gap-3 mb-3">
               <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon" style={{ backgroundColor: 'white' }}>
                         <i className="pi pi-search"></i>
                    </span>
                    <InputText
                         placeholder="Buscar por nombre"
                         value={tempName}
                         onChange={handleNameChange}
                         style={{ borderLeft: 'none', backgroundColor: 'white' }}
                    />
               </div>

               <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon" style={{ backgroundColor: 'white' }}>
                         <i className="pi pi-search"></i>
                    </span>
                    <InputText
                         placeholder="Sector"
                         style={{ borderLeft: 'none', backgroundColor: 'white' }}
                         disabled
                         value={'Sector: 5000'}
                    />
               </div>

               <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon" style={{ backgroundColor: 'white' }}>
                         <i className="pi pi-search"></i>
                    </span>
                    <Dropdown
                         value={isActive}
                         onChange={(e) => setIsActive(e.value)}
                         options={DropdownOptions}
                         optionLabel="option"
                         placeholder="Estado" className="w-full md:w-14rem"
                         style={{ borderLeft: 'none', backgroundColor: 'white' }}
                    />
               </div>
          </div>
     )
}
