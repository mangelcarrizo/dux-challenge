'use client';

// Estilos
import styles from "../styles/page.module.css";

// Componentes locales
import TableComponent from "../components/Table/Table";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <div className="card flex flex-column flex-wrap justify-content-center">
            <Header/>
            <TableComponent />
          </div>
        </div>
      </main>
    </div>
  );
}
