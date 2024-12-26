import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import useUsers from '@/src/hooks/useUsers';
import { ActiveDropdown, User } from '@/src/interfaces/IUsers';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import Filters from '../Filters/Filters';
import Modal from '../Modal/Modal';
import { calculatePage } from '@/src/utils/utils';
import Loading from '../Loading/Loading';

export default function TableComponent() {
     const [name, setName] = useState<string>('');
     const [isActive, setIsActive] = useState<ActiveDropdown | null>(null);
     const [page, setPage] = useState<number>(1);
     const [limit, setLimit] = useState<number>(10);

     const [selectedUser, setSelectedUser] = useState<User | undefined>();
     const [openModal, setOpenModal] = useState<boolean>(false);

     const onPageChange = (event: PaginatorPageChangeEvent) => {
          const newPage = calculatePage(event)
          setPage(newPage);
          setLimit(event.rows);
     };

     const { users, totalUsers, loading } = useUsers(name, isActive, page, limit);

     return (
          <>
               {loading ? (
                    <Loading />
               ) : (
                    <div className="card">
                         <Filters
                              name={name}
                              setName={setName}
                              isActive={isActive}
                              setIsActive={setIsActive}
                              setPage={setPage}
                         />
                         <DataTable value={users}>
                              <Column field="id" header="ID" style={{ width: '7rem' }} sortable />
                              <Column
                                   field="usuario"
                                   header="Usuario"
                                   sortable
                                   body={(user) => (
                                        <span
                                             style={{ cursor: 'pointer', color: '#0763E7', textDecoration: 'underline' }}
                                             onClick={() => {
                                                  setSelectedUser(user)
                                                  setOpenModal(true)
                                             }}
                                        >
                                             {user.usuario}
                                        </span>
                                   )}
                              />
                              <Column field="estado" header="Estado" sortable />
                              <Column field="sector" header="Sector" sortable />
                         </DataTable>
                         <Paginator
                              first={(page - 1) * limit}
                              rows={limit}
                              totalRecords={totalUsers}
                              rowsPerPageOptions={[10, 20, 30]}
                              onPageChange={onPageChange}
                         />
                    </div>
               )}
               {openModal && (
                    <Modal
                         open={openModal}
                         setOpenModal={setOpenModal}
                         selectedUser={selectedUser}
                    />
               )}
          </>
     )
}