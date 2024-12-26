export default function HeaderModal(setOpenModal: void) {
     return (
          <div style={{
               display: 'flex',
               alignItems: 'center',
               backgroundColor: '#0763E7',
               color: 'white',
               width: '100%',
               padding: '0 15px',
               height: 'auto',
               minHeight: '3rem'
          }}>
               <span style={{ flex: 1, fontWeight: 'bold' }}>Usuario</span>
               <div className="flex align-items-center space-x-2 gap-2">
                    <i className="pi pi-cog cursor-pointer" style={{ fontSize: '1rem' }}></i>
                    <i className="pi pi-minus cursor-pointer" style={{ fontSize: '1rem' }} onClick={() => setOpenModal(false)}></i>
               </div>
          </div>
     )
}
