import { Formik, Form } from "formik";
import { TextFields } from "../components/TextFields";
import * as Yup from "yup";
import moodleService from "../services/moodleService";
import styles from "../styles/Login.module.css";

const login = () => {
  const token = "";

  const validate = Yup.object({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const credentials = async (values) => {
    let username = values.username;
    let password = values.password;

    try {
      const response = await moodleService.credentials(username, password);
      sessionStorage.setItem("token", response.data.token);
      token = response.data.token;
    } catch (err) {
      console.log(err);
    }
    getAllEnrolledUsers(token);
  };

  const getAllEnrolledUsers = async () => {
    try {
      const response = await moodleService.getAllEnrolledUsers(token);
      console.log(response.data);
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
        credentials(values);
      }}
    >
      {(formik) => (
        <div className={styles.container}>
          <h1>Login</h1>
          <Form>
            <TextFields
              className={styles.textField}
              label="Username:"
              name="username"
              type="username"
            />
            <TextFields
              className={styles.textField}
              label="Password:   "
              name="password"
              type="password"
            />
            <button className={styles.button} type="submit">
              Login
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default login;
