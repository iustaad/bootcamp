import NavBar from "../components/navBar";
import mailService from "../services/mailService";
import styles from "../styles/CourseEnrollment.module.css";

const testing = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <h1>Email Testing</h1>
      <button
        className={styles.button}
        onClick={() => {
          mailService.passwordResetEmail();
        }}
      >
        <span className={styles.button2}>Password Reset</span>
      </button>
      <br />
      <button
        className={styles.button}
        onClick={() => {
          mailService.sendCheckoutEmail();
        }}
      >
        <span className={styles.button2}>Checkout</span>
      </button>
      <br />
      <button
        className={styles.button}
        onClick={() => {
          mailService.DemoClassEmail();
        }}
      >
        <span className={styles.button2}>Demo Class</span>
      </button>
    </div>
  );
};

export default testing;
