import { Formik, Form } from "formik";
import { TextField } from "../components/TextField";
import * as Yup from "yup";
import moodleService from "../Services/moodleService";
import styles from "../styles/login.module.css";

export default function Login() {
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

  const getEnrolledUser = async () => {
    // const userToken = localStorage.getItem("token");
    try {
      const response = await moodleService.enrolledUser();
      console.log(response.data[0]);
      console.log(response.data[1]);
      console.log(response.data[2]);
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
        loginUsr(values);
        getEnrolledUser();
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

                <button className={styles.loginButton} type="submit">
                  Login
                </button>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}
