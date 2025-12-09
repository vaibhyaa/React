/* eslint-disable react/react-in-jsx-scope */
import Spinner from "./Spinner";
import styles from "./SpinnerFullPage.module.css";

function SpinnerFullPage() {
  return (
    <>
      <div className={styles.spinnerFullpage}>
        <Spinner />
      </div>
    </>
  );
}

export default SpinnerFullPage;
