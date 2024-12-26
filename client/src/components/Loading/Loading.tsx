import { ProgressSpinner } from 'primereact/progressspinner';

export default function Loading() {
     return (
          <div className="card w-100 h-full flex justify-content-center">
               <ProgressSpinner />
          </div>
     )
}
