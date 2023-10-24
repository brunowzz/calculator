import CustomIcon from "../../components/CustomIcon";

import styles from "./style.module.scss";

const Home = () => {
  return (
    <main className={styles.main}>
      <section className={styles.containerNumbers}>
        <h1 className={styles.mathematicalOperation}>6,291÷5</h1>

        <input
          className={styles.accountResult}
          type="number"
          placeholder="1,258.2"
          autoFocus
        />
      </section>

      <section className={styles.container}>
        <button className={`${styles.button} ${styles.mediumEmphasis}`}>
          C
        </button>

        <button className={`${styles.button} ${styles.mediumEmphasis}`}>
          <CustomIcon icon="squareRoot" size="2rem" color="#fff" />
        </button>

        <button className={`${styles.button} ${styles.mediumEmphasis}`}>
          <CustomIcon icon="percentage" size="2rem" color="#fff" />
        </button>

        <button className={`${styles.button} ${styles.highEmphasis}`}>
          <CustomIcon icon="division" size="2rem" color="#fff" />
        </button>

        <button className={`${styles.button} ${styles.lowEmphasis}`}>7</button>

        <button className={`${styles.button} ${styles.lowEmphasis}`}>8</button>

        <button className={`${styles.button} ${styles.lowEmphasis}`}>9</button>

        <button className={`${styles.button} ${styles.highEmphasis}`}>
          <CustomIcon icon="multiplication" size="2rem" color="#fff" />
        </button>

        <button className={`${styles.button} ${styles.lowEmphasis}`}>4</button>

        <button className={`${styles.button} ${styles.lowEmphasis}`}>5</button>

        <button className={`${styles.button} ${styles.lowEmphasis}`}>6</button>

        <button className={`${styles.button} ${styles.highEmphasis}`}>
          <CustomIcon icon="decrease" size="2rem" color="#fff" />
        </button>

        <button className={`${styles.button} ${styles.lowEmphasis}`}>1</button>

        <button className={`${styles.button} ${styles.lowEmphasis}`}>2</button>

        <button className={`${styles.button} ${styles.lowEmphasis}`}>3</button>

        <button className={`${styles.button} ${styles.highEmphasis}`}>
          <CustomIcon icon="sum" size="2rem" color="#fff" />
        </button>

        <button className={`${styles.button} ${styles.lowEmphasis}`}>.</button>

        <button className={`${styles.button} ${styles.lowEmphasis}`}>0</button>

        <button className={`${styles.button} ${styles.lowEmphasis}`}>
          <CustomIcon icon="delete" size="2rem" color="#fff" />
        </button>

        <button className={`${styles.button} ${styles.highEmphasis}`}>
          <CustomIcon icon="equal" size="2rem" color="#fff" />
        </button>
      </section>
    </main>
  );
};

export default Home;
