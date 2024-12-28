// Dependencias externas
import React from 'react';
import Image from 'next/image';

// Componentes de PrimeReact
import { Menubar } from 'primereact/menubar';

export default function Navbar() {
    const start = (
        <div>
            <Image
                width={40}
                height={40}
                unoptimized
                alt='logo'
                src='https://s3-alpha-sig.figma.com/img/6180/7c6c/3b0efd17f7f0e998d81f8c56852edb1a?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TtEa-YyByYfYinaakjFzhxF6O1ifInm4yXb75iSTQY38ukNFOqE9zQoQbeaV~PT6tlHZD1Ztdobnf1wTPJTL4SuoPcRPjfQqK9ywrqqdAEGga6iRZa0w0MpXwmEY2un36f~DWITbspjBPAz7XahQYDD94bFFwWK6tibqb3XJl4IrFsBJJ1LSc56RkK~ZFXy2MmEIsAHtwxFL1yi5znAAFPIs-EtMgMaPIPAfgN-3ww2-Rma3Te7ZQgW8sVGtEC5vCkyyYaU3BOcSKahvkXRFzLP7SwEbosUYu5EYR97VCD~iMqK~iHhHvEG2CsjlI6fHaL39zkuT0PZk4-kFTQWpkw__'
            />
        </div>
    );
    const end = (
        <div className='mr-3'>
                <i className="pi pi-cog" style={{ fontSize: '1.5rem', color: 'white' }} />
        </div>
    );

    return (
        <div className="card">
            <Menubar style={{ backgroundColor: '#0763E7' }} start={start} end={end} />
        </div>
    )
}
