import { useState } from "react";

import CustomIcon from "../../components/CustomIcon";

import styles from "./style.module.scss";

const Home = () => {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState(0);

  console.log(display);

  const handleClick = (value) => {
    switch (value) {
      case "=":
        try {
          setResult(eval(display));
        } catch (error) {
          setResult(error);
        }

        setDisplay("");

        break;

      case "C":
        setDisplay("");
        setResult(0);
        setIsResultDisplayed(false);
        break;

      case "√":
        const squareRoot = Math.sqrt(display);
        const formatResult =
          squareRoot % 1 === 0 ? squareRoot : squareRoot.toFixed(2);

        setResult(formatResult);
        setDisplay(formatResult);
        break;

      case "%":
        if (/[\d.]$/.test(display)) {
          const numberBeforePercentage = display.match(/[\d.]+$/);

          if (numberBeforePercentage) {
            const percentageValue = parseFloat(numberBeforePercentage[0]) / 100;

            setDisplay(display.replace(/[\d.]+$/, percentageValue));
          }
        }
        break;

      case "del":
        if (display !== 0) {
          setDisplay(display.slice(0, -1));
        }

        break;

      default:
        setDisplay(display + value);
        break;
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.containerNumbers}>
        <h1 className={styles.mathematicalOperation}>{display}</h1>

        <input
          className={styles.accountResult}
          type="number"
          autoFocus
          value={result}
          readOnly
        />
      </section>

      <section className={styles.container}>
        <button
          className={`${styles.button} ${styles.mediumEmphasis}`}
          onClick={() => handleClick("C")}
        >
          C
        </button>

        <button
          className={`${styles.button} ${styles.mediumEmphasis}`}
          onClick={() => handleClick("√")}
        >
          <CustomIcon icon="squareRoot" size="2rem" color="#fff" />
        </button>

        <button
          className={`${styles.button} ${styles.mediumEmphasis}`}
          onClick={() => handleClick("%")}
        >
          <CustomIcon icon="percentage" size="2rem" color="#fff" />
        </button>

        <button
          className={`${styles.button} ${styles.highEmphasis}`}
          value="/"
          onClick={() => handleClick("/")}
        >
          <CustomIcon icon="division" size="2rem" color="#fff" />
        </button>

        <button
          className={`${styles.button} ${styles.lowEmphasis}`}
          value="7"
          onClick={() => handleClick("7")}
        >
          7
        </button>

        <button
          className={`${styles.button} ${styles.lowEmphasis}`}
          value="8"
          onClick={() => handleClick("8")}
        >
          8
        </button>

        <button
          className={`${styles.button} ${styles.lowEmphasis}`}
          value="9"
          onClick={() => handleClick("9")}
        >
          9
        </button>

        <button
          className={`${styles.button} ${styles.highEmphasis}`}
          value="x"
          onClick={() => handleClick("*")}
        >
          <CustomIcon icon="multiplication" size="2rem" color="#fff" />
        </button>

        <button
          className={`${styles.button} ${styles.lowEmphasis}`}
          value="4"
          onClick={() => handleClick("4")}
        >
          4
        </button>

        <button
          className={`${styles.button} ${styles.lowEmphasis}`}
          value="5"
          onClick={() => handleClick("5")}
        >
          5
        </button>

        <button
          className={`${styles.button} ${styles.lowEmphasis}`}
          value="6"
          onClick={() => handleClick("6")}
        >
          6
        </button>

        <button
          className={`${styles.button} ${styles.highEmphasis}`}
          value="-"
          onClick={() => handleClick("-")}
        >
          <CustomIcon icon="decrease" size="2rem" color="#fff" />
        </button>

        <button
          className={`${styles.button} ${styles.lowEmphasis}`}
          value="1"
          onClick={() => handleClick("1")}
        >
          1
        </button>

        <button
          className={`${styles.button} ${styles.lowEmphasis}`}
          value="2"
          onClick={() => handleClick("2")}
        >
          2
        </button>

        <button
          className={`${styles.button} ${styles.lowEmphasis}`}
          value="3"
          onClick={() => handleClick("3")}
        >
          3
        </button>

        <button
          className={`${styles.button} ${styles.highEmphasis}`}
          value="+"
          onClick={() => handleClick("+")}
        >
          <CustomIcon icon="sum" size="2rem" color="#fff" />
        </button>

        <button
          className={`${styles.button} ${styles.lowEmphasis}`}
          value="."
          onClick={() => handleClick(".")}
        >
          .
        </button>

        <button
          className={`${styles.button} ${styles.lowEmphasis}`}
          value="0"
          onClick={() => handleClick("0")}
        >
          0
        </button>

        <button
          className={`${styles.button} ${styles.lowEmphasis}`}
          onClick={() => handleClick("del")}
        >
          <CustomIcon icon="delete" size="2rem" color="#fff" />
        </button>

        <button
          className={`${styles.button} ${styles.highEmphasis}`}
          onClick={() => handleClick("=")}
        >
          <CustomIcon icon="equal" size="2rem" color="#fff" />
        </button>
      </section>
    </main>
  );
};

export default Home;
