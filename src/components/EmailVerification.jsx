import styles from "../styles/email-verification.module.css";

import Navbar from "./Navbar.jsx";

const EmailVerification = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <Navbar />
      <div className={styles.remainingBody}>
        <div className={styles.card}>
          <h2 className={styles.title}>CHECK YOUR EMAIL</h2>
          <p className={styles.description}>
            We have sent a reset link to your registered email id. <br />
            Enter the 5-digit code that is mentioned in the email.
          </p>
          <div className={styles.inputContainer}>
            {[...Array(5)].map((_, index) => (
              <input key={index} type="text" maxLength="1" className={styles.input} />
            ))}
          </div>
          <button className={styles.verifyButton} disabled>Verify Code</button>
          <p className={styles.resendText}>
            Haven’t received the email yet? <a href="#" className={styles.resendLink}>Resend email</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
