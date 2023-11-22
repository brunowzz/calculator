import { Link } from "react-router-dom";

import styles from "./style.module.scss";

const NotFound = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Página não encontrada...</h1>
      <Link to="/"> voltar para a calculadora </Link>
    </main>
  );
};

export default NotFound;
