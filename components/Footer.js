import { Form, Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import styles from "../styles/Footer.module.css";

function Footer() {
  const validate = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    message: Yup.string().required("Required"),
  });
  return (
    <footer className={styles.footer_distributed}>
      <div className={styles.footer_left}>
        <h3>BootCamp</h3>

        <p className={styles.footer_links}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
          <Link href="/demoform">
            <a>Demo Form</a>
          </Link>
          <Link href="/form">
            <a>Form</a>
          </Link>
          <Link href="/report">
            <a>Report</a>
          </Link>
          <Link href="/testing">
            <a>Testing</a>
          </Link>
        </p>

        <p className={styles.footer_company_name}>Bootcapm © 2022</p>
      </div>

      <div className={styles.footer_right}>
        <Formik
          initialValues={{
            email: "",
            message: "",
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(formik) => (
            <Form className={styles.form}>
              <p>Contact Us</p>
              <br />
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <textarea
                type="message"
                name="message"
                id="message"
                placeholder="Message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              />
              <button type="submit">Send</button>
            </Form>
          )}
        </Formik>
      </div>
    </footer>
  );
}
// >

export default Footer;
