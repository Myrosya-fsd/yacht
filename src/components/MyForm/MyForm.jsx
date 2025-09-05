import { Formik, Form, Field } from "formik";
import styles from "./MyForm.module.css";

function MyForm() {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        phone: "",
        comment: "",
      }}
      onSubmit={(values) => {
        console.log("Form data:", values);
      }}
    >
      {() => (
        <Form className={styles.form}>
          <Field
            className={styles.input}
            type="text"
            name="username"
            placeholder="Your name"
          />
          <Field
            className={styles.input}
            type="email"
            name="email"
            placeholder="Your email"
          />
          <Field
            className={styles.input}
            type="tel"
            name="phone"
            placeholder="Phone number"
          />
          <Field
            className={styles.textarea}
            as="textarea"
            name="comment"
            placeholder="Comment"
          />
          <button type="submit" className={styles.btn}>
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default MyForm;
