'use client';
import styles from "../styles/page.module.css";
import TableComponent from "../components/Table/Table";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <div className="card flex flex-column flex-wrap justify-content-center">
            <p className="text-5xl">
              Usuarios
            </p>
            <TableComponent />
          </div>
        </div>
      </main>
    </div>
  );
}
