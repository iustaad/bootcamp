//formik used to create forms
import { Formik, Form } from "formik";
//Yup is used for form validation
import * as Yup from "yup";
//moodle service used for handel HTTP request
import moodleService from "../Services/moodleServiceLogin";
//TextField component is used for generate input fields
import { TextField } from "../components/TextField";
// styles used for styling of this component
import styles from "../styles/login.module.css";
import Link from "next/link";
// handle http request
import user from "../services/user";

export default function Login() {
  const userDetails = [];

  const validate = Yup.object({
    username: Yup.string(),
    password: Yup.string(),
  });

  const loginUsr = async (values) => {
    try {
      const response = await moodleService.login(values);
      // console.log(response.data.token);
      localStorage.setItem("token", response.data.token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        localStorage.setItem("username", values.username);
        loginUsr(values);
      }}
    >
      {(formik) => (
        <div className={styles.main}>
          <div className={styles.card}>
            <div className={styles.form}>
              <h1>Moodle Login</h1>
              <Form>
                <TextField
                  className={styles.userName}
                  label="User Name"
                  name="username"
                  type="text"
                />
                <TextField
                  className={styles.password}
                  label="Password"
                  name="password"
                  type="password"
                />
                <Link href="/dashboard">
                  <button className={styles.button} type="submit">
                    Login
                  </button>
                </Link>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}
